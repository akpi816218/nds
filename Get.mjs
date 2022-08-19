import { readFileSync } from 'fs';

const Get = (key) => {
	let json = JSON.parse(readFileSync('.ndsf', { encoding: "utf-8" }));

	return;
}

export { Get };