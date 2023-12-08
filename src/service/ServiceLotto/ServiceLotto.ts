import { Draw, getDayName, jsonUnmarshallDraw } from "@/store/models/draw"
import { LuckyFlashFilter, SmartFlashFilter } from "@/store/models/filter"
import { HomeData, jsonUnmarshallHomeData } from "@/store/models/homeData"
import { ProbaFlashFilter } from "@/store/models/filter"
import axios, { AxiosResponse, AxiosError } from "axios"
import { getRequestConfig } from "@/service/ServiceHttp/ServiceHttp"

//const lottoPredictorURL = "http://localhost:4242/api"
const lottoPredictorURL = "https://draw-api.paapscool.fr/api"
const smartFlashPath = "/smartflash"
const luckyFlashPath = "/luckyflash"
const probaFlashPath = "/probaflash"
const homePath = "/home"

const smartFlashParamExcludeNumber = "exclude_number"
const smartFlashParamExcludeLucky = "exclude_lucky"
const smartFlashParamExcludeAlreadyPick = "exclude_already_pick"

const luckyFlashParamBall1 = "salt_b1"
const luckyFlashParamBall2 = "salt_b2"
const luckyFlashParamBall3 = "salt_b3"
const luckyFlashParamBall4 = "salt_b4"
const luckyFlashParamBall5 = "salt_b5"
const luckyFlashParamLuckyBall = "salt_lucky"

const probaFlashParamDay = "selected_day"
const probaFlashParamSecondRoll = "second_roll"
const probaFlashParamSuperLotto = "super_lotto"
const probaFlashParamGrandLotto = "grand_lotto"
const probaFlashParamXmaxLotto = "xmas_lotto"
const probaFlashParamClassicLotto = "classic_lotto"
const probaFlashParamOldLotto = "old_lotto"
const probaFlashParamAscendingOrder = "top_max"

interface ServiceLotto {
	driver: boolean;
}

export default class SLotto implements ServiceLotto{
	private _baseURL = lottoPredictorURL

	driver: boolean;
	constructor() {
		this.driver = true
	}
	async getSmartFlashNumbers(filter: SmartFlashFilter): Promise<Draw> {
		let draw = {} as Draw
		let err = {} as AxiosError
		const conf = getRequestConfig(lottoPredictorURL, smartFlashPath)
		const params = new URLSearchParams()

		params.append(smartFlashParamExcludeAlreadyPick, filter.excludeAlreadyPicked.toString())
		params.append(smartFlashParamExcludeNumber, filter.excludeBallNumber.toString())
		params.append(smartFlashParamExcludeLucky, filter.excludeLuckyNumber.toString())

		conf.params = params
		await axios(conf).then((resp: AxiosResponse): void => {
			draw = jsonUnmarshallDraw(resp.data)
		}).catch((axiosErr: AxiosError): void => {
			console.log(axiosErr)
			err = axiosErr
		})
		if (err.message != undefined) {
			return Promise.reject(err)
		}

		return Promise.resolve(draw)
	}
	async getLuckyFlashNumbers(filter: LuckyFlashFilter): Promise<Draw> {
		let draw = {} as Draw
		let err = {} as AxiosError

		const conf = getRequestConfig(lottoPredictorURL, luckyFlashPath)
		const params = new URLSearchParams()

		params.append(luckyFlashParamBall1, filter.ball1Input)
		params.append(luckyFlashParamBall2, filter.ball2Input)
		params.append(luckyFlashParamBall3, filter.ball3Input)
		params.append(luckyFlashParamBall4, filter.ball4Input)
		params.append(luckyFlashParamBall5, filter.ball5Input)
		params.append(luckyFlashParamLuckyBall, filter.luckyInput)
		conf.params = params

		await axios(conf).then((resp: AxiosResponse): void => {
			draw = jsonUnmarshallDraw(resp.data)
		}).catch((axiosErr: AxiosError): void => {
			console.log(axiosErr)
			err = axiosErr
		})
		if (err.message != undefined) {
			return Promise.reject(err)
		}

		return Promise.resolve(draw)
	}
	async getProbaFlashNumbers(filter: ProbaFlashFilter): Promise<Draw> {
		let draw = {} as Draw
		let err = {} as AxiosError
		const conf = getRequestConfig(lottoPredictorURL, probaFlashPath)

		const params = new URLSearchParams()
		params.append(probaFlashParamDay, getDayName(filter.day))
		params.append(probaFlashParamSecondRoll, filter.secondRoll.toString())
		params.append(probaFlashParamSuperLotto, filter.superLotto.toString())
		params.append(probaFlashParamGrandLotto, filter.grandLotto.toString())
		params.append(probaFlashParamXmaxLotto, filter.grandLotto.toString())
		params.append(probaFlashParamClassicLotto, filter.classicLotto.toString())
		params.append(probaFlashParamAscendingOrder, filter.ascendingOrder.toString())
		params.append(probaFlashParamOldLotto, filter.oldLotto.toString())
		conf.params = params

		await axios(conf).then((resp: AxiosResponse): void => {
			draw = jsonUnmarshallDraw(resp.data)
		}).catch((axiosErr: AxiosError): void => {
			console.log(axiosErr)
			err = axiosErr
		})
		if (err.message != undefined) {
			return Promise.reject(err)
		}

		return Promise.resolve(draw)
	}
	async getHomeData(): Promise<HomeData> {
		let homeData = {} as HomeData
		let err = {} as AxiosError
		const conf = getRequestConfig(lottoPredictorURL, homePath)

		await axios(conf).then((resp: AxiosResponse): void => {
			homeData = jsonUnmarshallHomeData(resp.data)
		}).catch((axiosErr: AxiosError): void => {
			console.log(axiosErr)
			err = axiosErr
		})
		if (err.message != undefined) {
			return Promise.reject(err)
		}

		return Promise.resolve(homeData)
	}
}