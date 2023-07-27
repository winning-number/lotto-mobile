import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage/HeaderPage.vue';
import LuckyRenderer from '@/components/CardGenerator/LuckyRenderer/LuckyRenderer.vue'
import ProbaRenderer from '@/components/CardGenerator/ProbaRenderer/ProbaRenderer.vue'
import FlashRenderer from '@/components/CardGenerator/FlashRenderer/FlashRenderer.vue'

export default defineComponent({
	name: 'GenNumber',
	components: {
		HeaderPage,
		IonPage, IonContent,
		FlashRenderer,
		ProbaRenderer,
		LuckyRenderer,
	},
	setup() {
		return {
		};
	},
	data() {
		return {}
	},
	methods: {
	},
});
