import { Module } from "vuex";
import { State as ParentState } from '@/store/index'
import { Draw } from "@/store/models/draw";
import { ErrorApp } from "@/store/models/ErrorApp";
import { ThrowErrorOption } from "@/store/modules/error";
import { ProbaFlashFilter } from '@/store/models/filter';

interface State {
	pickedNumbers: Draw;
	pick: boolean;
	filter: ProbaFlashFilter;
}

export const probaPicker: Module<State, ParentState> = {
	state: {
		pickedNumbers: {} as Draw,
		pick: false,
		filter: {} as ProbaFlashFilter,
	},
	mutations: {
		setProbaPick(state: State, draw: Draw): void {
			state.pickedNumbers = draw
			state.pick = true
		},
		setProbaFilter(state: State, filter: ProbaFlashFilter): void {
			state.filter = filter
		}
	},
	actions: {
		async probaPick({ commit, dispatch, getters }, filter: ProbaFlashFilter): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getProbaFlashNumbers(filter).then((draw: Draw) => {
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
		probaFilter(state: State): ProbaFlashFilter {
			return state.filter
		},
	}
}