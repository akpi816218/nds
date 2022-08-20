export class NDSData {
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
