import { NftscanConfig, RefreshMetadataResponse } from '../../../types/nftscan-type';
import BaseApi from '../../base-api';
/**
 * The refresh metadata API
 */
export default class NftscanSolanaRefresh extends BaseApi<NftscanConfig> {
    /**
     * Refresh NFT metadata
     * - This endpoint enables you to submit a background task. The task will refresh the metadata of a specified NFT asset.
     * - details: {@link https://docs.nftscan.com/reference/solana/refresh-nft-metadata}
     * @param tokenAddress The token address of the NFT
     * @returns Promise<{@link RefreshMetadataResponse}>
     */
    refreshAsset(tokenAddress: string): Promise<RefreshMetadataResponse>;
}
