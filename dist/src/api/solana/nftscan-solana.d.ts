import { NftscanConfig, NftscanSolanaConfig } from '../../types/nftscan-type';
import BaseApi from '../base-api';
import NftscanSolanaAsset from './asset';
import NftscanSolanaCollection from './collection';
import NftscanSolanaRefresh from './refresh';
import NftscanSolanaStatistic from './statistic';
import NftscanSolanaTransaction from './transaction';
/**
 * This class is the main entry point into NFTScan's Solana APIs and separates functionality into different object.
 * To use a different chain or API key, you should create a new instance of {@link NftscanSolana}
 *
 * The NFTScan API for Solana helps developers build new experiences retrieving NFTs and data analysis on the solana
 * blockchain. We provide a set of endpoints that enable you to fetch NFT assets as well as transactions, collections,
 * marketplace statistics and more.
 *
 * To use our APIs, You need to register an account on NFTScan open platform OpenAPI Platform({@link https://developer.nftscan.com/})
 * and get your API key for NFTScan API SDK initialize config.
 */
export default class NftscanSolana extends BaseApi<NftscanConfig> {
    constructor(config: NftscanSolanaConfig);
    /**
     * The `asset` object contains methods for NFTScan's Solana asset API.
     */
    get asset(): NftscanSolanaAsset;
    /**
     * The `transaction` object contains methods for NFTScan's Solana transaction API.
     */
    get transaction(): NftscanSolanaTransaction;
    /**
     * The `collection` object contains methods for NFTScan's Solana collection API.
     */
    get collection(): NftscanSolanaCollection;
    /**
     * The `statistic` object contains methods for NFTScan's Solana statistic API.
     */
    get statistic(): NftscanSolanaStatistic;
    /**
     * The `refresh` object contains methods for NFTScan's Solana refresh metadata API.
     */
    get refresh(): NftscanSolanaRefresh;
}
