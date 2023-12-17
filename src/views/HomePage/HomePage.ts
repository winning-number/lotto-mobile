import { defineComponent } from 'vue';
import { chevronForwardOutline } from 'ionicons/icons';
import ShowNumber from '@/components/ShowNumber/ShowNumber.vue'
import CardHeaderSection from '@/components/CardHeaderSection/CardHeaderSection.vue';
import { CardHeaderSectionStyle, CardHeaderSectionType } from '@/components/CardHeaderSection/CardHeaderSection';
import { CardHeaderSectionProps } from '@/components/CardHeaderSection/CardHeaderSection';
import { useStore } from '@/store';
import { DrawFull, NextDraw } from '@/store/models/homeData';
import AppMenu from '@/components/AppMenu/AppMenu.vue';
import AppToolbar from '@/components/AppToolbar/AppToolbar.vue';
import ModalShowDraw from '@/components/ModalShowDraw/ModalShowDraw.vue';
import { Draw } from '@/store/models/draw';
import { getDrawResulMessage } from '@/components/ModalShowDraw/ModalShowDraw';
import { RouteNames } from '@/router';
import { daySdkToApp, monthSdkToApp } from '@/script/LottoApp/TimeConverter';
import { DaySdk, MonthSdk } from '@/service/SdkDrawApi/EnumsSdkDrawApi';


export default defineComponent({
	name: 'HomePage',
	components: {
		CardHeaderSection,
		ShowNumber,
		AppMenu,
		AppToolbar,
		ModalShowDraw,
	},
	computed: {},
	setup() {
		useStore();

		return {
			chevronForwardOutline,
			RouteNames,
		};
	},
	data() {
		const showLastDrawDetails = false
		const lastDrawData: DrawFull = this.$store.getters.lastDraw
		const nextDrawData: NextDraw = this.$store.getters.nextDraw

		const appStats: CardHeaderSectionProps = {
			headerText: "Combien de tickets gagnants ont été générés et combien d'euros l'application Loto Gagnant a aidé à gagner ?",
			subTitle: 'Bientôt disponible',
			type: CardHeaderSectionType.NOTICE,
			style: CardHeaderSectionStyle.GREEN,
		}
		const nextDraw: CardHeaderSectionProps = {
			headerTitle: getNextDrawTitle(nextDrawData),
			headerText: getNextDrawMessage(nextDrawData),
			subTitle: 'Je génère mes numéros, fissa fissa..',
			type: CardHeaderSectionType.BUTTON,
			style: CardHeaderSectionStyle.GOLD,
		}
		const lastDraw: CardHeaderSectionProps = {
			headerTitle: getDrawResulMessage(lastDrawData),
			subTitle: buildWinnerMessage(lastDrawData),
			type: CardHeaderSectionType.BUTTON,
			style: CardHeaderSectionStyle.BLUE,
			drawsOutHeader: false,
			draws: {
				ball1: lastDrawData.ball1,
				ball2: lastDrawData.ball2,
				ball3: lastDrawData.ball3,
				ball4: lastDrawData.ball4,
				ball5: lastDrawData.ball5,
				luckyBall: lastDrawData.lucky,
			} as Draw
		}

		return {
			appStats,
			nextDraw,
			lastDraw,
			lastDrawData,
			showLastDrawDetails,
		}
	},
	methods: {
		openModalShowLastDraw(): void {
			this.showLastDrawDetails = true
		},
		closeModalShowLastDraw(): void {
			this.showLastDrawDetails = false
		},
	},
});

function buildWinnerMessage(lastDrawData: DrawFull): string {
	let message = ""
	let nbWinner = 0
	let rateWinner = 0

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

	message = nbWinner + " veinard" + (nbWinner > 1 ? "s" : "") + " " + (nbWinner > 1 ? "ont" : "a") + " gagné"
		+ (nbWinner > 1 ? "s" : "") + " " + rateWinner.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		})

	return message
}

function getNextDrawTitle(draw: NextDraw): string {
	const nMillion = draw.rate / 1000000

	return nMillion + " million" + (nMillion > 1 ? "s" : "") + " d'euros"
}

function getNextDrawMessage(draw: NextDraw): string {
	let message = ""

	message = "à gagner " + daySdkToApp(<DaySdk>draw.day) + " " + draw.dayNumber + " "
		+ monthSdkToApp(<MonthSdk>draw.month) + " " + draw.year

	return message
}
