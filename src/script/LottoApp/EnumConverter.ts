import { DaySdk, LottoTypeSdk, MonthSdk } from "@/service/SdkDrawApi/EnumsSdkDrawApi";

export enum DayApp {
//	All = "Tous",
	Monday = "Lundi",
	Tuesday = "Mardi",
	Wednesday = "Mercredi",
	Thursday = "Jeudi",
	Friday = "Vendredi",
	Saturday = "Samedi",
	Sunday = "Dimanche"
}

export enum MonthApp {
	January = "Janvier",
	February = "Février",
	March = "Mars",
	April = "Avril",
	May = "Mai",
	June = "Juin",
	July = "Juillet",
	August = "Août",
	September = "Septembre",
	October = "Octobre",
	November = "Novembre",
	December = "Décembre",
}

export enum LottoTypeApp {
	SuperLotto = "Grand Loto",
	ChristmasLotto = "Loto de Noël",
	ClassicLotto = "Loto (classique)",
}

export function daySdkToApp(day: DaySdk): string {
	switch (day) {
		case DaySdk.Monday: {
			return DayApp.Monday
		}
		case DaySdk.Tuesday: {
			return DayApp.Tuesday
		}
		case DaySdk.Wednesday: {
			return DayApp.Wednesday
		}
		case DaySdk.Thursday: {
			return DayApp.Thursday
		}
		case DaySdk.Friday: {
			return DayApp.Friday
		}
		case DaySdk.Saturday: {
			return DayApp.Saturday
		}
		case DaySdk.Sunday: {
			return DayApp.Sunday
		}
	}
}

export function monthSdkToApp(month: MonthSdk): string {
	switch (month) {
		case MonthSdk.January: {
			return MonthApp.January
		}
		case MonthSdk.February: {
			return MonthApp.February
		}
		case MonthSdk.March: {
			return MonthApp.March
		}
		case MonthSdk.April: {
			return MonthApp.April
		}
		case MonthSdk.May: {
			return MonthApp.May
		}
		case MonthSdk.June: {
			return MonthApp.June
		}
		case MonthSdk.July: {
			return MonthApp.July
		}
		case MonthSdk.August: {
			return MonthApp.August
		}
		case MonthSdk.September: {
			return MonthApp.September
		}
		case MonthSdk.October: {
			return MonthApp.October
		}
		case MonthSdk.November: {
			return MonthApp.November
		}
		case MonthSdk.December: {
			return MonthApp.December
		}
	}
}

export function lottoTypeSdkToApp(lottoType: LottoTypeSdk): string {
	switch (lottoType) {
		case LottoTypeSdk.SuperLotto: {
			return LottoTypeApp.SuperLotto
		}
		case LottoTypeSdk.LargeLotto: {
			return LottoTypeApp.SuperLotto
		}
		case LottoTypeSdk.ChristmasLotto: {
			return LottoTypeApp.ChristmasLotto
		}
		case LottoTypeSdk.ClassicLotto: {
			return LottoTypeApp.ClassicLotto
		}
	}
}