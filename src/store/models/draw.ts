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

const AllDayName = "Tous"
const MondayName = "Lundi"
const TuedayName = "Mardi"
const WednesdayName = "Mercredi"
const ThursdayName = "Jeudi"
const FridayName = "Venredi"
const SaturdayName = "Samedi"
const SundayName = "Dimanche"

export function getDayName(day: Day): string {
	switch (day) {
		case Day.Monday: {
			return "MONDAY"
		}
		case Day.Tueday: {
			return "TUESDAY"
		}
		case Day.Wednesday: {
			return "WEDNESDAY"
		}
		case Day.Thursday: {
			return "THURSDAY"
		}
		case Day.Friday: {
			return "FRIDAY"
		}
		case Day.Saturday : {
			return "SATURDAY"
		}
		case Day.Sunday: {
			return "SUNDAY"
		}
	}
	return ""
}

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

export function jsonUnmarshallDraw(json: any): Draw {
	return {
		ball1: json.ball_1,
		ball2: json.ball_2,
		ball3: json.ball_3,
		ball4: json.ball_4,
		ball5: json.ball_5,
		luckyBall: json.lucky_ball
	} as Draw
}