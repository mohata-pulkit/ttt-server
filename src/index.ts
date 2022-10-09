import express from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";

const main = async () => {
	var jsonParser = bodyParser.json();

	var corsOptions = {
		origin: "http://localhost:3000",
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	};

	const app = express();
	app.listen(1000, () => {
		console.log("Hey bitch i am on https://localhost:1000");
	});

	app.use(cors(corsOptions));
	app.use(jsonParser);

	app.get("/", (req, res) => {
		console.log(req);
		res.status(200);
		res.send("Welcome to root URL of Server");
	});

	var i = 0;

	app.post("/arts", (req, res) => {
		console.log(fs.readFileSync("../jsons/" + i + ".json").toString());
		if (
			!(
				JSON.stringify(req.body) ===
				fs.readFileSync("../jsons/" + i + ".json").toString()
			)
		) {
			i++;
			fs.writeFileSync(
				"../jsons/" + i + ".json",
				JSON.stringify(req.body)
			);
		}
		res.send({
			data: "up in a mf",
		});
	});
};

main();
