import { defineComponent } from "vue";
import { RouteNames } from "@/router";
import { IonRouterOutlet } from "@ionic/vue";
import AppToolbar from "@/components/AppToolbar/AppToolbar.vue";
import { useRouter } from "vue-router";

export default defineComponent({
	name: "GeneratorPage",
	components: {
		IonRouterOutlet,
		AppToolbar,
	},
	setup() {
		const router = useRouter();

		return {
			router,
			RouteNames,
		};
	},
	data() {
		let flashIcon = ""
		let luckyIcon = ""
		let probaIcon = ""

		flashIcon = require('@/assets/icons/flash-svgrepo-com.svg')
		luckyIcon = require('@/assets/icons/clover-svgrepo-com.svg')
		probaIcon = require('@/assets/icons/ai-mi-algorithm-svgrepo-com.svg')

		return {
			flashIcon,
			luckyIcon,
			probaIcon
		}
	},
	methods: {
		getTabColor(path: string): string {
			if (this.router.currentRoute.value.name === path) {
				return "primary"
			}

			return ""
		}
	}
});