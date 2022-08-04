import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { IonCheckbox, IonItem, IonInput } from '@ionic/vue';
import { LuckyFilterAny, LuckyFilterOne } from '@/store/models/luckyFilter';

export default defineComponent({
	name: 'LuckyExplorer',
	components: {
		IonCheckbox,
		IonItem,
		IonInput,
	},
	props: {
		title: { type: String, required: true },
	},
	data() {
		const multiInputs = false
		const filterOne = {} as LuckyFilterOne
		const filterAny = {} as LuckyFilterAny
		return {
			multiInputs,
			filterOne,
			filterAny,
		};
	},
	setup(): void {
		useStore()

		return
	},
	methods: {
		generateNumbers(): void {
			if (!this.multiInputs) {
				this.$store.dispatch('luckyOnePick', this.filterOne)

				return
			}
			this.$store.dispatch('luckyAnyPick', this.filterAny)
		}
	}
})