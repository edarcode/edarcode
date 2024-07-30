export class EdarErr extends Error {
	msg: string;
	status: number;
	constructor({ status, msg }: Constructor) {
		super();
		this.name = "EdarErr";
		this.status = status;
		this.msg = msg;
	}
}

type Constructor = {
	status: number;
	msg: string;
};
