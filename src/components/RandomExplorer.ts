import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { toastController } from '@ionic/vue'

export default defineComponent({
	name: 'RandomExplorer',
	components: {
		toastController
	},
	props: {
		title: { type: String, required: true },
	},
	setup(){
		useStore();

		return
	},
	data(){
		const disableButton = false

		return { disableButton }
	},
	methods: {
		getNumbers(): void {
			this.disableButton = true
			this.$store.dispatch('randomPick').then((): void => {
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