import { Draw, getDayName, jsonUnmarshallDraw } from "@/store/models/draw"
import { LuckyFilterOne, LuckyFilterAny } from "@/store/models/luckyFilter"
import { ProbaFilter } from "@/store/models/probaFilter"
import axios, { AxiosResponse, AxiosRequestConfig, AxiosResponseHeaders, AxiosRequestHeaders, AxiosError } from "axios"
import { getRequestConfig } from "@/script/ServiceHttp/ServiceHttp"

const lottoPredictorURL = "https://lotto-predictor-api.herokuapp.com"
const randomerPath = "/randomer"
const luckyPath = "/lucky-number"
const probaPath = "/proba-explorer"
const luckyParamBall1 = "salt_ball_1"
const luckyParamBall2 = "salt_ball_2"
const luckyParamBall3 = "salt_ball_3"
const luckyParamBall4 = "salt_ball_4"
const luckyParamBall5 = "salt_ball_5"
const luckyParamLuckyBall = "salt_lucky_ball"
const probaParamDay = "day"
const probaParamSecondRoll = "second_roll"
const probaParamSuperLotto = "super_lotto"
const probaParamGrandLotto = "grand_lotto"
const probaParamXmaxLotto = "xmax_lotto"
const probaParamClassicLotto = "classic_lotto"
const probaParamOldLotto = "old_lotto"
const probaParamAscendingOrder = "ascending_order"

interface ServiceLotto {
	driver: boolean;
}

export default class SLotto implements ServiceLotto{
	private _baseURL = lottoPredictorURL

	driver: boolean;
	constructor() {
		this.driver = true
	}
	async getRandomNumbers(): Promise<Draw> {
		let draw = {} as Draw
		let err = {} as AxiosError
		const conf = getRequestConfig(lottoPredictorURL, randomerPath)

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
	async getLuckyOneNumbers(filter: LuckyFilterOne): Promise<Draw> {
		let draw = {} as Draw
		let err = {} as AxiosError
		const conf = getRequestConfig(lottoPredictorURL, luckyPath)

		const params = new URLSearchParams()
		params.append(luckyParamBall1, filter.input)
		params.append(luckyParamBall2, filter.input)
		params.append(luckyParamBall3, filter.input)
		params.append(luckyParamBall4, filter.input)
		params.append(luckyParamBall5, filter.input)
		params.append(luckyParamLuckyBall, filter.input)
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
	async getLuckyAnyNumbers(filter: LuckyFilterAny): Promise<Draw> {
		let draw = {} as Draw
		let err = {} as AxiosError
		const conf = getRequestConfig(lottoPredictorURL, luckyPath)

		const params = new URLSearchParams()
		params.append(luckyParamBall1, filter.ball1Input)
		params.append(luckyParamBall2, filter.ball2Input)
		params.append(luckyParamBall3, filter.ball3Input)
		params.append(luckyParamBall4, filter.ball4Input)
		params.append(luckyParamBall5, filter.ball5Input)
		params.append(luckyParamLuckyBall, filter.luckyInput)
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
	async getProbaNumbers(filter: ProbaFilter): Promise<Draw> {
		let draw = {} as Draw
		let err = {} as AxiosError
		const conf = getRequestConfig(lottoPredictorURL, probaPath)

		const params = new URLSearchParams()
		params.append(probaParamDay, getDayName(filter.day))
		params.append(probaParamSecondRoll, filter.secondRoll.toString())
		params.append(probaParamSuperLotto, filter.superLotto.toString())
		params.append(probaParamGrandLotto, filter.grandLotto.toString())
		params.append(probaParamXmaxLotto, filter.grandLotto.toString())
		params.append(probaParamClassicLotto, filter.classicLotto.toString())
		params.append(probaParamAscendingOrder, filter.ascendingOrder.toString())
		params.append(probaParamOldLotto, filter.oldLotto.toString())
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
}