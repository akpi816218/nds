import { writeFileSync } from 'fs';
import { NDSData } from './NDSData.mjs';
import { Get } from './Get.mjs';
import { format } from 'prettier';

const Set = (data) => {
	if (!data instanceof NDSData) return;
	let allJson = [],
		allData = Get(/.*/i);
	allData.push(data);
	allData.forEach((value) => {
		allJson.push(
			format(value.toJSONString(), {
				parser: 'json-stringify',
				useTabs: true,
			}).replace(/\n$/, '')
		);
	});
	writeFileSync(
		'.ndsf',
		format(`[\n${allJson.join(',\n')}\n]`, {
			parser: 'json-stringify',
			useTabs: true,
		}),
		{ encoding: 'utf-8' }
	);
};

export { Set };
