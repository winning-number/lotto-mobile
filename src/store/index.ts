import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { errorModule } from '@/store/modules/error';
import { randomPicker } from '@/store/modules/randomPicker';
import { luckyPicker } from '@/store/modules/luckyPicker';
import { probaPicker } from '@/store/modules/probaPicker';
import { Driver } from '@/store/models/driver';
import { homePicker } from '@/store/modules/homePicker';

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
		homePicker,
	},
	getters: {
		drivers(state: State): Driver {
			return state.drivers
		}
	}
})
