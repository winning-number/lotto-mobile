import { Draw } from '@/store/models/draw'
import { Filter } from '@/store/models/filter'
import { toastController } from '@ionic/vue'
import { State, useStore } from '@/store';
import { Store } from 'vuex'

export class GeneratePath {
	static randomPick = "randomPick"
	static luckyPickOne = "luckyPick"
	static probaPick = "probaPick"
}

export enum CardDataTag {
	RandomCardData = 1,
	LuckyCardData,
	ProbaCardData,
}

export interface ICardData {
	/* CardData about the generator type content */
	altImage: string,
	srcImage: string,
	title: string,
	description: string,
	draws: Draw,

	/* data about the model presentation like */
	loading: boolean,
	openModal: boolean, 
}

export class CardData implements ICardData {
	private store: Store<State>;

	altImage: string;
	srcImage: string;
	title: string;
	description: string;
	draws: Draw;

	openModal = false
	loading = false

	constructor(tag: CardDataTag) {
		this.store = useStore()

		this.altImage = ""
		this.srcImage = ""
		this.title = ""
		this.description = ""
		this.draws = {} as Draw
	}
	generator(filter: Filter): void {
		this.draws = {} as Draw
		this.loading = true

		this.store.dispatch(filter.getActionPath(), filter).then((): void => {
			this.loading = false
		}).catch((err: Error) => {
			toastController.create({
				message: err.message,
				duration: 2000,
			}).then((toast: HTMLIonToastElement): void => {
				toast.present()
			})
			this.loading = false
		})
	}
	open(): void {
		this.openModal = true
	}
	close(): void {
		this.openModal = false
	}
}