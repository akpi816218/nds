import { readFileSync } from 'fs';
import { Data } from './Data.mjs';

const Get = (key) => {
	let allJson = [], allData = [], json = JSON.parse(readFileSync(".ndsf", { encoding: "utf-8" }));
	for (let i in json) {
		allJson.push(json[i])
	}
	// return new Data(jsondata);
	return allData;
}

export { Get };