export class Data {
	constructor(json) {
		this.key = json.key;
		this.values = json.values;
	}
	toString() {
		return `Data: { key: ${this.key}, values: [ ${this.values.toString()} ] }`
	}
}