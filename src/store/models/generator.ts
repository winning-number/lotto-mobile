import { DayApp } from "@/script/LottoApp/EnumConverter";

export interface ConfigSmartFlash {
	excludeBallNumber: Array<number>;
	excludeLuckyNumber: Array<number>;
	excludeAlreadyPicked: boolean;
}

export interface ConfigProbaFlash {
	days: Array<DayApp>;
	secondRoll: boolean;
	superLotto: boolean;
	grandLotto: boolean;
	xmaxLotto: boolean;
	classicLotto: boolean;
	oldLotto: boolean;
	ascendingOrder: boolean;
}

export interface ConfigLuckyFlash {
	multiInput: boolean;
	ball1Input: string;
	ball2Input: string;
	ball3Input: string;
	ball4Input: string;
	ball5Input: string;
	luckyInput: string;
}