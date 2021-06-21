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

	const test = admin.messaging
		.getChannel("testChannel")
		.on("subscribed", (data) => console.log("subscribed", data))
		.on("message", (data) => console.log("message", data))
		.on("subscribe_error", (err) => console.log("subscribe error", err));

	test.publish("Hello world!");
}

test();
