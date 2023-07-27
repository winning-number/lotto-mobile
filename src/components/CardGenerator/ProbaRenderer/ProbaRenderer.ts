import { defineComponent } from "vue";
import { useStore } from '@/store';
import { CardData, CardDataTag } from "@/script/GenerateCard/GenerateCard";
import { ProbaFlashFilter } from "@/store/models/filter";
import { getDayFromName, getDayList } from '@/store/models/draw';
import { IonModal, IonContent, IonTitle, IonRow, IonText, IonItemGroup, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCheckbox } from '@ionic/vue';
import ModalHeader from "@/components/CardGenerator/ModalHeader/ModalHeader.vue"
import CardTemplate from '@/components/CardGenerator/CardTemplate/CardTemplate.vue'

export default defineComponent({
	name: 'ProbaRenderer',
	components: {
		IonModal, IonContent, IonTitle, IonRow, IonText, IonItemGroup, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCheckbox,
		CardTemplate,
		ModalHeader,
	},
	watch: {
		'$store.getters.probaNumbers': function(){
			this.data.draws = this.$store.getters.probaNumbers
		},

	},
	setup() {
		useStore();

		return {
		}
	},
	data() {
		const days: Array<string> = getDayList()
		const selectedDay = days[0]
		const tmpSelectedDay = days[0]
		const filter = new ProbaFlashFilter()
		const tmpFilter = new ProbaFlashFilter()
		const data = new CardData(CardDataTag.ProbaCardData)

		filter.classicLotto = true
		data.altImage = "chalkboard with mathematic symbols"
		data.srcImage = require('@/assets/proba_flash_ban2.png')
		data.title = "Imagine ce qu'on peut faire avec des maths !"
		data.description = "Vous voulez jouer les numéros les moins joués ? les plus joués ? Considerer les lotos du lundi ? du mercredi ? du samedi ? les grands lotos ? les super loto ? les lotos de noël ? les loto d'avant 2008 ?"

		return {
			filter,
			data,
			tmpFilter,
			days,
			selectedDay,
			tmpSelectedDay
		}
	},
	methods: {
		cancel(): void {
			this.filter = Object.assign({}, this.tmpFilter)
			this.selectedDay = this.tmpSelectedDay
			this.data.close()
		},
		openSettings(): void {
			this.tmpFilter = Object.assign({}, this.filter)
			this.tmpSelectedDay = this.selectedDay
			this.data.open()
		},
		confirm(): void {
			this.data.close()
		},
		generate(): void {
			this.filter.day = getDayFromName(this.selectedDay)
			this.data.generator(this.filter)
		},
	},
})