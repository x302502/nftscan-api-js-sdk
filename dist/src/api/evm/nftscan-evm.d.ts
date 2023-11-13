import { NftscanConfig } from '../../types/nftscan-type';
import BaseApi from '../base-api';
import NftscanEvmAsset from './asset';
import NftscanEvmCollection from './collection';
import NftscanEvmOther from './other';
import NftscanEvmRefresh from './refresh';
import NftscanEvmStatistic from './statistic';
import NftscanEvmTransaction from './transaction';
/**
 * This class is the main entry point into NFTScan's EVM-like APIs and separates functionality into different object.
 * To use a different chain or API key, you should create a new instance of {@link NftscanEvm}
 *
 * The NFTScan API helps developers build new experiences retrieving NFTs and data analysis. We provide a set of endpoints that
 * enable you to fetch ERC721 and ERC1155 NFT assets as well as transactions, collections, marketplace statistics and more.
 * To use our APIs, You need to register an account on NFTScan open platform OpenAPI Platform({@link https://developer.nftscan.com/})
 * and get your API key for NFTScan API SDK initialize config.
 */
export default class NftscanEvm extends BaseApi<NftscanConfig> {
    /**
     * The `asset` object contains methods for NFTScan's EVM-like chain asset API.
     */
    get asset(): NftscanEvmAsset;
    /**
     * The `transaction` object contains methods for NFTScan's EVM-like chain transaction API.
     */
    get transaction(): NftscanEvmTransaction;
    /**
     * The `collection` object contains methods for NFTScan's EVM-like chain collection API.
     */
    get collection(): NftscanEvmCollection;
    /**
     * The `statistic` object contains methods for NFTScan's EVM-like chain statistic API.
     */
    get statistic(): NftscanEvmStatistic;
    /**
     * The `refresh` object contains NFTScan's EVM-like chain refresh metadata API.
     */
    get refresh(): NftscanEvmRefresh;
    /**
     * The `other` object contains NFTScan's EVM-like chain useful extension methods.
     */
    get other(): NftscanEvmOther;
}
