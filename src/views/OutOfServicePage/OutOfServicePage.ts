import { defineComponent } from "vue";

export default defineComponent({
	name: "OutOfServicePage",
	data() {
		const data = {
			message: "Il semblerait que l'application soit indisponible pour le moment. Soyez certain que l'équipe de Loto Gagnant travaille d'arrache pied pour rétablir le service au plus vite. Merci de votre compréhension.",
		}

		return {
			data,
		};
	},
	components: {
	},
});