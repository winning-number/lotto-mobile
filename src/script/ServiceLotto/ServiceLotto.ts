import { Draw } from "@/store/models/draw"
import { LuckyFilterOne, LuckyFilterAny } from "@/store/models/luckyFilter"
import { ProbaFilter } from "@/store/models/probaFilter"

interface ServiceLotto {
	driver: boolean;
}

export default class SLotto implements ServiceLotto{
	driver: boolean;
	constructor() {
		this.driver = true
	}
	async getRandomNumbers(): Promise<Draw> {
		return {
			ball1: 34,
			ball2: 12,
			ball3: 23,
			ball4: 48,
			ball5: 2,
			luckyBall: 8
		};
	}
	async getLuckyOneNumbers(filter: LuckyFilterOne): Promise<Draw> {
		return {
			ball1: 49,
			ball2: 1,
			ball3: 20,
			ball4: 40,
			ball5: 35,
			luckyBall: 7
		};
	}
	async getLuckyAnyNumbers(filter: LuckyFilterAny): Promise<Draw> {
		return {
			ball1: 31,
			ball2: 4,
			ball3: 18,
			ball4: 9,
			ball5: 26,
			luckyBall: 3
		};
	}
	async getProbaNumbers(filter: ProbaFilter): Promise<Draw> {
		return {
			ball1: 47,
			ball2: 29,
			ball3: 2,
			ball4: 18,
			ball5: 14,
			luckyBall: 4
		};
	}
}