import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { errorModule } from '@/store/modules/error';
import { Driver } from '@/store/models/driver';
import { moduleHomeData, ModuleIdentifier as ModuleHomeIdentifier } from './modules/home';
import {
	createLocalStorage,
	LocalStorageOptions,
} from '@/script/LocalStorage/LocalStorage';
import { moduleGenerator, ModuleIdentifier as ModuleGeneratorIdentifier } from './modules/generator';
import { moduleHistory, ModuleIdentifier as ModuleHistoryIdentifier } from './modules/history';
import { localStorageKey } from './constants';

export interface State {
	drivers: Driver;
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
	return baseUseStore(key);
}

export const ModuleIdentifier = {
	NAME: "mainState",

	// getters
	GET_DRIVERS: "drivers",

	// actions
	INITIALIZE: "initStore",
}


export const store = createStore<State>({
	state: {
		drivers: new Driver(),
	},
	modules: {
		errorModule,
		moduleHomeData,
		moduleGenerator,
		moduleHistory,
	},
	plugins: [createLocalStorage({
		key: localStorageKey,
		mutationList: [
			ModuleGeneratorIdentifier.STORAGE_KEY_SMART_CONFIG,
			ModuleGeneratorIdentifier.STORAGE_KEY_PROBA_CONFIG,
			ModuleGeneratorIdentifier.STORAGE_KEY_LUCKY_CONFIG,
		],
	} as LocalStorageOptions)],
	actions: {
		async initStore({ dispatch, getters }): Promise<void> {
			const drivers = getters.drivers
			await drivers.lotto.healthcheck().then((status: boolean) => {
				if (status == false) {
					return Promise.reject("healthcheck failed")
				}
			}).catch((err: Error) => {
				return Promise.reject(err)
			})

			await dispatch(ModuleHomeIdentifier.INIT_MODULE_HOME_DATA).catch((err: Error) => {
				return Promise.reject(err)
			})

			await dispatch(ModuleGeneratorIdentifier.INIT_MODULE_GENERATOR).catch((err: Error) => {
				return Promise.reject(err)
			})

			await dispatch(ModuleHistoryIdentifier.INIT_MODULE_HISTORY).catch((err: Error) => {
				return Promise.reject(err)
			})
		}
	},
	getters: {
		drivers(state: State): Driver {
			return state.drivers
		}
	}
})
