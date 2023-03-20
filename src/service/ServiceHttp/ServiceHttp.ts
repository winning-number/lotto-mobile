import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

export function getRequestConfig(baseURL: string, path: string): AxiosRequestConfig {
	return {
		url: path,
		method: "get",
		baseURL: baseURL,
		headers: { "Content-Type": "application/json" } as AxiosRequestHeaders,
		timeout: 0,
		withCredentials: false,
		responseType: "json",
		validateStatus: function(status: number) { return status == 200 },
	} as AxiosRequestConfig
}
// foldername: nom-component
// filename: nom-component
// interface / class: NomComponent
// function: functionName