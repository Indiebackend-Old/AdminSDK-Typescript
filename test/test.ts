import { Indiebackend } from "../src";

const admin = new Indiebackend(
	"dee8e7715b59fb4a91a8ca02aed77ac234ec1122efc3d377c487457e7b05800e"
);

const profileId = "814Qgmfsx3wq2b7jMDq2";

async function test() {
	const test = await admin.stats.setStats("", {
		privateStats: [],
		publicStats: [],
	});
}

test();
