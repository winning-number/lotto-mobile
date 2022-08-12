import { Module } from "vuex";
import { State as ParentState } from '@/store/index'
import { Draw } from "@/store/models/draw";
import { ErrorApp } from "@/store/models/ErrorApp";
import { ThrowErrorOption } from "@/store/modules/error";
import { LuckyFilterOne, LuckyFilterAny } from "@/store/models/luckyFilter"

enum LuckyType {
	One = 1,
	Any,
}

interface State {
	pickedNumbers: Draw;
	pick: boolean;
	type: LuckyType;
	filterOne: LuckyFilterOne;
	filterAny: LuckyFilterAny;
}

export const luckyPicker: Module<State, ParentState> = {
	state: {
		pickedNumbers: {} as Draw,
		pick: false,
		type: {} as LuckyType,
		filterOne: {} as LuckyFilterOne,
		filterAny: {} as LuckyFilterAny,
	},
	mutations: {
		setLuckyPick(state: State, draw: Draw): void {
			state.pickedNumbers = draw;
			state.pick = true;
		},
		setLuckyFilterOne(state: State, filter: LuckyFilterOne): void {
			state.filterOne = filter
			state.type = LuckyType.One
		},
		setLuckyFilterAny(state: State, filter: LuckyFilterAny): void {
			state.filterAny = filter
			state.type = LuckyType.Any
		}
	},
	actions: {
		async luckyOnePick({ commit, dispatch, getters }, filter: LuckyFilterOne): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getLuckyOneNumbers(filter).then((draw: Draw) => {
				commit("setLuckyPick", draw);
				commit("setLuckyFilterOne", filter);
			}).catch((err: Error) => {
				const wrappedErr = new ErrorApp("getLuckyOneNumbers", err)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "The service was not able to record a new pick number"
				} as ThrowErrorOption)
				return Promise.reject(err)
			})
		},
		async luckyAnyPick({ commit, dispatch, getters }, filter: LuckyFilterAny): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getLuckyAnyNumbers(filter).then((draw: Draw) => {
				commit("setLuckyPick", draw);
				commit("setLuckyFilterAny", filter);
			}).catch((err: Error) => {
				const wrappedErr = new ErrorApp("getLuckyAnyNumbers", err)
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
		luckyFilterOne(state: State): LuckyFilterOne {
			return state.filterOne
		},
		luckyFilterAny(state: State): LuckyFilterAny {
			return state.filterAny
		},
		luckyType(state: State): LuckyType {
			return state.type
		}
	}
}