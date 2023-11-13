import { NftscanConfig } from '../../../types/nftscan-type';
import { QueryCollectionsByFiltersParams } from '../../../types/solana/collection/request-params';
import { Collection } from '../../../types/solana/collection/response-data';
import BaseApi from '../../base-api';
/**
 * Collection related API
 */
export default class NftscanSolanaCollection extends BaseApi<NftscanConfig> {
    /**
     * Get an NFT collection.
     * - This endpoint returns information for a collection with the given NFT.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-an-nft-collection}
     * @param collection The NFT collection for the assets
     * @returns Promise<{@link Collection}>
     */
    getCollection(collection: string): Promise<Collection>;
    /**
     * Search NFT collections.
     * - This endpoint returns information for a list of collections by applying search filters in the request body. The collections are sorted by create_block_number with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/search-nft-collections}
     * @param params The query params {@link QueryCollectionsByFiltersParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    queryCollectionsByFilters(params?: QueryCollectionsByFiltersParams): Promise<Array<Collection>>;
}
