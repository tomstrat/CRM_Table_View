"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenvConfig = dotenv_1.default.config();
const app = (0, express_1.default)();
const codeRedirect = `https://login.salesforce.com/services/oauth2/authorize?client_id=${process.env.CONSUMER_KEY}&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code`;
const tokenRedirect = `https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/oauth2/token`;
app.get("/", (req, res) => {
    res.send(`<button onclick="window.location.replace('${codeRedirect}')">Login</button>`);
});
app.get("/oauth2/callback", async (req, res) => {
    const tokenData = await (0, node_fetch_1.default)(tokenRedirect, {
        method: "POST",
        body: `grant_type=authorization_code&code=${req.query.code}&client_id=${process.env.CONSUMER_KEY}&client_secret=${process.env.CONSUMER_SECRET}&redirect_uri=https://localhost:3000/oauth2/callback`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    const token = await tokenData.json();
    console.log(token);
    const resourcesData = await (0, node_fetch_1.default)("https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/data/v33.0/sobjects/Account/describe/compactLayouts", {
        headers: {
            "Authorization": `Bearer ${token.access_token}`
        }
    });
    const resources = await resourcesData.json();
    res.send(resources);
});
app.listen(3000, () => console.log("Server has started on http://localhost:3000"));
