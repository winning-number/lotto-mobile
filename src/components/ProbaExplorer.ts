import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { IonCheckbox, IonItem, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
import { ProbaFilter } from '@/store/models/probaFilter';
import { Day, getDayFromName, getDayList } from '@/store/models/draw';

export default defineComponent({
	name: 'ProbaExplorer',
	components: {
		IonCheckbox,
		IonItem,
		IonInput,
		IonSelect,
		IonSelectOption
	},
	props: {
		title: { type: String, required: true },
	},
	data() {
		const days: Array<string> = getDayList()
		const selectedDay = days[0]
		const filter = {
			day: Day.All,
			secondRoll: false,
			superLotto: true,
			grandLotto: true,
			xmaxLotto: true,
			classicLotto: true,
			oldLotto: true,
			ascendingOrder: true,
		} as ProbaFilter

		return {filter, selectedDay, days}
	},
	setup(): void {
		useStore()

		return
	},
	methods: {
		generateNumbers(): void {
			this.filter.day = getDayFromName(this.selectedDay)
			this.$store.dispatch('probaPick', this.filter)
			return
		}
	}
})