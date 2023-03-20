import { defineComponent } from "vue";
import { useStore } from '@/store';
import { CardData, CardDataTag } from "@/script/GenerateCard/GenerateCard";
import { RandomFilter } from "@/store/models/filter";
import { IonModal, IonContent, IonTitle, IonRow, IonText, IonCheckbox, IonItem, IonInput } from '@ionic/vue';
import CardTemplate from '@/components/CardGenerator/CardTemplate/CardTemplate.vue'
import ModalHeader from "@/components/CardGenerator/ModalHeader/ModalHeader.vue"

export default defineComponent({
	name: 'FlashRenderer',
	components: {
		IonModal, IonContent, IonTitle, IonRow, IonText, IonCheckbox, IonItem, IonInput,
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
		const filter = new RandomFilter()
		const tmpFilter = new RandomFilter()
		const data = new CardData(CardDataTag.RandomCardData)

		data.altImage = "lot of dices"
		data.srcImage = require('@/assets/flash-image.jpg')
		data.title = "Flash"
		data.description = "Generate your picks randomly"

		return {
			filter,
			data,
			tmpFilter,
		}
	},
	methods: {
		cancel(): void {
			this.filter = Object.assign({}, this.tmpFilter)
			this.data.close()
		},
		openSettings(): void {
			this.tmpFilter = Object.assign({}, this.filter)
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