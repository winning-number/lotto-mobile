import { Module } from "vuex";
import { State as ParentState } from '@/store/index'
import { Draw } from "@/store/models/draw";
import { getItemOrDefault } from "@/script/LocalStorage/LocalStorage";
import { ErrorApp } from "@/store/models/ErrorApp";
import { ThrowErrorOption } from "@/store/modules/error";
import {
	ConfigSmartFlash,
	ConfigProbaFlash,
	ConfigLuckyFlash,
} from "@/store/models/generator";
import {
	ParamsSmartFlashGenerator,
	ParamsProbaFlashGenerator,
	ParamsLuckyFlashGenerator,
} from "@/service/SdkDrawApi/ParamsSdkDrawApi";
import {
	daysToDaysParamsProbaFlashSdk,
	configLuckyFlashToParamsLuckyFlashGenerator,
} from "@/script/LottoApp/ParamsConverter";
import { DayApp } from "@/script/LottoApp/TimeConverter";
import { localStorageKey } from "@/store/constants";

export const ModuleIdentifier = {
	NAME: "module generator",

	// mutations
	SET_SMART_CONFIG: "setSmartConfig",
	SET_PROBA_CONFIG: "setProbaConfig",
	SET_LUCKY_CONFIG: "setLuckyConfig",

	// actions
	INIT_MODULE_GENERATOR: "initModuleGenerator",
	LOAD_SMART_CONFIG: "loadSmartConfig",
	LOAD_PROBA_CONFIG: "loadProbaConfig",
	LOAD_LUCKY_CONFIG: "loadLuckyConfig",
	RESET_DEFAULT_SMART_CONFIG: "resetDefaultSmartConfig",
	RESET_DEFAULT_PROBA_CONFIG: "resetDefaultProbaConfig",
	RESET_DEFAULT_LUCKY_CONFIG: "resetDefaultLuckyConfig",
	GENERATE_SMART_DRAW: "generateSmartDraw",
	GENERATE_PROBA_DRAW: "generateProbaDraw",
	GENERATE_LUCKY_DRAW: "generateLuckyDraw",

	// storage key
	// key should be unique and prefixed by the main localStorageKey given to the local storage
	// during the initialization
	STORAGE_KEY_SMART_CONFIG: localStorageKey + ".setSmartConfig",
	STORAGE_KEY_PROBA_CONFIG: localStorageKey + ".setProbaConfig",
	STORAGE_KEY_LUCKY_CONFIG: localStorageKey + ".setLuckyConfig",
}

const defaultConfigSmartFlash: ConfigSmartFlash = {
	excludeBallNumber: [],
	excludeLuckyNumber: [],
	excludeAlreadyPicked: true,
}

const defaultConfigProbaFlash: ConfigProbaFlash = {
	days: [DayApp.Monday, DayApp.Wednesday, DayApp.Saturday],
	secondRoll: false,
	superLotto: false,
	grandLotto: false,
	xmaxLotto: false,
	classicLotto: true,
	oldLotto: false,
	ascendingOrder: false,
}

const defaultConfigLuckyFlash: ConfigLuckyFlash = {
	multiInput: false,
	ball1Input: "LotoGagnant",
	ball2Input: "",
	ball3Input: "",
	ball4Input: "",
	ball5Input: "",
	luckyInput: "",
}

interface State {
	smartConfig: ConfigSmartFlash;
	probaConfig: ConfigProbaFlash;
	luckyConfig: ConfigLuckyFlash;
}

