import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
//import { ErrorApp } from '@/store/models/ErrorApp';
//import { ThrowErrorOption } from '@/store/modules/error';
import { errorModule } from '@/store/modules/error';
import { randomPicker } from './modules/randomPicker';
import { luckyPicker } from './modules/luckyPicker';
import { probaPicker } from './modules/probaPicker';
import { Driver } from '@/store/models/driver';

export interface State {
	drivers: Driver;
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
	return baseUseStore(key);
}

export const store = createStore<State>({
	state: {
		drivers: new Driver(),
	},
	modules: {
		errorModule,
		randomPicker,
		luckyPicker,
		probaPicker,
	},
	getters: {
		drivers(state: State): Driver {
			return state.drivers
		}
	}
})

// initStore should be called after createStore operation from main.ts
// using for update the initial data which need full instanciated stuff
/*export function initStore(store: Store<State>): void {
	console.log("init store done")
}*/
