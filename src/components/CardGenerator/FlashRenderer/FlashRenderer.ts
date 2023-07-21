import { defineComponent } from "vue";
import { useStore } from '@/store';
import { CardData, CardDataTag } from "@/script/GenerateCard/GenerateCard";
import { SmartFlashFilter } from "@/store/models/filter";
import { IonModal, IonContent, IonTitle, IonRow, IonText, IonCheckbox, IonItem, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
import CardTemplate from '@/components/CardGenerator/CardTemplate/CardTemplate.vue'
import ModalHeader from "@/components/CardGenerator/ModalHeader/ModalHeader.vue"

export default defineComponent({
	name: 'FlashRenderer',
	components: {
		IonModal, IonContent, IonTitle, IonRow, IonText, IonCheckbox, IonItem, IonInput, IonSelect, IonSelectOption,
		CardTemplate,
		ModalHeader,
	},
	watch: {
		'$store.getters.randomNumbers': function(){
			this.data.draws = this.$store.getters.randomNumbers
		},
	},
	setup() {
		useStore();

		return {
		}
	},
	data() {
		const maxLuckyNumber = 10
		const maxBallNumber = 49
		const filter = new SmartFlashFilter()
		const tmpFilter = new SmartFlashFilter()
		const data = new CardData(CardDataTag.RandomCardData)

		data.altImage = "lot of dices"
		data.srcImage = require('@/assets/flash-image.jpg')
		data.title = "Flash"
		data.description = "Generate your picks randomly"

		return {
			filter,
			data,
			tmpFilter,
			maxLuckyNumber,
			maxBallNumber,
		}
	},
	methods: {
		cancel(): void {
			this.filter = Object.assign([], this.tmpFilter)
			this.data.close()
		},
		openSettings(): void {
			this.tmpFilter = Object.assign([], this.filter)
			this.data.open()
		},
		confirm(): void {
			this.data.close()
		}, 
		generate(): void {
			this.data.generator(this.filter)
		},
		onLuckySelectionChange(values: number[]): void {
			this.filter.excludeLuckyNumber = Object.assign([], values)
		},
		onBallSelectionChange(values: number[]): void {
			this.filter.excludeBallNumber = Object.assign([], values)
		},
	},
})