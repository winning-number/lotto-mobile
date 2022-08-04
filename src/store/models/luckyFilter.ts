// LuckyFilterOne for the generation draw with only one lucky input
export interface LuckyFilterOne {
	input: string
}

// LuckyFilterAny for the generation draw with one lucky input for each ball
export interface LuckyFilterAny {
	ball1Input: string
	ball2Input: string
	ball3Input: string
	ball4Input: string
	ball5Input: string
	luckyInput: string
}