import { Indiebackend } from "../src";

const admin = new Indiebackend(
	"dee8e7715b59fb4a91a8ca02aed77ac234ec1122efc3d377c487457e7b05800e"
);

const profileId = "814Qgmfsx3wq2b7jMDq2";

async function test() {
	const old = await admin.currencies.getCurrencies(profileId);
	console.log(
		(
			await admin.currencies.setCurrencies(profileId, {
				privateCurrencies: [
					{ name: "test", value: 1234, isIncrement: false },
				],
				publicCurrencies: Object.entries(old.data.publicCurrencies).map(
					([currency, value]) => ({
						name: currency,
						value,
						isIncrement: false,
					})
				),
			})
		).data
	);

	console.log(
		await admin.currencies.updateCurrencies(profileId, {
			publicCurrencies: [
				{ name: "test", value: 123456, isIncrement: true },
			],
			privateCurrencies: [],
		})
	);
}

test();
