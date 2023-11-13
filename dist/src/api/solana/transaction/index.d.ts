import { BaseNsPaginationReqParam, NftscanConfig } from '../../../types/nftscan-type';
import { TransactionParams } from '../../../types/solana/transaction/request-params';
import { CommonTransactionResponse } from '../../../types/solana/transaction/response-data';
import BaseApi from '../../base-api';
/**
 * Transaction related API
 */
export default class NftscanSolanaTransaction extends BaseApi<NftscanConfig> {
    /**
     * Get transactions by account
     * - This endpoint returns a list of NFT transactions for an account address. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-transactions-by-account}
     * @param accountAddress The account address
     * @param params The query params {@link TransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    getTransactionsByAccount(accountAddress: string, params?: TransactionParams): Promise<CommonTransactionResponse>;
    /**
     * Get transactions by collection
     * - This endpoint returns a list of NFT transactions for an NFT collection. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-transactions-by-collection}
     * @param collection The NFT collection for the assets
     * @param params The query params {@link BaseNsPaginationReqParam}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    getTransactionsByCollection(collection: string, params?: BaseNsPaginationReqParam): Promise<CommonTransactionResponse>;
    /**
     * Get transactions by NFT
     * - This endpoint returns a list of NFT transactions for a single NFT. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-transactions-by-nft}
     * @param tokenAddress The NFT token address
     * @param params The query params {@link BaseNsPaginationReqParam}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    getTransactionsByTokenAddress(tokenAddress: string, params?: BaseNsPaginationReqParam): Promise<CommonTransactionResponse>;
}
