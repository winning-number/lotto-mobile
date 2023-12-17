import { PropType, defineComponent } from "vue";
import _ from "lodash";
import { settingsSharp } from 'ionicons/icons';
import { IonActionSheet } from '@ionic/vue';

export interface ConfigButtonProps {
	id: string;
	state: any;
	signal: boolean;
}

export default defineComponent({
	name: "GeneratorCardActionSheet",
	components: {
		IonActionSheet,
	},
	setup() {
		return {
			settingsSharp,
		}
	},
	emits: [
		"saveState",
		"restoreDefaultState",
		"cancelState",
	],
	watch: {
		state: {
			handler(){
				if (JSON.stringify(this.state) !== JSON.stringify(this.stateCopy)) {
					this.stateBlink = true
				} else {
					this.stateBlink = false
				}
			},
			deep: true, 
		},
		signal: {
			handler(){
				this.stateCopy = _.cloneDeep(this.state)
				this.stateBlink = false
			}
		}
	},
	props: {
		id: {
			type: String,
			required: true,
		},
		state: {
			type: Object as PropType<any>,
			required: true,
		},
		signal: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		const stateBlink = false
		const stateCopy = _.cloneDeep(this.state)
		const data = {
			titleConfiguration: "Votre configuration",
			actionSheetId: this.id,
			actionSheetTitleUpdated: "La configuration a changé",
			actionSheetTitle: "La configuration est à jour",
			actionSheetButtonsUpdated: [
				{
					text: "Fermer",
					role: "cancel",
					data: {
						action: "cancel",
					},
				},
				{
					text: "Sauvegarder",
					role: "save",
					handler: this.saveState,
				},
				{
					text: "Annuler les modifications",
					role: "destructive",
					handler: this.cancelState,
				},
				{
					text: "Restaurer par défaut",
					role: "disruptive",
					handler: this.restoreDefaultState,
				},
			],
			actionSheetButtons: [
				{
					text: "Fermer",
					role: "cancel",
					data: {
						action: "cancel",
					},
				},
				{
					text: "Restaurer par défaut",
					role: "disruptive",
					handler: this.restoreDefaultState,
				},
			]
		}

		return {
			data,
			stateCopy,
			stateBlink,
		}
	},
	methods: {
		saveState(): void {
			this.$emit("saveState")
		},
		restoreDefaultState(): void {
			this.$emit("restoreDefaultState")
		},
		cancelState(): void {
			this.$emit("cancelState")
		},
	},
});