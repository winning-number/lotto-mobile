import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { IonCheckbox, IonItem, IonInput } from '@ionic/vue';
import { LuckyFilterAny, LuckyFilterOne } from '@/store/models/luckyFilter';
import { toastController } from '@ionic/vue'

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
		const disableButton = false
		const multiInputs = false
		const filterOne = {} as LuckyFilterOne
		const filterAny = {} as LuckyFilterAny
		return {
			multiInputs,
			filterOne,
			filterAny,
			disableButton,
		};
	},
	setup(): void {
		useStore()

		return
	},
	methods: {
		generateNumbers(): void {
			this.disableButton = true
			let dispatchFunction = "luckyOnePick"
			let filter: LuckyFilterOne | LuckyFilterAny = this.filterOne
			if (this.multiInputs) {
				dispatchFunction = "luckyAnyPick"
				filter = this.filterAny
			}

			this.$store.dispatch(dispatchFunction, filter).then((): void => {
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
		}
	}
})