import { Module } from "vuex";
import { State as ParentState } from '@/store/index'
import { Draw } from "@/store/models/draw";
import { ErrorApp } from "@/store/models/ErrorApp";
import { ThrowErrorOption } from "@/store/modules/error";
import { LuckyFilter } from "@/store/models/filter"

/*enum LuckyType {
	One = 1,
	Any,
}*/

interface State {
	pickedNumbers: Draw;
	pick: boolean;
	filter: LuckyFilter;
//	type: LuckyType;
//	filterOne: LuckyFilterOne;
//	filterAny: LuckyFilterAny;
}

export const luckyPicker: Module<State, ParentState> = {
	state: {
		pickedNumbers: {} as Draw,
		pick: false,
		filter: {} as LuckyFilter,
//		type: {} as LuckyType,
//		filterOne: {} as LuckyFilterOne,
//		filterAny: {} as LuckyFilterAny,
	},
	mutations: {
		setLuckyPick(state: State, draw: Draw): void {
			state.pickedNumbers = draw;
			state.pick = true;
		},
		setLuckyFilter(state: State, filter: LuckyFilter): void {
			state.filter = filter
		},
	},
	actions: {
		async luckyPick({ commit, dispatch, getters }, filter: LuckyFilter): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getLuckyNumbers(filter).then((draw: Draw) => {
				commit("setLuckyPick", draw);
				commit("setLuckyFilter", filter);
			}).catch((err: Error) => {
				const wrappedErr = new ErrorApp("getLuckyNumbers", err)
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
		luckyPicked(state: State): boolean {
			return state.pick
		},
		luckyNumbers(state: State): Draw {
			return state.pickedNumbers
		},
		luckyFilter(state: State): LuckyFilter {
			return state.filter
		},
	}
}