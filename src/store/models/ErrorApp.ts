export class Errors extends Array<Error> {}

// ContextData defines the vars name and values in input to the context error
export interface ContextData {
	var: string;
	value: any;
}

export interface ErrorAppJson {
	function: string;
	name: string;
	stack: string;
	content: Array<ContextData>;
}

export class ErrorApp extends Error {
	function: string;

	content: Array<ContextData> = []

	constructor(funcName: string, err: Error) {
		super();
		this.function = funcName
		this.name = err.name
		this.stack = err.stack
	}

	add(key: string, value: any): void{
		this.content.push({
			var: key,
			value: value,
		} as ContextData)
	}

	toJSON(): ErrorAppJson {
		return {
			function: this.function,
			name: this.name,
			stack: this.stack,
			content: this.content,
		} as ErrorAppJson
	}
}