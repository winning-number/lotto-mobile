import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
	name: 'RandomExplorer',
	components: {
	},
	props: {
		title: { type: String, required: true },
	},
	setup(){
		useStore();

		return
	},
	methods: {
		getNumbers(): void {
			this.$store.dispatch('randomPick')
		}
	}
})