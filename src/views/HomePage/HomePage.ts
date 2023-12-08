import { defineComponent } from 'vue';
import HeaderPage from '@/components/HeaderPage/HeaderPage.vue';
import { chevronForwardOutline } from 'ionicons/icons';
import { toastController } from '@ionic/vue'
import {
	IonPage,
	IonContent,
	IonCard,
	IonCardContent,
	IonList,
	IonItem,
	IonLabel,
	IonGrid,
	IonRow,
	IonCol,
	IonCardTitle,
	IonButton,
	IonIcon,
	IonCardSubtitle,
} from '@ionic/vue'
import ShowNumber from '@/components/ShowNumber/ShowNumber.vue'
import CardHeaderSection from '@/components/CardHeaderSection/CardHeaderSection.vue';
import { CardHeaderSectionProps } from '@/components/CardHeaderSection/CardHeaderSection';
import { useStore } from '@/store';
import { DrawFull, NextDraw } from '@/store/models/homeData';

export interface ReportWinner {
	title: string
	nbWinner: string
	RateWin: string
}

export default defineComponent({
	name: 'HomePage',
	components: {
		HeaderPage,
		CardHeaderSection,
		IonPage, IonContent,
		IonCard,
		IonCardContent,
		IonList,
		IonItem,
		IonLabel,
		IonGrid,
		IonRow,
		IonCol,
		IonCardTitle,
		IonButton,
		IonIcon,
		IonCardSubtitle,
		ShowNumber,
	},
	watch: {
		'$store.getters.NextDraw': function () {
			this.nextDrawData = this.$store.getters.NextDraw
			this.nextDraw.overlayImageText = buildPresentNextDrawMessage(this.nextDrawData)
		},
		'$store.getters.LastDraw': function () {
			this.lastDrawData = this.$store.getters.LastDraw

			this.lastDraw.draws = {
				ball1: this.lastDrawData.ball1,
				ball2: this.lastDrawData.ball2,
				ball3: this.lastDrawData.ball3,
				ball4: this.lastDrawData.ball4,
				ball5: this.lastDrawData.ball5,
				luckyBall: this.lastDrawData.lucky,
			}
			this.lastDraw.overlayImageText = buildLuckyMenMessage(this.lastDrawData)
			this.reportWinners.push(
				{
					title: "0 ou 1 bon N° + Chance",
					nbWinner: this.lastDrawData.nbWinnerRank9.toString(),
					RateWin: this.lastDrawData.rateWinnerRank9.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "2 bon N°",
					nbWinner: this.lastDrawData.nbWinnerRank8.toString(),
					RateWin: this.lastDrawData.rateWinnerRank8.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "2 bon N° + Chance",
					nbWinner: this.lastDrawData.nbWinnerRank7.toString(),
					RateWin: this.lastDrawData.rateWinnerRank7.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "3 bon N°",
					nbWinner: this.lastDrawData.nbWinnerRank6.toString(),
					RateWin: this.lastDrawData.rateWinnerRank6.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "3 bon N° + Chance",
					nbWinner: this.lastDrawData.nbWinnerRank5.toString(),
					RateWin: this.lastDrawData.rateWinnerRank5.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "4 bon N°",
					nbWinner: this.lastDrawData.nbWinnerRank4.toString(),
					RateWin: this.lastDrawData.rateWinnerRank4.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "4 bon N° + Chance",
					nbWinner: this.lastDrawData.nbWinnerRank3.toString(),
					RateWin: this.lastDrawData.rateWinnerRank3.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "5 bon N°",
					nbWinner: this.lastDrawData.nbWinnerRank2.toString(),
					RateWin: this.lastDrawData.rateWinnerRank2.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
				{
					title: "5 bon N° + Chance",
					nbWinner: this.lastDrawData.nbWinnerRank1.toString(),
					RateWin: this.lastDrawData.rateWinnerRank1.toLocaleString("fr-FR",{
						style: "currency",
						currency: "EUR",
					}),
				},
			)
		},
	},
	computed: {
		showNumbers: function(): boolean {
			return true
		}
	},
	setup() {
		return {
			chevronForwardOutline,
		};
	},
	data() {
		useStore();
		const lastDrawData = this.$store.getters.LastDraw
		const nextDrawData = this.$store.getters.NextDraw

		const appStats: CardHeaderSectionProps = {
			altImage: 'performance application',
			srcImage: require('@/assets/ban_app_result.png'),
			overlayImageText: "Combien de tickets gagnants ont été générés et combien d'euros l'application Loto Gagnant a aidé à gagner ?",
			shadowColorOverlay: 'success',
			subTitle: 'Cette fonctionnalité est en cours de développement',
			cardType: 'notice',
		}
		const nextDraw: CardHeaderSectionProps = {
			altImage: 'next draw',
			srcImage: require('@/assets/ban_generate.png'),
			overlayImageText: "",
			shadowColorOverlay: 'warning',
			subTitle: 'Je génère mes numéros, fissa fissa..',
			cardType: 'button',
		}
		const lastDraw: CardHeaderSectionProps = {
			altImage: 'last draw',
			srcImage: require('@/assets/ban_fdj_result.png'),
			overlayImageText: "", 
			shadowColorOverlay: 'primary',
			subTitle: 'Résultat du dernier tirage',
			cardType: 'notice',
			drawsOutHeader: false,
		}
		const reportWinners: Array<ReportWinner> = [
			{
				title: "",
				nbWinner: "NB Gagnants",
				RateWin: "Gains",
			},
		]

		if (nextDrawData === undefined) {
			this.$store.dispatch("homePick").catch((err: Error) => {
				toastController.create({
					message: err.message,
					duration: 2000,
				}).then((toast: HTMLIonToastElement): void => {
					toast.present()
				})
			})
		}

		return {
			reportWinners,
			appStats,
			nextDraw,
			lastDraw,
			lastDrawData,
			nextDrawData,
		}
	},
	methods: {
	},
});

function buildLuckyMenMessage(lastDrawData: DrawFull): string {
	let message = ""
	let nbWinner = 0
	let rateWinner = 0

	const day = getDayName(lastDrawData.day)
	const month = getMonthName(lastDrawData.month)

	if (lastDrawData.nbWinnerRank6 > 0) {
		nbWinner = lastDrawData.nbWinnerRank6
		rateWinner = lastDrawData.rateWinnerRank6
	}
	if (lastDrawData.nbWinnerRank5 > 0) {
		nbWinner = lastDrawData.nbWinnerRank5
		rateWinner = lastDrawData.rateWinnerRank5
	}
	if (lastDrawData.nbWinnerRank4 > 0) {
		nbWinner = lastDrawData.nbWinnerRank4
		rateWinner = lastDrawData.rateWinnerRank4
	}
	if (lastDrawData.nbWinnerRank3 > 0) {
		nbWinner = lastDrawData.nbWinnerRank3
		rateWinner = lastDrawData.rateWinnerRank3
	}
	if (lastDrawData.nbWinnerRank2 > 0) {
		nbWinner = lastDrawData.nbWinnerRank2
		rateWinner = lastDrawData.rateWinnerRank2
	}
	if (lastDrawData.nbWinnerRank1 > 0) {
		nbWinner = lastDrawData.nbWinnerRank1
		rateWinner = lastDrawData.rateWinnerRank1
	}

	message = day + " " + lastDrawData.dayNumber + " " + month + " " + lastDrawData.year
		+ ": " + nbWinner + " veinard" + (nbWinner > 1 ? "s" : "") + " ont gagné"
		+ (nbWinner > 1 ? "s" : "") + " " + rateWinner.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		})

	return message
}

