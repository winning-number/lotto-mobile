import { defineComponent, PropType } from "vue";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons"
import { DrawFull } from "@/store/models/homeData";
import CardHeaderSection from "@/components/CardHeaderSection/CardHeaderSection.vue";
import { CardHeaderSectionProps, CardHeaderSectionStyle, CardHeaderSectionType } from "@/components/CardHeaderSection/CardHeaderSection";
import { Draw } from "@/store/models/draw";
import { daySdkToApp, monthSdkToApp } from "@/script/LottoApp/EnumConverter";
import { DaySdk, MonthSdk } from "@/service/SdkDrawApi/EnumsSdkDrawApi";
import WinnerBoardFirstRoll from "@/components/WinnerBoardFirstRoll/WinnerBoardFirstRoll.vue";
import ShowSecondRoll from "@/components/ShowSecondRoll/ShowSecondRoll.vue";
import WinnerBoardSecondRoll from "@/components/WinnerBoardSecondRoll/WinnerBoardSecondRoll.vue";
import { buildWinCodesPhrase } from "@/script/LottoApp/PhraseBuilder";

interface ReportWinner {
	title: string;
	nbWinner: string;
	RateWin: string;
}

export default defineComponent({
	name: "ModalShowDraw",
	components: {
		CardHeaderSection,
		WinnerBoardFirstRoll,
		WinnerBoardSecondRoll,
		ShowSecondRoll
	},
	props: {
		draw: { type: Object as PropType<DrawFull>, required: true}
	},
	setup() {
		return {
			chevronBackOutline,
			chevronForwardOutline,
			buildWinCodesPhrase,
		}
	},
	data() {
		const reportWinners: Array<ReportWinner> = getReportWinner(this.draw)
		const cardProps: CardHeaderSectionProps = {
			headerTitle: getDrawResulMessage(this.draw),
			type: CardHeaderSectionType.NOTICE,
			style: CardHeaderSectionStyle.BLUE,
			drawsOutHeader: false,
			draws: {
				ball1: this.draw.ball1,
				ball2: this.draw.ball2,
				ball3: this.draw.ball3,
				ball4: this.draw.ball4,
				ball5: this.draw.ball5,
				luckyBall: this.draw.lucky,
			} as Draw,
			subTitle: "Tirage du loto",
		}

		return {
			cardProps,
			reportWinners
		}
	},
	methods: {
		closeModal(): void {
			this.$emit('closeCallback')
		},
		hasSecondRoll(): boolean {
			return this.draw.ball1SecondDraw !== undefined && this.draw.ball1SecondDraw !== 0
		}
	},
});

export function getDrawResulMessage(draw: DrawFull): string {
	return "Résultat du " + daySdkToApp(<DaySdk>draw.day) + " " + draw.dayNumber + " " + monthSdkToApp(<MonthSdk>draw.month) + " " + draw.year
}

export function getReportWinner(draw: DrawFull): Array<ReportWinner> {
	const report: Array<ReportWinner> = []

	report.push({
		title: "",
		nbWinner: "NB Gagnants",
		RateWin: "Gains",
	})
	report.push({
		title: "0 ou 1 bon N° + Chance",
		nbWinner: draw.nbWinnerRank9.toString(),
		RateWin: draw.rateWinnerRank9.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "2 bon N°",
		nbWinner: draw.nbWinnerRank8.toString(),
		RateWin: draw.rateWinnerRank8.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "2 bon N° + Chance",
		nbWinner: draw.nbWinnerRank7.toString(),
		RateWin: draw.rateWinnerRank7.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "3 bon N°",
		nbWinner: draw.nbWinnerRank6.toString(),
		RateWin: draw.rateWinnerRank6.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "3 bon N° + Chance",
		nbWinner: draw.nbWinnerRank5.toString(),
		RateWin: draw.rateWinnerRank5.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "4 bon N°",
		nbWinner: draw.nbWinnerRank4.toString(),
		RateWin: draw.rateWinnerRank4.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "4 bon N° + Chance",
		nbWinner: draw.nbWinnerRank3.toString(),
		RateWin: draw.rateWinnerRank3.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "5 bon N°",
		nbWinner: draw.nbWinnerRank2.toString(),
		RateWin: draw.rateWinnerRank2.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		title: "5 bon N° + Chance",
		nbWinner: draw.nbWinnerRank1.toString(),
		RateWin: draw.rateWinnerRank1.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})

	return report
}