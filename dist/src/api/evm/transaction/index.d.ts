import { CommonTransactionParams, QueryTransactionsByFiltersParams, TransactionParams } from '../../../types/evm/transaction/request-params';
import { CommonTransactionResponse, Transaction } from '../../../types/evm/transaction/response-data';
import { EventType, NftscanConfig } from '../../../types/nftscan-type';
import BaseApi from '../../base-api';
/**
 * Transaction related API
 */
export default class NftscanEvmTransaction extends BaseApi<NftscanConfig> {
    /**
     * Get transactions by account
     * - This endpoint returns a list of NFT transactions for an account address. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-account}
     * @param accountAddress The account address
     * @param params The query params {@link TransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    getTransactionsByAccount(accountAddress: string, params?: TransactionParams): Promise<CommonTransactionResponse>;
    /**
     * Get transactions by contract
     * - This endpoint returns a list of NFT transactions for an NFT contract address. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-contract}
     * @param contractAddress The NFT contract address
     * @param params The query params {@link CommonTransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    getTransactionsByContract(contractAddress: string, params?: CommonTransactionParams): Promise<CommonTransactionResponse>;
    /**
     * Get transactions by NFT
     * - This endpoint returns a list of NFT transactions for a single NFT. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-nft}
     * @param contractAddress The NFT contract address
     * @param tokenId The NFT token ID. Can be in Hex or in Number
     * @param params The query params {@link CommonTransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    getTransactionsByContractAndTokenId(contractAddress: string, tokenId: string, params?: CommonTransactionParams): Promise<CommonTransactionResponse>;
    /**
     * Get transactions by to address.
     * - This endpoint returns a list of NFT transactions filtered by the param `to` of the transaction. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-to-address}
     * @param toAddress The to address of the transaction
     * @param params The query params {@link CommonTransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    getTransactionsByToAddress(toAddress: string, params?: CommonTransactionParams): Promise<CommonTransactionResponse>;
    /**
     * Search transactions.
     * - This endpoint returns a list of NFT transactions by applying search filters in the request body. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/search-transactions}
     * @param params The query params {@link QueryTransactionsByFiltersParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    queryTransactionsByFilters(params?: QueryTransactionsByFiltersParams): Promise<CommonTransactionResponse>;
    /**
     * Get transactions by hash
     * - This endpoint returns the transaction records queried based on the list of transaction hash.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-hash}
     * @param txHashList The string Array of transaction hash. Maximum size is 50.
     * @param eventType The NFT event type Array<{@link EventType}> of the transaction.
     * @returns Promise<Array<{@link Transaction}>>
     */
    queryTransactionsByTxHashList(txHashList: Array<string>, eventType?: Array<EventType>): Promise<Array<Transaction>>;
    private static convertEventType;
}
