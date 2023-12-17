import { Module } from "vuex";
import { DrawFull, HomeData, NextDraw } from "@/store/models/homeData";
import { ThrowErrorOption } from "@/store/modules/error";
import { State as ParentState } from '@/store/index';
import { ErrorApp } from "@/store/models/ErrorApp";

interface State {
	homeData: HomeData;
}

export const ModuleIdentifier = {
	NAME: "module home data",

	// mutations
	SET_HOME_DATA: "setHomeData",

	// actions
	INIT_MODULE_HOME_DATA: "initModuleHomeData",
	LOAD_HOME_DATA: "loadHomeData",
}

export const moduleHomeData: Module<State, ParentState> = {
	state: {
		homeData: {} as HomeData,
	},
	mutations: {
		setHomeData(state: State, data: HomeData): void {
			state.homeData.lastDraw = data.lastDraw
			state.homeData.nextDraw = data.nextDraw
		},
	},
	actions: {
		async initModuleHomeData({ dispatch }): Promise<void> {
			await dispatch(ModuleIdentifier.LOAD_HOME_DATA)
		},
		async loadHomeData({ commit, dispatch, getters }): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.getHomeData().then((data: HomeData) => {
				commit(ModuleIdentifier.SET_HOME_DATA, data);
			}).catch((err: Error) => {
				const wrappedErr = new ErrorApp(ModuleIdentifier.LOAD_HOME_DATA, err)
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
		nextDraw(state: State): NextDraw {
			return state.homeData.nextDraw
		},
		lastDraw(state: State): DrawFull {
			return state.homeData.lastDraw
		}
	}
}