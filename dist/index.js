"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var jsonParser = body_parser_1.default.json();
    var corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    };
    const app = (0, express_1.default)();
    app.listen(1000, () => {
        console.log("Hey bitch i am on https://localhost:1000");
    });
    app.use((0, cors_1.default)(corsOptions));
    app.use(jsonParser);
    app.get("/", (req, res) => {
        console.log(req);
        res.status(200);
        res.send("Welcome to root URL of Server");
    });
    var i = 0;
    app.post("/arts", (req, res) => {
        console.log(fs_1.default.readFileSync("../jsons/" + i + ".json").toString());
        if (!(JSON.stringify(req.body) ===
            fs_1.default.readFileSync("../jsons/" + i + ".json").toString())) {
            i++;
            fs_1.default.writeFileSync("../jsons/" + i + ".json", JSON.stringify(req.body));
        }
        res.send({
            data: "up in a mf",
        });
    });
});
main();
//# sourceMappingURL=index.js.map