import { Get, GetSync, NDSData, Set, SetSync } from './nds.mjs';
Get()
	.catch((e) => {
		console.error(e)
	})
	.then((v) => {
		console.log(v);
	});
