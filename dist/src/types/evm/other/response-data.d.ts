import { BaseNsPaginationResData } from '../../nftscan-type';
/**
 * The response data of EVM API 'getBlockNumber'
 */
export interface QueryBlockNumberResponse {
    /**
     * The latest block number NFTScan has reached to
     */
    block_number: number;
}
/**
 * The response data of EVM API 'queryAssestAmountByAccounts'
 */
export interface QueryAssestAmountResponse {
    /**
     * The account address
     */
    account_address: string;
    /**
     * How many erc1155 NFT items the account owns
     */
    erc1155_items_total: number;
    /**
     * How many erc721 NFT items the account owns
     */
    erc721_items_total: number;
    /**
     * How many NFT items the account owns
     */
    items_total: number;
}
interface AssetOwnerContent {
    /**
     * The token ID of the NFT in Hex
     */
    contract_token_id: string;
    /**
     * The owner of the item
     */
    owner: string;
    /**
     * The token ID of the NFT in Number
     */
    token_id: string;
}
/**
 * The response data of EVM API 'getAssetOwnerByContract'
 */
export interface QueryAssetOwnerResponse extends BaseNsPaginationResData {
    content: Array<AssetOwnerContent>;
}
interface AccountAmountContent {
    /**
     * The account address who owns the NFT
     */
    account_address: string;
    /**
     * The quantity of the NFT the account owns
     */
    amount: string;
}
/**
 * The response data of EVM API 'getAssetOwnerByContractAndTokenId'
 */
export interface QueryAssetOwnerByContractAndTokenIdResponse extends BaseNsPaginationResData {
    content: Array<AccountAmountContent>;
}
export {};
