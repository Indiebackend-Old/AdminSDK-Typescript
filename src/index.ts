import {
	CurrenciesApi,
	StatsApi,
	GroupsApi,
	FunctionsApi,
	Configuration,
} from "./api";

export class Indiebackend {
	currencies: CurrenciesApi;
	groups: GroupsApi;
	stats: StatsApi;
	functions: FunctionsApi;

	constructor(appSecret: string) {
		const cfg = new Configuration({
			apiKey: appSecret,
		});

		this.currencies = new CurrenciesApi(cfg);
		this.groups = new GroupsApi(cfg);
		this.functions = new FunctionsApi(cfg);
		this.stats = new StatsApi(cfg);
	}
}
