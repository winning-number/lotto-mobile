import { getRequestConfig } from "@/service/ServiceHttp/ServiceHttp"
import axios, { AxiosResponse } from "axios"
import {
	ParamsSmartFlashGenerator,
	ParamsLuckyFlashGenerator,
	ParamsProbaFlashGenerator,
} from "./ParamsSdkDrawApi";
import {
	HomeData,
	jsonUnmarshallHomeData,
	Draw,
	jsonUnmarshallDraw,
} from "./ModelsSdkDrawApi"

const ParamKeysSmartFlashGenerator = {
	EXCLUDE_BALLS: "exclude_number",
	EXCLUDE_LUCKY: "exclude_lucky",
	EXCLUDE_WINNING_DRAWS: "exclude_already_pick",
}

const ParamKeysLuckyFlashGenerator = {
	BALL1: "salt_b1",
	BALL2: "salt_b2",
	BALL3: "salt_b3",
	BALL4: "salt_b4",
	BALL5: "salt_b5",
	LUCKY_BALL: "salt_lucky",
}

const ParamKeysProbaFlashGenerator = {
	DAY: "selected_day",
	SECOND_ROLL: "second_roll",
	SUPER_LOTTO: "super_lotto",
	GRAND_LOTTO: "grand_lotto",
	XMAX_LOTTO: "xmas_lotto",
	CLASSIC_LOTTO: "classic_lotto",
	OLD_LOTTO: "old_lotto",
	ASCENDING_ORDER: "top_max",
}

export default class SdkDrawApi {
	private baseURL: string;
	private paths: { [key: string]: string };

	constructor() {
		this.baseURL = "https://draw-api.paapscool.fr"
		//this.baseURL = "localhost:4242"
		this.paths = {
			SMART_FLASH_GENERATOR: "/api/smartflash",
			LUCKY_FLASH_GENERATOR: "/api/luckyflash",
			PROBA_FLASH_GENERATOR: "/api/probaflash",
			HOME: "/api/home",
			HEALTHCHECK: "/healthcheck",
		}
	}

	async healthcheck(): Promise<boolean> {
		const conf = getRequestConfig(this.baseURL, this.paths.HEALTHCHECK)

		try {
			await axios(conf)
			return Promise.resolve(true)
		} catch (axiosErr: any) {
			return Promise.reject(axiosErr)
		}
	}
	async getHomeData(): Promise<HomeData> {
		const conf = getRequestConfig(this.baseURL, this.paths.HOME)

		try {
			const resp: AxiosResponse = await axios(conf)
			return Promise.resolve(jsonUnmarshallHomeData(resp.data))
		} catch (axiosErr: any) {
			return Promise.reject(axiosErr)
		}
	}
	async generateSmartFlash(params: ParamsSmartFlashGenerator): Promise<Draw> {
		const conf = getRequestConfig(this.baseURL, this.paths.SMART_FLASH_GENERATOR)
		const urlParams = new URLSearchParams()

		urlParams.append(ParamKeysSmartFlashGenerator.EXCLUDE_WINNING_DRAWS, params.excludeWinningDraws.toString())
		urlParams.append(ParamKeysSmartFlashGenerator.EXCLUDE_BALLS, params.excludeBalls.toString())
		urlParams.append(ParamKeysSmartFlashGenerator.EXCLUDE_LUCKY, params.excludeLucky.toString())

		conf.params = urlParams

		try {
			const resp: AxiosResponse = await axios(conf)
			return Promise.resolve(jsonUnmarshallDraw(resp.data))
		} catch (axiosErr: any) {
			return Promise.reject(axiosErr)
		}
	}
	async generateLuckyFlash(params: ParamsLuckyFlashGenerator): Promise<Draw> {
		const conf = getRequestConfig(this.baseURL, this.paths.LUCKY_FLASH_GENERATOR)
		const urlParams = new URLSearchParams()

		urlParams.append(ParamKeysLuckyFlashGenerator.BALL1, params.ball1Input)
		urlParams.append(ParamKeysLuckyFlashGenerator.BALL2, params.ball2Input)
		urlParams.append(ParamKeysLuckyFlashGenerator.BALL3, params.ball3Input)
		urlParams.append(ParamKeysLuckyFlashGenerator.BALL4, params.ball4Input)
		urlParams.append(ParamKeysLuckyFlashGenerator.BALL5, params.ball5Input)
		urlParams.append(ParamKeysLuckyFlashGenerator.LUCKY_BALL, params.luckyInput)

		conf.params = urlParams

		try {
			const resp: AxiosResponse = await axios(conf)
			return Promise.resolve(jsonUnmarshallDraw(resp.data))
		} catch (axiosErr: any) {
			return Promise.reject(axiosErr)
		}
	}
	async generateProbaFlash(params: ParamsProbaFlashGenerator): Promise<Draw> {
		const conf = getRequestConfig(this.baseURL, this.paths.PROBA_FLASH_GENERATOR)
		const urlParams = new URLSearchParams()

		urlParams.append(ParamKeysProbaFlashGenerator.DAY, params.day)
		urlParams.append(ParamKeysProbaFlashGenerator.SECOND_ROLL, params.secondRoll.toString())
		urlParams.append(ParamKeysProbaFlashGenerator.SUPER_LOTTO, params.superLotto.toString())
		urlParams.append(ParamKeysProbaFlashGenerator.GRAND_LOTTO, params.grandLotto.toString())
		urlParams.append(ParamKeysProbaFlashGenerator.XMAX_LOTTO, params.xmaxLotto.toString())
		urlParams.append(ParamKeysProbaFlashGenerator.CLASSIC_LOTTO, params.classicLotto.toString())
		urlParams.append(ParamKeysProbaFlashGenerator.OLD_LOTTO, params.oldLotto.toString())
		urlParams.append(ParamKeysProbaFlashGenerator.ASCENDING_ORDER, params.ascendingOrder.toString())

		conf.params = urlParams

		try {
			const resp: AxiosResponse = await axios(conf)
			return Promise.resolve(jsonUnmarshallDraw(resp.data))
		} catch (axiosErr: any) {
			return Promise.reject(axiosErr)
		}
	}
}