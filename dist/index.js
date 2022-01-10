"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_1 = __importDefault(require("./routes/auth/get"));
const get_2 = __importDefault(require("./routes/data/get"));
const app = (0, express_1.default)();
app.use("/oauth2", get_1.default);
app.use("/data", get_2.default);
app.get("/", (req, res) => {
    res.redirect("/oauth2/login");
});
app.listen(3000, () => console.log("Server has started on http://localhost:3000"));
