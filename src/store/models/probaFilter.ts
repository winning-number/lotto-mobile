import { Day } from '@/store/models/draw'

export interface ProbaFilter {
	day: Day
	secondRoll: boolean
	superLotto: boolean
	grandLotto: boolean
	xmaxLotto: boolean
	classicLotto: boolean
	oldLotto: boolean
	ascendingOrder: boolean
}