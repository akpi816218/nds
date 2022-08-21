import { existsSync, readFileSync, writeFileSync } from 'fs';
import { format } from 'prettier';

class NDSError extends Error {}

class NDSData {
	constructor(json) {
		this.key = json.key;
		this.values = json.values;
	}
	toJSONString() {
		return JSON.stringify({
			key: this.key,
			values: this.values,
		});
	}
	toString() {
		return this.toJSONString();
	}
}

const Get = async (regexp = /.*/, file = '.ndsf') => {
	return new Promise((res, rej) => {
		if (!regexp instanceof RegExp)
			rej(new NDSError(`Invalid RegExp: ${regexp}`));
		if (!existsSync(file) || !file.match(/\.ndsf$/))
			rej(new NDSError(`Invalid file: '${file}' does not exist`));
		let allJson = [],
			allData = [],
			allHits = [],
			json = JSON.parse(readFileSync(file, { encoding: 'utf-8' }));

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
};

const GetSync = (regexp = /.*/, file = '.ndsf') => {
	if (!regexp instanceof RegExp)
		throw new NDSError(`Invalid RegExp: ${regexp}`);
	if (!existsSync(file) || !file.match(/\.ndsf$/))
		throw new NDSError(`Invalid file: '${file}' does not exist`);
	let allJson = [],
		allData = [],
		allHits = [],
		json = JSON.parse(readFileSync(file, { encoding: 'utf-8' }));

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

const Set = async (data = new NDSData(), file = '.ndsf') => {
	return new Promise((res, rej) => {
		if (!data instanceof NDSData || !data.key || !data.values)
			rej(new NDSError(`Invalid data: ${data}`));
		if (!existsSync(file) || !file.match(/\.ndsf$/))
			rej(new NDSError(`Invalid file: '${file}' does not exist`));
		let allJson = [],
			allData = GetSync(/.*/i);
		allData.push(data);
		allData.forEach((value) => {
			allJson.push(
				format(value.toJSONString(), {
					parser: 'json-stringify',
					useTabs: true,
				})
			);
		});
		writeFileSync(
			file,
			format(`[\n${allJson.join(',\n')}\n]`, {
				parser: 'json-stringify',
				useTabs: true,
			}),
			{ encoding: 'utf-8' }
		);
		res(true);
	});
};

const SetSync = (data = new NDSData(), file = '.ndsf') => {
	if (!data instanceof NDSData || !data.key || !data.values)
		throw new NDSError(`Invalid data: ${data}`);
	if (!existsSync(file) || !file.match(/\.ndsf$/))
		throw new NDSError(`Invalid file: '${file}' does not exist`);
	let allJson = [],
		allData = GetSync(/.*/i);
	allData.push(data);
	allData.forEach((value) => {
		allJson.push(
			format(value.toJSONString(), {
				parser: 'json-stringify',
				useTabs: true,
			})
		);
	});
	writeFileSync(
		file,
		format(`[\n${allJson.join(',\n')}\n]`, {
			parser: 'json-stringify',
			useTabs: true,
		}),
		{ encoding: 'utf-8' }
	);
};

export { NDSData, Get, GetSync, Set, SetSync };
