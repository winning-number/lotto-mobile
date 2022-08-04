import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useStore } from '@/store';
import { Draw } from '@/store/models/draw'
import RandomExplorer from '@/components/RandomExplorer.vue';
import ShowNumbers from '@/components/ShowNumbers.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default  defineComponent({
	name: 'TabRandomExplorer',
	components: { RandomExplorer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ShowNumbers, HeaderPage },
	computed: {
		showNumbers: function(): boolean {
			return this.$store.getters.randomPicked
		},
	},
	watch: {
		'$store.getters.randomNumbers': function(){
			this.draw = this.$store.getters.randomNumbers
		}
	},
	setup() {
		useStore();
		return {};
	},
	data() {
		const draw = {} as Draw
		return {
			draw,
		}
	}
});
