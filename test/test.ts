import { config } from "dotenv";
config();

import { Indiebackend } from "../src";

const admin = new Indiebackend(
	process.env.APP_SECRET || "",
	process.env.APP_ID || ""
);

const profileId = "814Qgmfsx3wq2b7jMDq2";

async function test() {
	await admin.messaging.initialize();
}

test();
