import { Module } from "vuex";
import { ErrorApp } from "@/store/models/ErrorApp";
import { ThrowErrorOption } from "@/store/modules/error";
import { State as ParentState } from '@/store/index'
import { ResumeDraw, Pagination, ListDrawFull } from '@/service/SdkDrawApi/ModelsSdkDrawApi'
import { ParamsHistory } from "@/service/SdkDrawApi/ParamsSdkDrawApi";
import { History } from "@/service/SdkDrawApi/ModelsSdkDrawApi";

export const ModuleIdentifier = {
	NAME: "module history",

	// mutations
	SET_HISTORY: "setHistory",
	SET_PAGINATION: "setPagination",

	// actions
	FETCH_HISTORY: "fetchHistory",
	SEARCH_DRAW: "searchDraw",
	INIT_MODULE_HISTORY: "initModuleHistory",
}

interface State {
	history: Array<ResumeDraw>;
	pagination: Pagination;
}

export const moduleHistory: Module<State, ParentState> = {
	state: {
		history: [],
		pagination: {
			totalItems: 0,
			pageSize: 0,
			offset: 0,
			next: "",
		} as Pagination,
	},
	mutations: {
		[ModuleIdentifier.SET_HISTORY](state: State, history: Array<ResumeDraw>): void {
			for (const resumeDraw of history) {
				state.history.push(resumeDraw)
			}
		},
		[ModuleIdentifier.SET_PAGINATION](state: State, pagination: Pagination): void {
			state.pagination = pagination
		},
	},
	actions: {
		async [ModuleIdentifier.FETCH_HISTORY]({ commit, dispatch, getters, state }): Promise<void> {
			const drivers = getters.drivers
			const params: ParamsHistory = {
				link: "",
				size: 0,
			}

			if (state.pagination.totalItems > 0 && state.pagination.totalItems == state.pagination.offset) {
				// all data are already loaded
				return
			}
			if (state.pagination.next !== undefined && state.pagination.next !== "") {
				params.link = state.pagination.next
			}

			try {
				await drivers.lotto.getHistory(params).then((history: History) => {
					commit(ModuleIdentifier.SET_HISTORY, history.history)
					commit(ModuleIdentifier.SET_PAGINATION, history.pagination)
				})
			} catch (err: any) {
				const wrappedErr = new ErrorApp(ModuleIdentifier.NAME + " : actions Fetch hisotry", err as Error)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "input configuration: " + JSON.stringify(params)
				} as ThrowErrorOption)

				throw err
			}
		},
		async [ModuleIdentifier.INIT_MODULE_HISTORY]({ dispatch }): Promise<void> {
			await dispatch(ModuleIdentifier.FETCH_HISTORY)
		},
		async [ModuleIdentifier.SEARCH_DRAW]({ getters, dispatch }, id: string): Promise<ListDrawFull> {
			const drivers = getters.drivers
			const params = {
				ids: [id]
			}

			try {
				const list: ListDrawFull = await drivers.lotto.searchDraw(params)
				return list
			} catch (err: any) {
				const wrappedErr = new ErrorApp(ModuleIdentifier.NAME + " : actions Search draw", err as Error)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "input configuration: " + JSON.stringify(params)
				} as ThrowErrorOption)

				throw err
			}
		},
	},
	getters: {
		getHistory(state: State): Array<ResumeDraw> {
			return state.history
		},
		getNumberOfItems(state: State): number {
			return state.pagination.totalItems
		}
	},
}
