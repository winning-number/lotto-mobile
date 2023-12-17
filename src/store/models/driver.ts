import SdkDrawApi from '@/service/SdkDrawApi/SdkDrawApi';

export class Driver {
	lotto: SdkDrawApi
	
	constructor() {
		this.lotto = new SdkDrawApi()
	}
}