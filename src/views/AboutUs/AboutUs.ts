import { defineComponent } from 'vue';
import AppToolbar from '@/components/AppToolbar/AppToolbar.vue';
import { logoWhatsapp } from 'ionicons/icons';

export default defineComponent({
	name: 'GenNumber',
	components: {
		AppToolbar
	},
	setup() {
		return {
			logoWhatsapp,
		};
	},
	data() {
		return {}
	},
	methods: {
	},
});
