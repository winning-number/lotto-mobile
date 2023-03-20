import { defineComponent } from 'vue';
import { IonHeader, IonToolbar, IonButtons, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

export default defineComponent({
	name: "ModalHeader",
	components: {
		IonHeader, IonToolbar, IonButtons, IonGrid, IonRow, IonCol, IonButton,
	},
	methods: {
		cancel(): void {
			this.$emit('cancel')
		},
		confirm(): void {
			this.$emit('confirm')
		}
	}
})