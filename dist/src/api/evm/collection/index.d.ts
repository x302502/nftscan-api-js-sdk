import { QueryCollectionsByAccountAddressParams, QueryCollectionsByFiltersParams, QueryCollectionsByRankingParams } from '../../../types/evm/collection/request-params';
import { Collection } from '../../../types/evm/collection/response-data';
import { NftscanConfig } from '../../../types/nftscan-type';
import BaseApi from '../../base-api';
/**
 * Collection related API
 */
export default class NftscanEvmCollection extends BaseApi<NftscanConfig> {
    /**
     * Get an NFT collection
     * - This endpoint returns information for a collection with the given NFT contract address.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-an-nft-collection}
     * @param contractAddress The NFT contract address
     * @param showAttribute Whether to obtain attributes distribution for the collection
     * @returns Promise<{@link Collection}>
     */
    getCollectionsByContract(contractAddress: string, showAttribute?: boolean): Promise<Collection>;
    /**
     * Get NFT collections by ranking.
     * - This endpoint returns information for a list of collections with the given ranking field. The collections are sorted by the given ranking field with the given sort direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-collections-by-ranking}
     * @param params The query params {@link QueryCollectionsByRankingParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    getCollectionsByRanking(params?: QueryCollectionsByRankingParams): Promise<Array<Collection>>;
    /**
     * Search NFT collections.
     * - This endpoint returns information for a list of collections by applying search filters in the request body. The collections are sorted by deploy_block_number with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/search-nft-collections}
     * @param params The query params {@link QueryCollectionsByFiltersParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    queryCollectionsByFilters(params?: QueryCollectionsByFiltersParams): Promise<Array<Collection>>;
    /**
     * Get NFT collections by account
     * - This endpoint returns information for a list of collections by the account address. The collections are sorted by floor_price with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-collections-by-account}
     * @param accountAddress The account address
     * @param params The query params {@link QueryCollectionsByAccountAddressParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    queryCollectionsByAccountAddress(accountAddress: string, params: QueryCollectionsByAccountAddressParams): Promise<Array<Collection>>;
}
