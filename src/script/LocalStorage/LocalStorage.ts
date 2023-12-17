import { GetResult, Preferences } from'@capacitor/preferences';
import { Store } from 'vuex';

export interface LocalStorageOptions {
	key: string;
	mutationList: Array<string>;
}

// createLocalStorage create a vuex plugin to sync the vuex store with the local storage
// operation hook on each mutations store if the mutation list is empty
// else, only hook on the mutation define in the mutation list
// the key use by the pluging is define by the <key>.<mutation.type> 
export function createLocalStorage({
		key = "applications",
		mutationList = [],
	}: LocalStorageOptions): (store: Store<any>) => void {
	return function (store: Store<any>): void {
		store.subscribe((mutation, state) => {
			const itemKey = key + "." + mutation.type
			if (mutationList.length > 0 && !mutationList.includes(itemKey)) {
				return ;
			}

			try {
				const item = getItem(itemKey)
				if (item === null) {
					setItem(itemKey, mutation.payload)

					return ;
				}

				const oldJSONItem = JSON.stringify(item)
				const newJSONItem = JSON.stringify(mutation.payload)
				if (oldJSONItem !== newJSONItem) {
					setItem(itemKey, mutation.payload)
				}

				return ;
			} catch (err: any) {
				console.log("createLocalStorage catch an error: " + err.message)

				return ;
			}
		})
	};
}

// getItemOrDefault return the item define by the key or the defaultState if no data is found
export async function getItemOrDefault<T>(key: string, defaultState: T): Promise<T> {
	return getItem(key).then((result: any) => {
		if (result === null) {
			return defaultState
		}

		return result
	}).catch((err: Error) => {
		console.log("getItemOrDefault catch an error: " + err.message)

		throw err
	})
}

// getItem return the item define by the key from the storage
export async function getItem(key: string): Promise<any> {
	return Preferences.get({key: key}).then((result: GetResult) => {
		if (!result.value) {
			return null
		}

		return JSON.parse(result.value)
	}).catch((err: Error) => {
		console.log("getItem catch an error: " + err.message)

		throw err
	})
}

// setItem set the item define by the key from the storage
export async function setItem(key: string, value: any): Promise<void> {
	return Preferences.set({
		key: key,
		value: JSON.stringify(value),
	}).catch((err: Error) => {
		console.log("setItem cath an error: " + err.message)

		throw err
	})
}

// removeItem remove the item define by the key
// define the custom removeItem function storage for the vuex-plugin-peristedstate library
export async function removeItem(key: string): Promise<void> {
	return Preferences.remove({key: key}).catch((err: Error) => {
		console.log("removeItem catch an error: " + err.message)

		throw err
	})
}