function buildPresentNextDrawMessage(nextDrawData: NextDraw): string {
	let message = ""

	const day = getDayName(nextDrawData.day)
	const month = getMonthName(nextDrawData.month)
	const nMillion = nextDrawData.rate / 1000000

	message = "Prochain tirage: " + day + " " + nextDrawData.dayNumber + " "
		+ month + " " + nextDrawData.year + " avec la coquette somme de "
		+ nMillion + " million" + (nMillion > 1 ? "s" : "") + " d'euros à gagner !"

	return message
}

function getDayName(day: string): string {
	let nameFr = ""
	switch (day) {
		case "Monday": {
			nameFr = "Lundi"
			break
		}
		case "Wednesday": {
			nameFr = "Mercredi"
			break
		}
		case "Saturday": {
			nameFr = "Samedi"
			break
		}
	}

	return nameFr
}

function getMonthName(monthEnglishName: string): string {
	let month = ""

	switch (monthEnglishName) {
		case "January": {
			month = "janvier"
			break
		}
		case "February": {
			month = "février"
			break
		}
		case "March": {
			month = "mars"
			break
		}
		case "April": {
			month = "avril"
			break
		}
		case "May": {
			month = "mai"
			break
		}
		case "June": {
			month = "juin"
			break
		}
		case "July": {
			month = "juillet"
			break
		}
		case "August": {
			month = "août"
			break
		}
		case "September": {
			month = "septembre"
			break
		}
		case "October": {
			month = "octobre"
			break
		}
		case "November": {
			month = "novembre"
			break
		}
		case "December": {
			month = "décembre"
			break
		}
	}

	return month
}
