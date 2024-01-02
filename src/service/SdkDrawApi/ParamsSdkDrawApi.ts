export interface ParamsSmartFlashGenerator {
	excludeBalls: Array<number>
	excludeLucky: Array<number>
	excludeWinningDraws: boolean
}

export interface ParamsLuckyFlashGenerator {
	ball1Input: string
	ball2Input: string
	ball3Input: string
	ball4Input: string
	ball5Input: string
	luckyInput: string
}

export interface ParamsProbaFlashGenerator {
	day: string // defined by dayParamsProbaFlashSdk and need to become plurials
	secondRoll: boolean
	superLotto: boolean
	grandLotto: boolean
	xmaxLotto: boolean
	classicLotto: boolean
	oldLotto: boolean
	ascendingOrder: boolean
}

export interface ParamsHistory {
	link: string
	size: number
}

export interface ParamsSearchDraw {
	ids: Array<string>
}