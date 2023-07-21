import { Day } from '@/store/models/draw'

export interface Filter {
	getActionPath(): string
}

// SmartFlashFilter for generate a new random pick with excluding any number
export class SmartFlashFilter implements Filter {
	private actionPath = "randomPick"

	excludeBallNumber: Array<number>
	excludeLuckyNumber: Array<number>
	excludeAlreadyPicked: boolean

	constructor() {
		this.excludeBallNumber = [];
		this.excludeLuckyNumber = [];
		this.excludeAlreadyPicked = true;
	}
	getActionPath(): string {
		return this.actionPath
	}
}

// ProbaFlashFilter for the generation draw with probabilities settings
export class ProbaFlashFilter implements Filter {
	private actionPath = "probaPick"

	day: Day
	secondRoll: boolean
	superLotto: boolean
	grandLotto: boolean
	xmaxLotto: boolean
	classicLotto: boolean
	oldLotto: boolean
	ascendingOrder: boolean

	constructor() {
		this.day = Day.All
		this.secondRoll = false
		this.superLotto = false
		this.grandLotto = false
		this.xmaxLotto = false
		this.classicLotto = true
		this.oldLotto = false
		this.ascendingOrder = false
	}
	getActionPath(): string {
		return this.actionPath
	}
}

// LuckyFilter for the generation draw with lucky charm(s) input(s)
export class LuckyFlashFilter implements Filter {
	private actionPath = "luckyPick"
	ball1Input: string
	ball2Input: string
	ball3Input: string
	ball4Input: string
	ball5Input: string
	luckyInput: string

	constructor() {
		this.ball1Input = ""
		this.ball2Input = ""
		this.ball3Input = ""
		this.ball4Input = ""
		this.ball5Input = ""
		this.luckyInput = ""
	}
	getActionPath(): string {
		return this.actionPath
	}
}