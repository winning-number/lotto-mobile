import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { IonCheckbox, IonItem, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
import { ProbaFilter } from '@/store/models/probaFilter';
import { Day, getDayFromName, getDayList } from '@/store/models/draw';
import { toastController } from '@ionic/vue'

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
		const disableButton = false
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

		return {filter, selectedDay, days, disableButton}
	},
	setup(): void {
		useStore()

		return
	},
	methods: {
		generateNumbers(): void {
			this.disableButton = true
			this.filter.day = getDayFromName(this.selectedDay)
			this.$store.dispatch('probaPick', this.filter).then((): void => {
				this.disableButton = false
			}).catch((err: Error): void => {
				toastController.create({
					message: err.message,
					duration: 2000,
				}).then((toast: HTMLIonToastElement): void => {
					toast.present()
				})
				this.disableButton = false
			})
			return
		}
	}
})