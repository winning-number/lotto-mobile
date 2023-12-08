import { defineComponent, PropType } from "vue";
import { chevronForwardOutline } from 'ionicons/icons';
import {
	IonLabel,
	IonCardHeader,
	IonGrid,
	IonRow,
	IonCol,
	IonCardSubtitle,
	IonButton,
	IonIcon,
} from '@ionic/vue';
import { Draw } from '@/store/models/draw';
import ShowNumber from '@/components/ShowNumber/ShowNumber.vue'

export interface CardHeaderSectionProps {
	altImage: string,
	srcImage: string,
	overlayImageText: string,
	shadowColorOverlay: string,
	subTitle?: string,
	cardType: string,
	draws?: Draw,
	drawsOutHeader?: boolean,
}

export default defineComponent({
	name: 'CardHeaderSection',

	components: {
		IonLabel,
		IonCardHeader,
		IonGrid,
		IonRow,
		IonCol,
		IonCardSubtitle,
		IonButton,
		IonIcon,
		ShowNumber,
	//	Draw,
	},
	props: {
		altImage: { type: String, required: true },
		srcImage: { type: String, required: true },
		overlayImageText: { type: String, required: false, default: "" },
		shadowColorOverlay: { type: String, required: true, validator: (value: string): boolean => {
				return ['success', 'warning', 'primary'].includes(value)
			}
		},
		subTitle: { type: String, required: false },
		cardType: { type: String, required: true, validator: (value: string): boolean => {
				return ['notice', 'button'].includes(value)
			}
		},
		draws: { type: Object as PropType<Draw>, required: false },
		drawsOutHeader: { type: Boolean, required: false },
	},
	computed: {
		showNumbers: function(): boolean {
			if (this.draws == undefined || this.draws.ball1 == undefined) {
				return false
			}

			return true
		},
		getClassLabelColor: function(): string {
			if (this.shadowColorOverlay == undefined) {
				return ""
			}
			switch (this.shadowColorOverlay) {
				case "primary":
					return "chs_label_shadow_color_primary"
				case "warning":
					return "chs_label_shadow_color_warning"
				case "success":
					return "chs_label_shadow_color_success"
			}

			return ""
		}
	},
	setup() {
		return {
			chevronForwardOutline,
		};
	},
	data() {
		return {}
	},
	methods: {}
})