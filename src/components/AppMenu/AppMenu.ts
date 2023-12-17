import { defineComponent } from 'vue';
import { gridOutline} from 'ionicons/icons';
import { Share } from '@capacitor/share';
import { menuController } from '@ionic/vue';
import { RouteNames } from '@/router';

export default defineComponent({
	name: 'AppMenu',
	components: {
	},
	props: {
		menuId: { type: String, required: true },
		contentId: { type: String, required: true },
	},
	setup(){
		return {
			gridOutline,
		};
	},
	data() {
		return {
			RouteNames,
		}
	},
	methods: {
		async Share(){
			await Share.share({
				title: 'Loto Gagnant',
				text: 'Jouer au loto c\'est bien, avec les bons numéros c\'est mieux !',
				url: 'https://play.google.com/store/apps/details?id=io.lotogagnant.starter',
				dialogTitle: 'Partage l\'appli avec tes amis et dis leur de partager le pactole avec toi !',
			});
		},
		closeMenu() {
			menuController.close("main-menu");
		}
	}
})
