export enum Day {
	All = 0,
	Monday,
	Tueday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}

const AllDayName = "All"
const MondayName = "Monday"
const TuedayName = "Tueday"
const WednesdayName = "Wednesday"
const ThursdayName = "Thursday"
const FridayName = "Friday"
const SaturdayName = "Saturday"
const SundayName = "Sunday"

export function getDayFromName(name: string): Day {
	switch (name) {
		case MondayName: {
			return Day.Monday
		}
		case TuedayName: {
			return Day.Tueday
		}
		case WednesdayName: {
			return Day.Wednesday
		}
		case ThursdayName: {
			return Day.Thursday
		}
		case FridayName: {
			return Day.Friday
		}
		case SaturdayName : {
			return Day.Saturday
		}
		case SundayName: {
			return Day.Sunday
		}
	}
	return Day.All
}

export function getDayList(): Array<string> {
	return [
		AllDayName,
		MondayName,
		TuedayName,
		WednesdayName,
		ThursdayName,
		FridayName,
		SaturdayName,
		SundayName
	] as Array<string>
}

export interface Draw {
	ball1: number
	ball2: number
	ball3: number
	ball4: number
	ball5: number
	luckyBall: number
}