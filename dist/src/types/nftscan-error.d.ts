/**
 * NFTScan API SDK's wrapper error object
 */
export declare class NftscanError {
    /**
     * error code
     */
    code: string | number | undefined;
    /**
     * error message
     */
    msg: string;
    constructor(code: string | number | undefined, msg?: string);
}
export declare function invalidParamError(paramName: string, extMsg?: string): Promise<never>;
export declare function paramErrorDefault(msg?: string): Promise<never>;
export declare function missingParamError(paramName: string): Promise<never>;
export declare function invalidLimitError(max: number): Promise<never>;
