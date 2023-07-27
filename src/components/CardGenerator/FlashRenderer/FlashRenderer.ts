import { defineComponent } from "vue";
import { useStore } from '@/store';
import { CardData, CardDataTag } from "@/script/GenerateCard/GenerateCard";
import { SmartFlashFilter } from "@/store/models/filter";
import { IonModal,
	IonContent,
	IonTitle,
	IonRow,
	IonText,
	IonCheckbox,
	IonItem,
	IonInput,
	IonSelect,
	IonSelectOption,
	IonItemGroup,
} from '@ionic/vue';
import CardTemplate from '@/components/CardGenerator/CardTemplate/CardTemplate.vue'
import ModalHeader from "@/components/CardGenerator/ModalHeader/ModalHeader.vue"

export default defineComponent({
	name: 'FlashRenderer',
	components: {
		IonModal,
		IonContent,
		IonTitle,
		IonRow,
		IonText,
		IonCheckbox,
		IonItem,
		IonInput,
		IonSelect,
		IonSelectOption,
		IonItemGroup,
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
		data.srcImage = require('@/assets/smart_flash_ban2.png')
		data.title = "Comme un flash mais en mieux !"
		data.description = "Vous voulez éviter que votre flash vous donne les numéros gagnants d'hier ? C'est ici :) Vous voulez exclure des numéros ? C'est ici aussi ;)"

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
	},
})