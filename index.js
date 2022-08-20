import { Get } from './Get.mjs';
import { NDSData } from './NDSData.mjs';
import { Set } from './Set.mjs';

Get(/.*/, true).then((value) => {
	console.log(value);
});
