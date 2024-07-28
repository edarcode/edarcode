export class EdarErr extends Error {
	msg: string;
	constructor(msg: string) {
		super();
		this.name = "EdarErr";
		this.msg = msg;
	}
}
