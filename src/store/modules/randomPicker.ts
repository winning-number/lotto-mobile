import { Module } from "vuex";
import { State as ParentState } from '@/store/index'
import { Draw } from "@/store/models/draw";
import { ErrorApp } from "@/store/models/ErrorApp";
import { ThrowErrorOption } from "@/store/modules/error";
import { RandomFilter } from "@/store/models/filter";

interface State {
	pickedNumbers: Draw;
	pick: boolean; 
}

export const randomPicker: Module<State, ParentState> = {
	state: {
		pickedNumbers: {} as Draw,
		pick: false
	},
	mutations: {
		setRandomPick(state: State, draw: Draw): void {
			state.pickedNumbers = draw;
			state.pick = true;
		},
	},
	actions: {
		async randomPick({ commit, dispatch, getters }, filter: RandomFilter): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getRandomNumbers().then((draw: Draw) => {
				commit("setRandomPick", draw);
			}).catch((err: Error) => {
				const wrappedErr = new ErrorApp("getRandomNumbers", err)
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
		randomPicked(state: State): boolean {
			return state.pick
		},
		randomNumbers(state: State): Draw {
			return state.pickedNumbers
		}
	}
}