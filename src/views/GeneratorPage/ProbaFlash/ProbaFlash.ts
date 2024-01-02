import { defineComponent } from "vue";
import { useStore } from '@/store';
import { ConfigProbaFlash } from "@/store/models/generator";
import { ModuleIdentifier } from "@/store/modules/generator";
import { toastController } from '@ionic/vue'
import ConfigButton from "@/components/ConfigButton/ConfigButton.vue";
import { ConfigButtonProps } from "@/components/ConfigButton/ConfigButton";
import { Draw } from "@/store/models/draw";
import GeneratorCard from "@/components/GeneratorCard/GeneratorCard.vue";
import { GeneratorCardProps } from "@/components/GeneratorCard/GeneratorCard";
import { DayApp } from "@/script/LottoApp/EnumConverter";

export default defineComponent({
	name: "ProbaFlash",
	components: {
		GeneratorCard,
		ConfigButton,
	},
	watch: {
	},
	setup() {
		useStore();
		
		return
	},
	data() {
		const config: ConfigProbaFlash = this.$store.getters.getProbaConfig
		const cardProps: GeneratorCardProps = {
			srcImage: require('@/assets/proba_flash_ban2.png'),
			title: "Imagine tout ce que l'on peut faire avec des maths !",
			description: "Vous pouvez affiner vos critères de tirage dans la rubrique configuration ci-dessous",
			buttonMessage: "Générer un tirage",
			showLoaderButton: false,
			draws: undefined,
		}
		const configProps: ConfigButtonProps = {
			id: "proba-flash-generator",
			state: config,
			signal: false,
		}
		const data = {
			explainUsage: "Le proba flash est un générateur de tirage basé sur un algorithme maison en constante évolution top secret de la Paapscool corp, rien que ça! Ce dernier étudie l'historique complet du loto français pour vous donner les numéros les plus probables à sortir. L'algorytme prend en compte votre configuration pour définir le dataset sur lequel il va travailler.",
			titleConfiguration: "Votre configuration",
			labelDays: "Selectionner les jours de tirage pour le dataset",
			labelClassicLotto: "Utiliser les tirages du loto depuis 2008",
			labelSecondDraw: "Utiliser les seconds tirages",
			labelSuperLotto: "Inclure les résultats des supers lotos",
			labelLargeLotto: "Inclure les résultats des grands lotos",
			labelChristmasLotto: "Inclure les résultats des lotos de noël",
			labelOldLotto: "Utiliser les tirages du loto avant 2008 (neccessite une conversion des règles du jeu)",
			labelOrder: "Obtenir les numéros qui sont sortis le plus souvent (autrement le moins souvent)",
		}

		return {
			configProps,
			cardProps,
			config,
			data,
			DayApp,
		}
	},
	methods: {
		undoConfiguration(): void {
			console.log("undo - 1")
			this.$store.dispatch(ModuleIdentifier.LOAD_PROBA_CONFIG).then((): void => {
				console.log("undo - 5")
				this.configProps.signal = !this.configProps.signal
				console.log("undo - 6")
			})
		},
		saveConfiguration(): void {
			console.log("save")
			this.$store.commit(ModuleIdentifier.SET_PROBA_CONFIG, this.config)
			this.configProps.signal = !this.configProps.signal
		},
		resetConfiguration(): void {
			console.log("reset")
			this.$store.dispatch(ModuleIdentifier.RESET_DEFAULT_PROBA_CONFIG).then((): void => {
				this.configProps.signal = !this.configProps.signal
			})
		},
		generate(): void {
			this.cardProps.showLoaderButton = true
			this.$store.dispatch(ModuleIdentifier.GENERATE_PROBA_DRAW, this.config).then((draw: Draw): void => {
				this.cardProps.draws = draw
				this.cardProps.description = "Bravo, vous avez généré un tirage ! N'oubliez pas de le jouer et bonne chance"
				this.cardProps.showLoaderButton = false
			}).catch((err: Error) => {
				console.log(err)
				toastController.create({
					message: "impossible de générer un tirage",
					duration: 2000,
				}).then((toast: HTMLIonToastElement): void => {
					toast.present()
				})

				this.cardProps.showLoaderButton = false
			})
		}
	},
})