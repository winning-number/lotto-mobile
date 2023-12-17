import { defineComponent } from "vue";
import { useStore } from '@/store';
import { RulesApp } from "@/script/LottoApp/Rules";
import { ConfigSmartFlash } from "@/store/models/generator";
import { ModuleIdentifier } from "@/store/modules/generator";
import { toastController } from '@ionic/vue'
import GeneratorCard from "@/components/GeneratorCard/GeneratorCard.vue";
import { GeneratorCardProps } from "@/components/GeneratorCard/GeneratorCard";
import { Draw } from "@/store/models/draw";
import ConfigButton from "@/components/ConfigButton/ConfigButton.vue";
import { ConfigButtonProps } from "@/components/ConfigButton/ConfigButton";

export default defineComponent({
	name: "SmartFlash",
	components: {
		GeneratorCard,
		ConfigButton,
	},
	watch: {
	},
	setup() {
		useStore();
		
		return {}
	},
	data() {
		const config: ConfigSmartFlash = this.$store.getters.getSmartConfig
		const cardProps: GeneratorCardProps = {
			srcImage: require('@/assets/smart_flash_ban2.png'),
			title: "Mieux que le flash ? Le Smart Flash !",
			description: "Vous pouvez affiner vos critères de tirage dans la rubrique configuration ci-dessous",
			buttonMessage: "Générer un tirage",
			showLoaderButton: false,
			draws: undefined,
		}
		const configProps: ConfigButtonProps = {
			id: "smart-flash-generator",
			state: config,
			signal: false,
		}
		const data = {
			explainUsage: "Le smart flash est un générateur de tirage aléatoire qui vous permet de générer un tirage en excluant les combinaisons gagnantes du passé ainsi que les numéros que vous voulez. Vous ne voudriez pas jouer la combinaison gagnante d'hier n'est ce pas ? Plus simplement, c'est comme un flash mais en mieux",
			titleConfiguration: "Votre configuration",
			labelExcludeWinningNumbers: "Exclure les précédents tirages gagnants",
			labelExcludeBallNumbers: "Exclure certains numéros (hors boule chance)",
			labelExcludeChanceNumbers: "Exclure certains numéros (boule chance)",
		}

		return {
			configProps,
			cardProps,
			config,
			RulesApp,
			data,
		}
	},
	methods: {
		undoConfiguration(): void {
			this.$store.dispatch(ModuleIdentifier.LOAD_SMART_CONFIG).then((): void => {
				this.configProps.signal = !this.configProps.signal
			})
		},
		saveConfiguration(): void {
			this.$store.commit(ModuleIdentifier.SET_SMART_CONFIG, this.config)
			this.configProps.signal = !this.configProps.signal
		},
		resetConfiguration(): void {
			this.$store.dispatch(ModuleIdentifier.RESET_DEFAULT_SMART_CONFIG).then((): void => {
				this.configProps.signal = !this.configProps.signal
			})
		},
		generate(): void {
			this.cardProps.showLoaderButton = true
			this.$store.dispatch(ModuleIdentifier.GENERATE_SMART_DRAW, this.config).then((draw: Draw): void => {
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