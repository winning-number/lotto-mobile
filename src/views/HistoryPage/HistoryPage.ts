import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ModuleIdentifier } from "@/store/modules/history";
import AppToolbar from '@/components/AppToolbar/AppToolbar.vue';
import ShowNumber from "@/components/ShowNumber/ShowNumber.vue";
import { buildDatePhrase, buildPricePhrase, buildLottoTypePhrase } from "@/script/LottoApp/PhraseBuilder";
import { DrawFull, ListDrawFull, ResumeDraw } from "@/service/SdkDrawApi/ModelsSdkDrawApi";
import { informationCircleOutline } from "ionicons/icons";
import { 
	InfiniteScrollCustomEvent,
	IonInfiniteScroll,
	IonInfiniteScrollContent,
} from "@ionic/vue";
import ModalShowDraw from "@/components/ModalShowDraw/ModalShowDraw.vue";

export default defineComponent({
	name: "HistoryPage",
	components: {
		AppToolbar,
		ShowNumber,
		ModalShowDraw,
		IonInfiniteScroll,
		IonInfiniteScrollContent,
	},
	computed: {
	},
	setup() {
		useStore();

		return {
			informationCircleOutline,
			buildDatePhrase,
			buildPricePhrase,
			buildLottoTypePhrase,
		};
	},
	data() {
		const history = this.$store.getters.getHistory;
		const data = {
			maxItems: this.$store.getters.getNumberOfItems,
			loadedItems: history.length,
			showLoadingStatus: true,
			showLastDrawDetails: false,
			detailDraw: {} as DrawFull,
		}

		return {
			history,
			data,
		};
	},
	methods: {
		drawIsWin(draw: ResumeDraw): string {
			return draw.haveWinner ? "oui" : "non"
		},
		infiniteScroll(ev: InfiniteScrollCustomEvent): void {
			this.data.showLoadingStatus = false;
			this.$store.dispatch(ModuleIdentifier.FETCH_HISTORY).then((): void => {
				setTimeout(() => {
					this.data.loadedItems = this.history.length;
					this.data.showLoadingStatus = true;
					ev.target.complete()
				}, 1500);
			});
		},
		openModalShowLastDraw(drawId: string): void {
			this.$store.dispatch(ModuleIdentifier.SEARCH_DRAW, drawId).then((list: ListDrawFull): void => {
				if (list.draws.length != 1) {
					return;
				}
				this.data.detailDraw = list.draws[0];
				this.data.showLastDrawDetails = true;
			});
		},
		closeModalShowLastDraw(): void {
			this.data.showLastDrawDetails = false
		},
	},
});