import { defineComponent } from 'vue';
import { gridOutline} from 'ionicons/icons';
import { Share } from '@capacitor/share';
import { IonItem, IonLabel, IonGrid, IonRow, IonCol, IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, IonMenu, IonTitle, IonIcon } from '@ionic/vue';

export default defineComponent({
	name: 'HeaderPage',
	components: {
		IonItem, IonLabel, IonGrid, IonRow, IonCol, IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, IonMenu, IonTitle, IonIcon,
	},
	props: {
	},
	setup(){
		return {
			gridOutline,
		};
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
	}
})
