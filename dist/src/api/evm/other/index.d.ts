import { QueryAssetOwnerByContractParams, QueryAssetOwnerParams } from '../../../types/evm/other/request-params';
import { QueryAssestAmountResponse, QueryAssetOwnerByContractAndTokenIdResponse, QueryAssetOwnerResponse, QueryBlockNumberResponse } from '../../../types/evm/other/response-data';
import { NftscanConfig } from '../../../types/nftscan-type';
import BaseApi from '../../base-api';
/**
 * The other API
 */
export default class NftscanEvmOther extends BaseApi<NftscanConfig> {
    /**
     * Get latest block number
     * - This endpoint returns the latest block number NFTScan has reached to.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-latest-block-number}
     * @returns Promise<{@link QueryBlockNumberResponse}>
     */
    getBlockNumber(): Promise<QueryBlockNumberResponse>;
    /**
     * Get NFT amount by account
     * - This endpoint returns information for ERC721 and ERC1155 NFT amount owned by an account address according to the search list in the request body.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-amount-by-account}
     * @param accountAddressList List of account address. Maximum size is 50.
     * @returns Promise<Array<{@link QueryAssestAmountResponse}>>
     */
    queryAssestAmountByAccounts(accountAddressList: Array<string>): Promise<Array<QueryAssestAmountResponse>>;
    /**
     * Get NFT owners by contract
     * - This endpoint returns a list of owners for  ERC721 NFT asset.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-owners-by-contract}
     * @param params The query params {@link QueryAssetOwnerByContractParams}
     * @returns Promise<{@link QueryAssetOwnerResponse}>
     */
    getAssetOwnerByContract(params: QueryAssetOwnerByContractParams): Promise<QueryAssetOwnerResponse>;
    /**
     * Asset owner amount for an asset
     * - This endpoint returns information for owner amount of NFTs that belong to an NFT contract address. The NFTs are sorted by token_id with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-owners-by-an-nft}
     * @param params The query params {@link QueryAssetOwnerParams}
     * @returns Promise<{@link QueryAssetOwnerByContractAndTokenIdResponse}>
     */
    getAssetOwnerByContractAndTokenId(params: QueryAssetOwnerParams): Promise<QueryAssetOwnerByContractAndTokenIdResponse>;
}
