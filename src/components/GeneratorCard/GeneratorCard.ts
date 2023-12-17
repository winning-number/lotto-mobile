import { defineComponent, PropType } from 'vue';
import { Draw } from '@/store/models/draw';
import ShowNumber from '@/components/ShowNumber/ShowNumber.vue'

export interface GeneratorCardProps {
	srcImage: string,
	title: string,
	description: string,
	buttonMessage: string,
	showLoaderButton: boolean,
	draws?: Draw,
}

export default defineComponent({
	name: 'GeneratorCard',

	components: {
		ShowNumber,
	},
	props: {
		srcImage: { type: String, required: true },
		title: { type: String, required: true },
		description: { type: String, required: true },
		buttonMessage: { type: String, required: true},
		showLoaderButton: { type: Boolean, required: true },
		draws: { type: Object as PropType<Draw>, required: false, default: undefined},
	},
	emits: [
		'generateDraw',
	],
	computed: {
		showNumbers: function(): boolean {
			return this.draws != undefined
		}
	},
	setup() {
		return {};
	},
	data() {
		const altImage = "background image for the card generator of draw"

		return {
			altImage,
		}
	},
	methods: {
		generateNumber(): void {
			this.$emit('generateDraw')
		},
	}
})