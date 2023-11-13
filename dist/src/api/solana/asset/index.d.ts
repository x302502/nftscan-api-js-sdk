import { NftscanConfig } from '../../../types/nftscan-type';
import { AssetParams, QueryAssetsByCollectionParams } from '../../../types/solana/asset/request-params';
import { Asset, CommonAssetResponse, QueryAllAssetsResponse } from '../../../types/solana/asset/response-data';
import BaseApi from '../../base-api';
/**
 * Asset related API
 */
export default class NftscanSolanaAsset extends BaseApi<NftscanConfig> {
    /**
     * Get NFTs by account
     * - This endpoint returns a set of NFTs owned by an account address.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param params The query params {@link AssetParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    getAssetsByAccount(accountAddress: string, params?: AssetParams): Promise<CommonAssetResponse>;
    /**
     * Get all NFTs by account
     * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to collection.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-all-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param showAttribute Whether to obtain attributes for the assets
     * @returns Promise<Array<{@link QueryAllAssetsResponse}>>
     */
    getAllAssets(accountAddress: string, showAttribute?: boolean): Promise<Array<QueryAllAssetsResponse>>;
    /**
     * Get minted NFTs by account
     * - This endpoint returns a set of NFTs minted by an account address.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-minted-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param params The query params {@link AssetParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    getAccountMinted(accountAddress: string, params?: AssetParams): Promise<CommonAssetResponse>;
    /**
     * Get NFTs by collection
     * - This endpoint returns a set of NFTs that belong to an NFT collection. The NFTs are sorted by token address with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-nfts-by-collection}
     * @param collection The NFT collection for the assets
     * @param params The query params {@link QueryAssetsByCollectionParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    getAssetsByCollection(collection: string, params?: QueryAssetsByCollectionParams): Promise<CommonAssetResponse>;
    /**
     * Get single NFT
     * - This endpoint returns a single NFT.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-single-nft}
     * @param tokenAddress The NFT token address for the assets
     * @param showAttribute Whether to obtain attributes for the assets
     * @returns Promise<{@link Asset}>
     */
    getAssetsByTokenAddress(tokenAddress: string, showAttribute?: boolean): Promise<Asset>;
    /**
     * Get multiple NFTs
     * - This endpoint returns a single NFT.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-single-nft}
     * @param list List of token address. Maximum size is 50.
     * @param showAttribute Whether to obtain attributes for the assets
     * @returns Promise<{@link Asset}>
     */
    queryAssetsInBatches(list: Array<{
        token_address: string;
    }>, showAttribute?: boolean): Promise<Asset>;
}
