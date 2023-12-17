import { defineComponent } from 'vue';
import { gridOutline} from 'ionicons/icons';
import { menuController } from '@ionic/vue';

export default defineComponent({
	name: 'AppToolbar',
	components: {
	},
	props: {
	},
	mounted() {
		menuController.enable(true, 'main-menu');
	},
	setup(){
		return {
			gridOutline,
		};
	},
	methods: {
	}
})
