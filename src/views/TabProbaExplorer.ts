import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ProbaExplorer from '@/components/ProbaExplorer.vue';
import { useStore } from '@/store';
import { Draw } from '@/store/models/draw'
import HeaderPage from '@/components/HeaderPage.vue';
import ShowNumbers from '@/components/ShowNumbers.vue';

export default defineComponent({
	name: 'TabProbaExplorer',
	components: { ProbaExplorer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ShowNumbers, HeaderPage },
	computed: {
		showNumbers: function(): boolean {
			return this.$store.getters.probaPicked
		},
	},
	watch: {
		'$store.getters.probaNumbers': function(){
			this.draw = this.$store.getters.probaNumbers
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