import { defineComponent } from "vue";
import { useStore } from '@/store';
import { CardData, CardDataTag } from "@/script/GenerateCard/GenerateCard";
import { LuckyFlashFilter } from "@/store/models/filter";
import { IonModal, IonContent, IonTitle, IonRow, IonText, IonItemGroup, IonItem, IonLabel, IonCheckbox, IonInput, IonList } from '@ionic/vue';
import CardTemplate from '@/components/CardGenerator/CardTemplate/CardTemplate.vue'
import ModalHeader from "@/components/CardGenerator/ModalHeader/ModalHeader.vue"
import { alertController } from '@ionic/vue';

export default defineComponent({
	name: 'LuckyRenderer',
	components: {
		IonModal, IonContent, IonTitle, IonRow, IonText, IonItemGroup, IonItem, IonLabel, IonCheckbox, IonInput, IonList,
		CardTemplate,
		ModalHeader,
		alertController,
	},
	watch: {
		'$store.getters.luckyNumbers': function(){
			this.data.draws = this.$store.getters.luckyNumbers
		},
	},
	setup() {
		useStore();

		return {
		}
	},
	data() {
		const multiInputs = false
		const filter = new LuckyFlashFilter()
		const tmpFilter = new LuckyFlashFilter()
		const tmpMultiInputs = multiInputs
		const data = new CardData(CardDataTag.LuckyCardData)

		filter.ball1Input = "ma mémé Manou"
		data.altImage = "clover alignements"
		data.srcImage = require('@/assets/lucky_flash_ban2.png')
		data.title = "Du genre à jouer la date de naissance de mémé ?"
		data.description = "Pas d'inspiration ? Donnez-nous le prénom de votre être bien aimé, celui de votre chat ou ce qui vous passe par la tête. On s'occupe du reste !"

		return {
			filter,
			data,
			tmpFilter,
			multiInputs,
			tmpMultiInputs,
		}
	},
	methods: {
		cancel(): void {
			this.filter = Object.assign({}, this.tmpFilter)
			this.multiInputs = this.tmpMultiInputs
			this.data.close()
		},
		openSettings(): void {
			this.tmpFilter = Object.assign({}, this.filter)
			this.tmpMultiInputs = this.multiInputs
			this.data.open()
		},
		confirm(): void {
			this.data.close()
		}, 
		generate(): void {
			if (!this.multiInputs) {
				this.filter.ball2Input = this.filter.ball1Input
				this.filter.ball3Input = this.filter.ball1Input
				this.filter.ball4Input = this.filter.ball1Input
				this.filter.ball5Input = this.filter.ball1Input
				this.filter.luckyInput = this.filter.ball1Input
			} else {
				if (this.filter.ball1Input == ""
					|| this.filter.ball2Input == ""
					|| this.filter.ball3Input == ""
					|| this.filter.ball4Input == ""
					|| this.filter.ball5Input == ""
					|| this.filter.luckyInput == "") {
					const presentAlert = async () => {
						const alert = await alertController.create({
						header: 'Lucky Flash',
						subHeader: 'La configuration est incomplète',
						message: 'L\'option multi-inputs est activée, mais tous les champs ne sont pas remplis.',
						buttons: ['J\'ai compris'],
						});
						
						await alert.present();
					}
					presentAlert();
					return ;
				}
			}
			this.data.generator(this.filter)
		},
	},
})