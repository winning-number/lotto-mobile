import { Module } from "vuex";
import { State as ParentState } from '@/store/index'
import { Draw } from "@/store/models/draw";
import { ErrorApp } from "@/store/models/ErrorApp";
import { ThrowErrorOption } from "@/store/modules/error";
import { ProbaFilter } from '@/store/models/filter';

interface State {
	pickedNumbers: Draw;
	pick: boolean;
	filter: ProbaFilter;
}

export const probaPicker: Module<State, ParentState> = {
	state: {
		pickedNumbers: {} as Draw,
		pick: false,
		filter: {} as ProbaFilter,
	},
	mutations: {
		setProbaPick(state: State, draw: Draw): void {
			state.pickedNumbers = draw
			state.pick = true
		},
		setProbaFilter(state: State, filter: ProbaFilter): void {
			state.filter = filter
		}
	},
	actions: {
		async probaPick({ commit, dispatch, getters }, filter: ProbaFilter): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getProbaNumbers(filter).then((draw: Draw) => {
				commit("setProbaPick", draw);
				commit("setProbaFilter", filter);
			}).catch((err: Error) => {
				const wrappedErr = new ErrorApp("getProbaNumbers", err)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "The service was not able to record a new pick number"
				} as ThrowErrorOption)
				return Promise.reject(err)
			})
		},
	},
	getters: {
		probaPicked(state: State): boolean {
			return state.pick
		},
		probaNumbers(state: State): Draw {
			return state.pickedNumbers
		},
		probaFilter(state: State): ProbaFilter {
			return state.filter
		},
	}
}