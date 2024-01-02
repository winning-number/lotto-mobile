export interface HomeData {
	nextDraw: NextDraw
	lastDraw: DrawFull
}

export function jsonUnmarshallHomeData(json: any): HomeData {
	return {
		nextDraw: jsonUnmarshallNextDraw(json.next_draw),
		lastDraw: jsonUnmarshallDrawFull(json.last_draw),
	}
}

export interface NextDraw {
	day: string
	dayNumber: number
	month: string
	year: string
	rate: number
}

export function jsonUnmarshallNextDraw(json: any): NextDraw {
	return {
		day: json.day,
		dayNumber: json.day_number,
		month: json.month,
		year: json.year,
		rate: json.rate
	}
}

export interface DrawFull {
	jokerPlus: string
	day: string
	dayNumber: number
	month: string
	year: string
	winnerCodes: Array<string>
	ball1: number
	ball2: number
	ball3: number
	ball4: number
	ball5: number
	lucky: number
	nbWinnerRank1: number
	nbWinnerRank2: number
	nbWinnerRank3: number
	nbWinnerRank4: number
	nbWinnerRank5: number
	nbWinnerRank6: number
	nbWinnerRank7: number
	nbWinnerRank8: number
	nbWinnerRank9: number
	ball1SecondDraw: number
	ball2SecondDraw: number
	ball3SecondDraw: number
	ball4SecondDraw: number
	ball5SecondDraw: number
	nbWinnerRank1SecondDraw: number
	nbWinnerRank2SecondDraw: number
	nbWinnerRank3SecondDraw: number
	nbWinnerRank4SecondDraw: number
	rateWinnerRank1: number
	rateWinnerRank2: number
	rateWinnerRank3: number
	rateWinnerRank4: number
	rateWinnerRank5: number
	rateWinnerRank6: number
	rateWinnerRank7: number
	rateWinnerRank8: number
	rateWinnerRank9: number
	rateCode: number
	rateWinnerRank1SecondDraw: number
	rateWinnerRank2SecondDraw: number
	rateWinnerRank3SecondDraw: number
	rateWinnerRank4SecondDraw: number
}

export function jsonUnmarshallDrawFull(json: any): DrawFull {
	return {
		jokerPlus: json.joker_plus,
		day: json.day,
		dayNumber: json.day_number,
		month: json.month,
		year: json.year,
		winnerCodes: json.winner_codes,
		rateCode: json.rate_code,
		ball1: json.ball_1,
		ball2: json.ball_2,
		ball3: json.ball_3,
		ball4: json.ball_4,
		ball5: json.ball_5,
		lucky: json.lucky_ball,
		nbWinnerRank1: json.nb_winner_rank_1,
		nbWinnerRank2: json.nb_winner_rank_2,
		nbWinnerRank3: json.nb_winner_rank_3,
		nbWinnerRank4: json.nb_winner_rank_4,
		nbWinnerRank5: json.nb_winner_rank_5,
		nbWinnerRank6: json.nb_winner_rank_6,
		nbWinnerRank7: json.nb_winner_rank_7,
		nbWinnerRank8: json.nb_winner_rank_8,
		nbWinnerRank9: json.nb_winner_rank_9,
		ball1SecondDraw: json.ball_1_second_draw,
		ball2SecondDraw: json.ball_2_second_draw,
		ball3SecondDraw: json.ball_3_second_draw,
		ball4SecondDraw: json.ball_4_second_draw,
		ball5SecondDraw: json.ball_5_second_draw,
		nbWinnerRank1SecondDraw: json.nb_winner_rank_1_second_draw,
		nbWinnerRank2SecondDraw: json.nb_winner_rank_2_second_draw,
		nbWinnerRank3SecondDraw: json.nb_winner_rank_3_second_draw,
		nbWinnerRank4SecondDraw: json.nb_winner_rank_4_second_draw,
		rateWinnerRank1: json.rate_winner_rank_1,
		rateWinnerRank2: json.rate_winner_rank_2,
		rateWinnerRank3: json.rate_winner_rank_3,
		rateWinnerRank4: json.rate_winner_rank_4,
		rateWinnerRank5: json.rate_winner_rank_5,
		rateWinnerRank6: json.rate_winner_rank_6,
		rateWinnerRank7: json.rate_winner_rank_7,
		rateWinnerRank8: json.rate_winner_rank_8,
		rateWinnerRank9: json.rate_winner_rank_9,
		rateWinnerRank1SecondDraw: json.rate_winner_rank_1_second_draw,
		rateWinnerRank2SecondDraw: json.rate_winner_rank_2_second_draw,
		rateWinnerRank3SecondDraw: json.rate_winner_rank_3_second_draw,
		rateWinnerRank4SecondDraw: json.rate_winner_rank_4_second_draw,
	} as DrawFull
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

export interface History {
	pagination: Pagination
	history: Array<ResumeDraw>
}

export function jsonUnmarshallHistory(json: any): History {
	return {
		pagination: jsonUnmarshallPagination(json.pagination),
		history: jsonUnmarshallResumeDraw(json.history)
	} as History
}

export interface Pagination {
	totalItems: number
	pageSize: number
	offset: number
	next: string
}

export function jsonUnmarshallPagination(json: any): Pagination {
	return {
		totalItems: json.total_items,
		pageSize: json.item_per_page,
		offset: json.offset,
		next: json.next_link_page
	} as Pagination
}

export interface ResumeDraw {
	identifier: string
	day: string
	month: string
	year: string
	dayNumber: number
	date: Date
	ball1: number
	ball2: number
	ball3: number
	ball4: number
	ball5: number
	lucky: number
	haveWinner: boolean
	rateToWin: number
	type: string
}

export function jsonUnmarshallResumeDraw(json: any): Array<ResumeDraw> {
	return json.map((draw: any) => {
		return {
			identifier: draw.identifier,
			day: draw.day,
			month: draw.month,
			year: draw.year,
			dayNumber: draw.day_number,
			date: new Date(draw.date),
			ball1: draw.ball_1,
			ball2: draw.ball_2,
			ball3: draw.ball_3,
			ball4: draw.ball_4,
			ball5: draw.ball_5,
			lucky: draw.lucky_ball,
			haveWinner: draw.have_winner,
			rateToWin: draw.rate_to_win,
			type: draw.lotto_type
		} as ResumeDraw
	})
}

export interface ListDrawFull {
	draws: Array<DrawFull>
}

export function jsonUnmarshallListDrawFull(json: any): ListDrawFull {
	return {
		draws: json.draws.map((draw: any) => {
			return jsonUnmarshallDrawFull(draw)
		})
	} as ListDrawFull
}
