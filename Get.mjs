import { readFileSync } from 'fs';
import { Data } from './Data';

const Get = (key) => {
	let json = JSON.parse(readFileSync('.ndsf', { encoding: "utf-8" }));
	let data = new Data(json);
	return;
}

export { Get };