import { ErrorApp, Errors } from "@/store/models/ErrorApp";
import { State as ParentState } from '@/store/index'
import { Module } from "vuex";
import { Driver } from "@/store/models/driver";

export interface ThrowErrorOption {
	Title: string;
	Message: string;
	Err: ErrorApp;
}

interface State {
	errors: Errors;
}

export const errorModule: Module<State, ParentState> = {
	state: {
		errors: new Errors()
	},
	mutations: {
		addError(state: State, err: ErrorApp): void {
			state.errors.push(err)
		}
	},
	actions: {
		async throwError({ commit, getters }, opts: ThrowErrorOption): Promise<void> {
			const drivers: Driver = getters.drivers
			if (drivers.lotto != undefined) {
				console.log("lotto driver is defined")
			}

			console.log(opts.Err)
			commit("addError", opts.Err)
		}
	},
}

