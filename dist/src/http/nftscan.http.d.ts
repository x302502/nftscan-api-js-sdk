import { NftscanConfig } from '../types/nftscan-type';
/**
 * Configure the axios interceptor
 */
export declare function initHttpConfig(): void;
/**
 * NFTScan API SDK's wrapper function of send get http request
 * @param nftscanConfig NFTScan API SDK Initialization parameters {@link NftscanConfig}
 * @param url The API url
 * @param params The axios get params
 * @returns Promise
 */
export declare function nftscanGet<T, V>(nftscanConfig: NftscanConfig, url: string, params?: T): Promise<V>;
/**
 * NFTScan API SDK's wrapper function of send post http request
 * @param nftscanConfig NFTScan API SDK Initialization parameters {@link NftscanConfig}
 * @param url The API url
 * @param data The axios post data
 * @returns Promise
 */
export declare function nftscanPost<T, V>(nftscanConfig: NftscanConfig, url: string, data?: T): Promise<V>;
