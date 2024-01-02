import { defineComponent, PropType } from "vue";
import { DrawFull } from "@/store/models/homeData";

const styleBall = {
	BLUE: "radial-gradient(circle at 50% 120%, #d93205, #05a1d9 80%, #05a1d9)",
}

interface ReportWinner {
	condition: Array<ReportConditionner>;
	nbWinner: string;
	RateWin: string;
}

interface ReportConditionner {
	number: number;
	color: string;
}

export default defineComponent({
	name: "WinnerBoardSecondRoll",
	components: {
	},
	props: {
		draw: { type: Object as PropType<DrawFull>, required: true}
	},
	setup() {
		return {
		}
	},
	data() {
		const reportWinners: Array<ReportWinner> = getReportWinner(this.draw)

		return {
			reportWinners,
		}
	},
	methods: {
	},
});

export function getReportWinner(draw: DrawFull): Array<ReportWinner> {
	const report: Array<ReportWinner> = []

	report.push({
		condition: [
			{
				number: 5,
				color: styleBall.BLUE,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank1SecondDraw.toString(),
		RateWin: draw.rateWinnerRank1SecondDraw.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		condition: [
			{
				number: 4,
				color: styleBall.BLUE,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank2SecondDraw.toString(),
		RateWin: draw.rateWinnerRank2SecondDraw.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		condition: [
			{
				number: 3,
				color: styleBall.BLUE,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank3SecondDraw.toString(),
		RateWin: draw.rateWinnerRank3SecondDraw.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		condition: [
			{
				number: 2,
				color: styleBall.BLUE,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank4SecondDraw.toString(),
		RateWin: draw.rateWinnerRank4SecondDraw.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})

	return report
}