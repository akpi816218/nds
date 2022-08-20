import { readFileSync } from 'fs';
import { NDSData } from './NDSData.mjs';

const Get = (regexp, async = false) => {
	if (async) {
		return new Promise((res, rej) => {
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
				allData.push(new NDSData(value));
			});

			if (allData.length == 0) {
				rej('NDSGetError: No matches found');
			}
			res(allData);
		});
	}

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
		allData.push(new NDSData(value));
	});

	return allData;
};

export { Get };
