import { readFileSync } from 'fs';
import { Data } from './Data.mjs';

const Get = (regexp, case_insensitive = false) => {
	let allJson = [],
		allData = [],
		allHits = [],
		json = JSON.parse(readFileSync('.ndsf', { encoding: 'utf-8' }));

	for (let i in json) {
		allJson.push(json[i]);
	}

	allJson.sort((a, b) => {
		a = a.key.toLowerCase();
		b = b.key.toLowerCase();
		return a < b ? -1 : a > b ? 1 : 0;
	});

	allHits = allJson.filter((value) => {
		return regexp.test(value.key) ? true : false;
	});

	allHits.forEach((value) => {
		allData.push(new Data(value));
	});

	return allData;
};

export { Get };
