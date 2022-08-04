import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import LuckyExplorer from '@/components/LuckyExplorer.vue';
import { useStore } from '@/store';
import { Draw } from '@/store/models/draw'
import HeaderPage from '@/components/HeaderPage.vue';
import ShowNumbers from '@/components/ShowNumbers.vue';

export default defineComponent({
	name: 'TabLuckyExplorer',
	components: { LuckyExplorer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ShowNumbers, HeaderPage },
	computed: {
		showNumbers: function(): boolean {
			return this.$store.getters.luckyPicked
		},
	},
	watch: {
		'$store.getters.luckyNumbers': function(){
			this.draw = this.$store.getters.luckyNumbers
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