export const moduleGenerator: Module<State, ParentState> = {
	state: {
		smartConfig: {} as ConfigSmartFlash,
		probaConfig: {} as ConfigProbaFlash,
		luckyConfig: {} as ConfigLuckyFlash,
	},
	mutations: {
		setSmartConfig(state: State, config: ConfigSmartFlash): void {
			state.smartConfig.excludeAlreadyPicked = config.excludeAlreadyPicked
			state.smartConfig.excludeBallNumber = config.excludeBallNumber
			state.smartConfig.excludeLuckyNumber = config.excludeLuckyNumber
		},
		setProbaConfig(state: State, config: ConfigProbaFlash): void {
			state.probaConfig.days = config.days
			state.probaConfig.secondRoll = config.secondRoll
			state.probaConfig.superLotto = config.superLotto
			state.probaConfig.grandLotto = config.grandLotto
			state.probaConfig.xmaxLotto = config.xmaxLotto
			state.probaConfig.classicLotto = config.classicLotto
			state.probaConfig.oldLotto = config.oldLotto
			state.probaConfig.ascendingOrder = config.ascendingOrder
		},
		setLuckyConfig(state: State, config: ConfigLuckyFlash): void {
			state.luckyConfig.multiInput = config.multiInput
			state.luckyConfig.ball1Input = config.ball1Input
			state.luckyConfig.ball2Input = config.ball2Input
			state.luckyConfig.ball3Input = config.ball3Input
			state.luckyConfig.ball4Input = config.ball4Input
			state.luckyConfig.ball5Input = config.ball5Input
			state.luckyConfig.luckyInput = config.luckyInput
		},
	},
	actions: {
		async resetDefaultSmartConfig({ commit }): Promise<void> {
			commit(ModuleIdentifier.SET_SMART_CONFIG, defaultConfigSmartFlash)
		},
		async resetDefaultProbaConfig({ commit }): Promise<void> {
			commit(ModuleIdentifier.SET_PROBA_CONFIG, defaultConfigProbaFlash)
		},
		async resetDefaultLuckyConfig({ commit }): Promise<void> {
			commit(ModuleIdentifier.SET_LUCKY_CONFIG, defaultConfigLuckyFlash)
		},
		/**
		 * load<>Config load the config from the local storage
		 * or set the default config if no config is found
		 */
		async loadSmartConfig({ commit }): Promise<void> {
			await getItemOrDefault(
				ModuleIdentifier.STORAGE_KEY_SMART_CONFIG,
				defaultConfigSmartFlash,
			).then((config: ConfigSmartFlash) => {
				commit(ModuleIdentifier.SET_SMART_CONFIG, config)
			})
		},
		async loadProbaConfig({ commit }): Promise<void> {
			await getItemOrDefault(
				ModuleIdentifier.STORAGE_KEY_PROBA_CONFIG,
				defaultConfigProbaFlash,
			).then((config: ConfigProbaFlash) => {
				commit(ModuleIdentifier.SET_PROBA_CONFIG, config)
			})
		},
		async loadLuckyConfig({ commit }): Promise<void> {
				await getItemOrDefault(
					ModuleIdentifier.STORAGE_KEY_LUCKY_CONFIG,
					defaultConfigLuckyFlash,
				).then((config: ConfigLuckyFlash) => {
					commit(ModuleIdentifier.SET_LUCKY_CONFIG, config)
				})
		},
		/** */
		async initModuleGenerator({ dispatch }): Promise<void> {
			await dispatch(ModuleIdentifier.LOAD_SMART_CONFIG)
			await dispatch(ModuleIdentifier.LOAD_PROBA_CONFIG)
			await dispatch(ModuleIdentifier.LOAD_LUCKY_CONFIG)
		},
		async generateSmartDraw({ dispatch, getters }, config: ConfigSmartFlash): Promise<Draw> {
			const drivers = getters.drivers
			const params: ParamsSmartFlashGenerator = {
				excludeBalls: config.excludeBallNumber,
				excludeLucky: config.excludeLuckyNumber,
				excludeWinningDraws: config.excludeAlreadyPicked,
			}

			try {
				const draw: Draw = await drivers.lotto.generateSmartFlash(params)
				return draw
			} catch(err) {
				const wrappedErr = new ErrorApp(ModuleIdentifier.NAME + " : actions generatedSmartFlashDraw", err as Error)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "input configuration: " + JSON.stringify(config)
				} as ThrowErrorOption)

				throw err
			}
		},
		async generateProbaDraw({ dispatch, getters }, config: ConfigProbaFlash): Promise<Draw> {
			const drivers = getters.drivers
			const params: ParamsProbaFlashGenerator = {
				day: daysToDaysParamsProbaFlashSdk(config.days).toString(),
				secondRoll: config.secondRoll,
				superLotto: config.superLotto,
				grandLotto: config.grandLotto,
				xmaxLotto: config.xmaxLotto,
				classicLotto: config.classicLotto,
				oldLotto: config.oldLotto,
				ascendingOrder: config.ascendingOrder,
			}

			try {
				const draw: Draw = await drivers.lotto.generateProbaFlash(params)
				return draw
			} catch(err) {
				const wrappedErr = new ErrorApp(ModuleIdentifier.NAME + " : actions generatedProbaFlashDraw", err as Error)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "input configuration: " + JSON.stringify(config)
				} as ThrowErrorOption)

				throw err
			}
		},
		async generateLuckyDraw({ dispatch, getters }, config: ConfigLuckyFlash): Promise<Draw> {
			const drivers = getters.drivers
			const params: ParamsLuckyFlashGenerator = configLuckyFlashToParamsLuckyFlashGenerator(config)

			try {
				const draw: Draw = await drivers.lotto.generateLuckyFlash(params)
				return draw
			} catch(err) {
				const wrappedErr = new ErrorApp(ModuleIdentifier.NAME + " : actions generatedLuckyFlashDraw", err as Error)
				dispatch("throwError", {
					Err: wrappedErr,
					Title: "oups, something went wrong",
					Message: "input configuration: " + JSON.stringify(config)
				} as ThrowErrorOption)

				throw err
			}
		}
	},
	getters: {
		getSmartConfig(state: State): ConfigSmartFlash {
			return state.smartConfig
		},
		getProbaConfig(state: State): ConfigProbaFlash {
			return state.probaConfig
		},
		getLuckyConfig(state: State): ConfigLuckyFlash {
			return state.luckyConfig
		},
	}
}