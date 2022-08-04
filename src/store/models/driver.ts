//import ServiceFirebase from '@/script/ServiceFirebase/ServiceFirebase';
//import ServiceStorage from '@/script/ServiceStorage';
import ServiceLotto from '@/script/ServiceLotto/ServiceLotto';

export class Driver {
	lotto: ServiceLotto
//	firebase: ServiceFirebase
//	storage: ServiceStorage
	
	constructor() {
		this.lotto = new ServiceLotto()
//		this.firebase = new ServiceFirebase()
//		this.storage = new ServiceStorage()
	}
}