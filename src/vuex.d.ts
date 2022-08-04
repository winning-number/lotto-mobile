import { Store } from 'vuex';
import { ComponentCustomProperties } from 'vue'
import { State } from '@/store'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}