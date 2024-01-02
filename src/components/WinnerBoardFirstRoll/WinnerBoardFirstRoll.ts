import { defineComponent, PropType } from "vue";
import { DrawFull } from "@/store/models/homeData";

const styleBall = {
	BLUE: "#05a1d9",
	RED: "#d93205",
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
	name: "WinnerBoardFirstRoll",
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
			{
				number: 1,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank1.toString(),
		RateWin: draw.rateWinnerRank1.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		condition: [
			{
				number: 5,
				color: styleBall.BLUE,
			},
			{
				number: 0,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank2.toString(),
		RateWin: draw.rateWinnerRank2.toLocaleString("fr-FR",{
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
			{
				number: 1,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank3.toString(),
		RateWin: draw.rateWinnerRank3.toLocaleString("fr-FR",{
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
			{
				number: 0,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank4.toString(),
		RateWin: draw.rateWinnerRank4.toLocaleString("fr-FR",{
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
			{
				number: 1,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank5.toString(),
		RateWin: draw.rateWinnerRank5.toLocaleString("fr-FR",{
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
			{
				number: 0,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank6.toString(),
		RateWin: draw.rateWinnerRank6.toLocaleString("fr-FR",{
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
			{
				number: 1,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank7.toString(),
		RateWin: draw.rateWinnerRank7.toLocaleString("fr-FR",{
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
			{
				number: 0,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank8.toString(),
		RateWin: draw.rateWinnerRank8.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	report.push({
		condition: [
			{
				number: 1,
				color: styleBall.BLUE,
			},
			{
				number: 1,
				color: styleBall.RED,
			},
			{
			},
			{
				number: 1,
				color: styleBall.BLUE,
			},
			{
				number: 0,
				color: styleBall.RED,
			},
		] as Array<ReportConditionner>,
		nbWinner: draw.nbWinnerRank9.toString(),
		RateWin: draw.rateWinnerRank9.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		}),
	})
	return report
}