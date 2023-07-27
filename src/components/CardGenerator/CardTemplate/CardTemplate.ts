import { defineComponent, PropType } from 'vue';
import { settingsSharp } from 'ionicons/icons';
import { Draw } from '@/store/models/draw';
import {
	IonCard,
	IonCardHeader,
	IonGrid,
	IonRow,
	IonCol,
	IonCardTitle,
	IonButton,
	IonIcon,
	IonCardContent,
	IonText,
	IonSpinner,
	IonCardSubtitle,
} from '@ionic/vue'
import { toastController } from '@ionic/vue';
import ShowNumber from '@/components/ShowNumber/ShowNumber.vue'

export default defineComponent({
	name: 'CardTemplate',

	components: {
		IonCard,
		IonCardHeader,
		IonGrid,
		IonRow,
		IonCol,
		IonCardTitle,
		IonButton,
		IonIcon,
		IonCardContent,
		IonText,
		IonSpinner,
		IonCardSubtitle,
		toastController,
		ShowNumber,
	},
	props: {
		altImage: { type: String, required: true },
		srcImage: { type: String, required: true },
		title: { type: String, required: true },
		description: { type: String, required: true },
		loading: { type: Boolean, required: true },
		id: { type: Number, required: true },
		draws: { type: Object as PropType<Draw>, required: true},
	},
	computed: {
		showNumbers: function(): boolean {
			if (this.draws.ball1 == undefined) {
				return false
			}
			return true
		}
	},
	setup() {

		return {
			settingsSharp,
		};
	},
	data() {
		return {}
	},
	methods: {
		generateNumber(): void {
			this.$emit('generateNumber')
		},
		openSettings(): void {
			this.$emit('openSettings')
		}
	}
})