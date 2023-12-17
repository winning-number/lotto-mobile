import { defineComponent, PropType } from "vue";
import { chevronForwardOutline } from 'ionicons/icons';
import { Draw } from '@/store/models/draw';
import ShowNumber from '@/components/ShowNumber/ShowNumber.vue'

export const CardHeaderSectionStyle = {
	GOLD: "gold",
	GREEN: "green",
	BLUE: "blue"
}

export const CardHeaderSectionType = {
	NOTICE: "notice",
	BUTTON: "button"
}

export interface CardHeaderSectionProps {
	headerTitle?: string,
	headerText?: string,
	subTitle?: string,
	type: string,
	style: string,
	draws?: Draw,
	drawsOutHeader?: boolean,
}

interface viewData {
	shadowClass: string;
	altImage: string;
	srcImage: string;
	color: string;
}

export default defineComponent({
	name: 'CardHeaderSection',

	components: {
		ShowNumber,
	},
	props: {
		style: { type: String, required: true, validator: (value: string): boolean => {
				return [CardHeaderSectionStyle.GREEN, CardHeaderSectionStyle.GOLD, CardHeaderSectionStyle.BLUE].includes(value)
			}
		},
		type: { type: String, required: true, validator: (value: string): boolean => {
				return [CardHeaderSectionType.NOTICE, CardHeaderSectionType.BUTTON].includes(value)
			}
		},
		headerTitle: { type: String, required: false, default: ""},
		headerText: { type: String, required: false, default: "" },
		subTitle: { type: String, required: false, default: "" },
		draws: { type: Object as PropType<Draw>, required: false, default: undefined },
		drawsOutHeader: { type: Boolean, required: false, default: false },
	},
	computed: {},
	setup() {
		return {
			chevronForwardOutline,
		};
	},
	data() {
		const view = {} as viewData

		switch (this.style) {
			case CardHeaderSectionStyle.GOLD:
				view.shadowClass = "chs_label_shadow_color_warning"
				view.altImage = "gold header card"
				view.srcImage = require('@/assets/ban_generate.png')
				view.color = "warning"

				break ;
			case CardHeaderSectionStyle.GREEN:
				view.shadowClass = "chs_label_shadow_color_success"
				view.altImage = "green header card"
				view.srcImage = require('@/assets/ban_app_result.png')
				view.color = "success"

				break ;
			case CardHeaderSectionStyle.BLUE:
				view.shadowClass = "chs_label_shadow_color_primary"
				view.altImage = "blue header card"
				view.srcImage = require('@/assets/ban_fdj_result.png')
				view.color = "primary"

				break ;
		}

		return {
			CardHeaderSectionType,
			view,
		}
	},
	methods: {}
})