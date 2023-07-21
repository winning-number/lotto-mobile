import { defineComponent } from "vue";
import { useStore } from '@/store';
import { CardData, CardDataTag } from "@/script/GenerateCard/GenerateCard";
import { LuckyFlashFilter } from "@/store/models/filter";
import { IonModal, IonContent, IonTitle, IonRow, IonText, IonItemGroup, IonItem, IonLabel, IonCheckbox, IonInput, IonList } from '@ionic/vue';
import CardTemplate from '@/components/CardGenerator/CardTemplate/CardTemplate.vue'
import ModalHeader from "@/components/CardGenerator/ModalHeader/ModalHeader.vue"

export default defineComponent({
	name: 'LuckyRenderer',
	components: {
		IonModal, IonContent, IonTitle, IonRow, IonText, IonItemGroup, IonItem, IonLabel, IonCheckbox, IonInput, IonList,
		CardTemplate,
		ModalHeader,
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

		filter.ball1Input = "lotto-gagnant"
		data.altImage = "clover alignements"
		data.srcImage = require('@/assets/clover-image.png')
		data.title = "Lucky"
		data.description = "Generate your lucky numbers"

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
			}
			this.data.generator(this.filter)
		},
	},
})