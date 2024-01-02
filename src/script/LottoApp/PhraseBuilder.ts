import { daySdkToApp, lottoTypeSdkToApp, monthSdkToApp } from '@/script/LottoApp/EnumConverter';
import { DaySdk, LottoTypeSdk, MonthSdk } from '@/service/SdkDrawApi/EnumsSdkDrawApi';

export function buildPricePhrase(price: number): string {
	const nMillion = price / 1000000

	return nMillion.toString() + " million" + (nMillion > 1 ? "s" : "") + " d'euros"
}

export function buildDatePhrase(dayNumber: number, day: string, month: string, year: string): string {
	return daySdkToApp(<DaySdk>day) + " " + dayNumber.toString() + " "
		+ monthSdkToApp(<MonthSdk>month) + " " + year
}

export function buildWinnersPhrase(nbWinner: number, rateWinner: number): string {
	return nbWinner.toString() + " veinard" + (nbWinner > 1 ? "s" : "") + " " + (nbWinner > 1 ? "ont" : "a") + " gagné"
		+ (nbWinner > 1 ? "s" : "") + " " + rateWinner.toLocaleString("fr-FR",{
			style: "currency",
			currency: "EUR",
		})
}

export function buildLottoTypePhrase(sdkLottoType: string): string {
	return lottoTypeSdkToApp(<LottoTypeSdk>sdkLottoType)
}

export function buildWinCodesPhrase(codes: Array<string>, price: number): string {
	return codes.length + " code" + (codes.length > 1 ? "s" : "") + " gagnant" + (codes.length > 1 ? "s" : "") + " à " + price.toLocaleString("fr-FR",{
		style: "currency",
		currency: "EUR",
	})
}