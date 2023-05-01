"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = __importDefault(require("./registry"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const app = (0, registry_1.default)()
    .then(app => {
    app.listen(PORT, () => console.log("Server has started"));
})
    .catch(err => {
    console.log(err);
});
