import { readFileSync } from 'fs';
import { Data } from './Data.mjs';

const Get = (key) => {
	// return JSON.parse(readFileSync(".ndsf", { encoding: "utf-8" }));
	return new Data(JSON.parse(readFileSync(".ndsf", { encoding: "utf-8" })));
}

export { Get };