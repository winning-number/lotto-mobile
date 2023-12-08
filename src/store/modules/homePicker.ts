import { Module } from "vuex";
import { DrawFull, HomeData, NextDraw } from "@/store/models/homeData";
import { ThrowErrorOption } from "@/store/modules/error";
import { State as ParentState } from '@/store/index';
import { ErrorApp } from "@/store/models/ErrorApp";

interface State {
	homeData: HomeData;
}

export const homePicker: Module<State, ParentState> = {
	state: {
		homeData: {} as HomeData,
	},
	mutations: {
		setHomePick(state: State, data: HomeData): void {
			state.homeData = data;
		},
	},
	actions: {
		async homePick({ commit, dispatch, getters }): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getHomeData().then((data: HomeData) => {
				commit("setHomePick", data);
			}).catch((err: Error) => {
				const wrappedErr = new ErrorApp("getHomeData", err)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "The service was not able to get data to the home page"
				} as ThrowErrorOption)
				return Promise.reject(err)
			})
		},
	},
	getters: {
		NextDraw(state: State): NextDraw {
			return state.homeData.nextDraw
		},
		LastDraw(state: State): DrawFull {
			return state.homeData.lastDraw
		}
	}
}