import { DayParamsProbaFlashSdk } from "@/service/SdkDrawApi/EnumsSdkDrawApi";
import { DayApp } from "./TimeConverter";
import { ConfigLuckyFlash } from "@/store/models/generator";
import { ParamsLuckyFlashGenerator } from "@/service/SdkDrawApi/ParamsSdkDrawApi";

export function daysToDaysParamsProbaFlashSdk(days: Array<DayApp>): Array<DayParamsProbaFlashSdk> {
	const dayMapping = {
		[DayApp.Monday]: DayParamsProbaFlashSdk.Monday,
		[DayApp.Tuesday]: DayParamsProbaFlashSdk.Tuesday,
		[DayApp.Wednesday]: DayParamsProbaFlashSdk.Wednesday,
		[DayApp.Thursday]: DayParamsProbaFlashSdk.Thursday,
		[DayApp.Friday]: DayParamsProbaFlashSdk.Friday,
		[DayApp.Saturday]: DayParamsProbaFlashSdk.Saturday,
		[DayApp.Sunday]: DayParamsProbaFlashSdk.Sunday,
	};

	return days.map((day) => dayMapping[day]);
}

export function configLuckyFlashToParamsLuckyFlashGenerator(config: ConfigLuckyFlash): ParamsLuckyFlashGenerator {
	if (!config.multiInput) {
		return {
			ball1Input: config.ball1Input,
			ball2Input: config.ball1Input,
			ball3Input: config.ball1Input,
			ball4Input: config.ball1Input,
			ball5Input: config.ball1Input,
			luckyInput: config.ball1Input,
		} as ParamsLuckyFlashGenerator;
	}

	return {
		ball1Input: config.ball1Input,
		ball2Input: config.ball2Input,
		ball3Input: config.ball3Input,
		ball4Input: config.ball4Input,
		ball5Input: config.ball5Input,
		luckyInput: config.luckyInput,
	} as ParamsLuckyFlashGenerator;
}