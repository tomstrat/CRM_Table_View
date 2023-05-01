"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const path_1 = __importDefault(require("path"));
const express_rate_limit_1 = require("express-rate-limit");
const body_parser_1 = __importDefault(require("body-parser"));
const ramda_1 = require("ramda");
const morgan_1 = __importDefault(require("morgan"));
const chalk_1 = __importDefault(require("chalk"));
function appFactory({ notProduction, Config, Routes, handleErrors, requireAuth }) {
    const limiter = (0, express_rate_limit_1.rateLimit)({
        windowMs: 15 * 60 * 1000,
        max: 100,
        standardHeaders: true,
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });
    const { environment } = Config;
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    app.use((0, hpp_1.default)());
    app.use((0, cookie_session_1.default)({
        name: "session",
        keys: [process.env.COOKIE_SECRET_KEY],
        maxAge: 3 * 60 * 60 * 1000,
        secure: environment.secure,
    }));
    app.use((0, morgan_1.default)((tokens, req, res) => {
        return [
            "\n",
            chalk_1.default.hex("#ff4757").bold("🍄  Morgan --> "),
            chalk_1.default.hex("#34ace0").bold(tokens.method(req, res)),
            chalk_1.default.hex("#ffb142").bold(tokens.status(req, res)),
            chalk_1.default.hex("#ff5252").bold(tokens.url(req, res)),
            chalk_1.default.hex("#2ed573").bold(tokens["response-time"](req, res) + " ms"),
            chalk_1.default.hex("#f78fb3").bold("@ " + tokens.date(req, res)),
            chalk_1.default.yellow(tokens["remote-addr"](req, res)),
            chalk_1.default.hex("#fffa65").bold("from " + tokens.referrer(req, res)),
            chalk_1.default.hex("#1e90ff")(tokens["user-agent"](req, res)),
            "\n",
        ].join(" ");
    }, { skip: (req, res) => process.env.NODE_ENV === "test" }));
    // app.use(csurf({ cookie: false }))
    app.use(limiter);
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    app.use(express_1.default.static(path_1.default.join(__dirname + "/../src/client/build")));
    Routes.map(route => {
        route[1].use(requireAuth(route[2]));
        route[1].stack = (0, ramda_1.reverse)(route[1].stack); // Reverse stack to put auth on top
        app.use(route[0], route[1]);
    });
    app.all("*", (req, res) => {
        return res.sendFile(path_1.default.join(__dirname + "/../src/client/build/index.html"));
    });
    app.use(handleErrors);
    return app;
}
exports.default = appFactory;
