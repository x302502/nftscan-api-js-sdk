import axios from 'axios';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var BaseApi = /** @class */ (function () {
    function BaseApi(config) {
        this.config = config;
    }
    return BaseApi;
}());

/* eslint-disable no-shadow */
/**
 * The NFTScan API SDK supported chains
 */
var EvmChain;
(function (EvmChain) {
    EvmChain["ETH"] = "eth";
    EvmChain["BNB"] = "bnb";
    EvmChain["POLYGON"] = "polygon";
    EvmChain["ARBITRUM"] = "arbitrum";
    EvmChain["OPTIMISM"] = "optimism";
    EvmChain["ZKSYNC"] = "zksync";
    EvmChain["LINEA"] = "linea";
    EvmChain["BASE"] = "base";
    EvmChain["AVALANCHE"] = "avalanche";
    EvmChain["MOONBEAM"] = "moonbeam";
    EvmChain["PLATON"] = "platon";
    EvmChain["CRONOS"] = "cronos";
    EvmChain["FANTOM"] = "fantom";
    EvmChain["GNOSIS"] = "gnosis";
    EvmChain["SCROLL"] = "scroll";
})(EvmChain || (EvmChain = {}));
/**
 * The erc type of the NFT
 */
var ErcType;
(function (ErcType) {
    ErcType["ERC_721"] = "erc721";
    ErcType["ERC_1155"] = "erc1155";
})(ErcType || (ErcType = {}));
/**
 * The sort type
 */
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "asc";
    SortDirection["DESC"] = "desc";
})(SortDirection || (SortDirection = {}));
/**
 * The trade type
 */
var TradeType;
(function (TradeType) {
    TradeType["BUY"] = "buy";
    TradeType["SELL"] = "sell";
})(TradeType || (TradeType = {}));
var RangeType;
(function (RangeType) {
    RangeType["M15"] = "15m";
    RangeType["M30"] = "30m";
    RangeType["H1"] = "1h";
    RangeType["H4"] = "4h";
    RangeType["H6"] = "6h";
    RangeType["H12"] = "12h";
    RangeType["D1"] = "1d";
    RangeType["D3"] = "3d";
    RangeType["D7"] = "7d";
    RangeType["D30"] = "30d";
    RangeType["D90"] = "90d";
    RangeType["MTH1"] = "1mth";
    RangeType["MTH3"] = "3mth";
    RangeType["Y1"] = "1y";
    RangeType["ALL"] = "all";
})(RangeType || (RangeType = {}));
/**
 * NFTScan API SDK's error code
 */
var NsError;
(function (NsError) {
    NsError["API_KEY_ERROR"] = "api_key_error";
    NsError["API_CHAIN_ERROR"] = "api_chain_error";
    NsError["REQUEST_ERROR"] = "request_error";
    NsError["RESPONSE_DATA_EMPTY"] = "response_data_empty";
    NsError["NFTSCAN_DATA_EMPTY"] = "nftscan_data_empty";
    NsError["PARAM_ERROR"] = "param_error";
})(NsError || (NsError = {}));
/**
 * The NFT event type of the transaction(Mint, Transfer, Sale, Burn)
 */
var EventType;
(function (EventType) {
    EventType["MINT"] = "Mint";
    EventType["TRANSFER"] = "Transfer";
    EventType["SALE"] = "Sale";
    EventType["BURN"] = "Burn";
})(EventType || (EventType = {}));

/**
 * NFTScan API SDK's wrapper error object
 */
var NftscanError = /** @class */ (function () {
    function NftscanError(code, msg) {
        /**
         * error code
         */
        this.code = '';
        /**
         * error message
         */
        this.msg = '';
        this.code = code;
        this.msg = msg || '';
    }
    return NftscanError;
}());
function missingParam(paramName) {
    return "The param '".concat(paramName, "' is required.");
}
function invalidParam(paramName, extMsg) {
    return "The param '".concat(paramName, "' is invalid. ").concat(extMsg || '');
}
function invalidParamError(paramName, extMsg) {
    return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam(paramName, extMsg)));
}
function paramErrorDefault(msg) {
    return Promise.reject(new NftscanError(NsError.PARAM_ERROR, msg));
}
function missingParamError(paramName) {
    return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam(paramName)));
}
function invalidLimitError(max) {
    return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam('limit', "capped at ".concat(max))));
}

function isEmpty(obj) {
    if (typeof obj === 'number') {
        return false;
    }
    if (obj === undefined || obj == null || obj === 'null' || obj === 'undefined') {
        return true;
    }
    var contentStr = typeof obj === 'string' ? obj : JSON.stringify(obj);
    return contentStr.length === 0 || contentStr === '{}' || contentStr === '[]';
}

var NftscanConst = /** @class */ (function () {
    function NftscanConst() {
    }
    /**
     * NFTScan's API base url
     */
    NftscanConst.BASE_URL = {
        eth: 'https://restapi.nftscan.com/api',
        bnb: 'https://bnbapi.nftscan.com/api',
        arbitrum: 'https://arbitrumapi.nftscan.com/api',
        moonbeam: 'https://moonbeamapi.nftscan.com/api',
        polygon: 'https://polygonapi.nftscan.com/api',
        optimism: 'https://optimismapi.nftscan.com/api',
        platon: 'https://platonapi.nftscan.com/api',
        solana: 'https://solanaapi.nftscan.com/api',
        avalanche: 'https://avaxapi.nftscan.com/api',
        cronos: 'https://cronosapi.nftscan.com/api',
        fantom: 'https://fantomapi.nftscan.com/api',
        gnosis: 'https://gnosisapi.nftscan.com/api',
        zksync: 'https://zksyncapi.nftscan.com/api',
        linea: 'https://lineaapi.nftscan.com/api',
        base: 'https://baseapi.nftscan.com/api',
        scroll: 'https://scrollapi.nftscan.com/api',
    };
    /**
     * NFTScan's API url
     */
    NftscanConst.API = {
        evm: {
            assets: {
                getAssetsByAccount: '/v2/account/own/',
                getAllAssets: '/v2/account/own/all/',
                getAccountMinted: '/v2/account/mint/',
                getAssets: '/v2/assets/',
                getMultiChainAssets: '/v2/assets/chain/',
                queryAssetsInBatches: '/v2/assets/batch',
                queryAssetsByFilters: '/v2/assets/filters',
                queryAssetsByAttributes: '/v2/assets/attributes',
            },
            transaction: {
                getTransactionsByAccount: '/v2/transactions/account/',
                getTransactions: '/v2/transactions/',
                getTransactionsByToAddress: '/v2/transactions/to/',
                queryTransactionsByFilters: '/v2/transactions/filters',
                queryTransactionsByTxHashList: '/v2/transactions/txhash',
            },
            collection: {
                getCollectionsByContract: '/v2/collections/',
                getCollectionsByRanking: '/v2/collections/rankings',
                queryCollectionsByFilters: '/v2/collections/filters',
                queryCollectionsByAccountAddress: '/v2/collections/own/',
            },
            statistic: {
                getTradeRanking: '/v2/statistics/ranking/trade',
                getCollectionRanking: '/v2/statistics/ranking/collection',
                getCollectionTrade: '/v2/statistics/collection/trade/',
                getCollectionTrending: '/v2/statistics/collection/trending/',
                getCollectionTopHolder: '/v2/statistics/collection/holder/',
                getAccountOverview: '/v2/statistics/overview/',
                getBlueChipStatistics: '/v2/statistics/blue/chip/',
                getMarketplaceRanking: '/v2/statistics/ranking/marketplace',
                getMarketCapRanking: '/v2/statistics/ranking/marketcap',
                getCollectionStatistics: '/v2/statistics/collection/',
                getMintRanking: '/v2/statistics/ranking/mint',
                getMintAmount: '/v2/statistics/mint/amount',
                getTradersRanking: '/v2/statistics/ranking/traders',
                getGasRanking: '/v2/statistics/ranking/gas',
                getCollectionOverview: '/v2/statistics/collection/overview',
                getWalletRanking: '/v2/statistics/ranking/wallet',
                getTradeWalletRanking: '/v2/statistics/ranking/trade/wallet',
                getCollectionHoldingAmountDistribution: '/v2/statistics/amount/distribution/',
                getCollectionHoldingPeriodDistribution: '/v2/statistics/period/distribution/',
                getCollectionBlueChipList: '/v2/statistics/blue/chip/list',
                getAccountHoldingDistribution: '/v2/statistics/distribution/',
            },
            refresh: {
                refreshAsset: '/v2/refresh/metadata',
                refreshContract: '/v2/refresh/metadata/contract',
            },
            other: {
                getBlockNumber: '/v2/blocknumber',
                queryAssestAmountByAccounts: '/v2/asset/account/amount',
                getAssetOwnerByContract: '/v2/asset/collection/amount',
                getAssetOwnerByContractAndTokenId: '/v2/asset/owners',
            },
        },
        solana: {
            assets: {
                getAssetsByAccount: '/sol/account/own/',
                getAllAssets: '/sol/account/own/all/',
                getAccountMinted: '/sol/account/mint/',
                getAssetsByCollection: '/sol/assets/collection/',
                getAssetsByTokenAddress: '/sol/assets/',
                queryAssetsInBatches: '/sol/assets/batch',
            },
            transaction: {
                getTransactionsByAccount: '/sol/transactions/account/',
                getTransactionsByCollection: '/sol/transactions/collection/',
                getTransactionsByTokenAddress: '/sol/transactions/',
            },
            collection: {
                getCollection: '/sol/collections/',
                queryCollectionsByFilters: '/sol/collections/filters',
            },
            statistic: {
                getTradeRanking: '/sol/statistics/ranking/trade',
                getCollectionStatistics: '/sol/statistics/collection/',
            },
            refresh: {
                refreshAsset: '/sol/refresh/metadata',
            },
        },
    };
    return NftscanConst;
}());

/* eslint-disable no-console */
function apiKeyError() {
    var error = new NftscanError(NsError.API_KEY_ERROR, 'The property "apiKey" cannot be empty.');
    console.error(error.msg);
    console.error('To use our APIs, You need to register an account on NFTScan open platform');
    console.error('NFTScan open platform ->', 'https://developer.nftscan.com/');
    return Promise.reject(error);
}
function apiChainError(chain) {
    var error = new NftscanError(NsError.API_CHAIN_ERROR, "The property \"chain\" is invalid, current is ---> ".concat(chain));
    console.error(error.msg);
    console.error('"chian" must be one of the following strings: [eth, bnb, arbitrum, moonbeam, polygon, optimism, platon, avalanche]');
    return Promise.reject(error);
}
/**
 * Configure the axios interceptor
 */
function initHttpConfig() {
    axios.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(new NftscanError(NsError.REQUEST_ERROR, error.message));
    });
    axios.interceptors.response.use(function (response) {
        if (response.status !== 200) {
            return Promise.reject(new NftscanError(response.status, response.statusText));
        }
        if (isEmpty(response.data)) {
            return Promise.reject(new NftscanError(NsError.RESPONSE_DATA_EMPTY));
        }
        var _a = response.data, code = _a.code, msg = _a.msg, data = _a.data;
        if (code !== 200) {
            return Promise.reject(new NftscanError(code, msg));
        }
        return data;
    }, function (error) {
        return Promise.reject(new NftscanError(error.code, error.message));
    });
}
/**
 * NFTScan API SDK's wrapper function of send get http request
 * @param nftscanConfig NFTScan API SDK Initialization parameters {@link NftscanConfig}
 * @param url The API url
 * @param params The axios get params
 * @returns Promise
 */
function nftscanGet(nftscanConfig, url, params) {
    var apiKey = nftscanConfig.apiKey, chain = nftscanConfig.chain;
    if (isEmpty(apiKey)) {
        return apiKeyError();
    }
    var baseURL = NftscanConst.BASE_URL[chain];
    if (isEmpty(baseURL)) {
        return apiChainError(chain);
    }
    return axios.get("".concat(baseURL).concat(url), {
        params: params,
        headers: { 'X-API-KEY': apiKey, 'X-FROM': 'js_sdk' },
    });
}
/**
 * NFTScan API SDK's wrapper function of send post http request
 * @param nftscanConfig NFTScan API SDK Initialization parameters {@link NftscanConfig}
 * @param url The API url
 * @param data The axios post data
 * @returns Promise
 */
function nftscanPost(nftscanConfig, url, data) {
    var apiKey = nftscanConfig.apiKey, chain = nftscanConfig.chain;
    if (isEmpty(apiKey)) {
        return apiKeyError();
    }
    var baseURL = NftscanConst.BASE_URL[chain];
    if (isEmpty(baseURL)) {
        return apiChainError(chain);
    }
    return axios.post("".concat(baseURL).concat(url), data, { headers: { 'X-API-KEY': apiKey, 'X-FROM': 'js_sdk' } });
}

/**
 * Asset related API
 */
var NftscanEvmAsset = /** @class */ (function (_super) {
    __extends(NftscanEvmAsset, _super);
    function NftscanEvmAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get NFTs by account
     * - This endpoint returns a set of NFTs owned by an account address.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param params The query params {@link AssetParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanEvmAsset.prototype.getAssetsByAccount = function (accountAddress, params) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (isEmpty(params)) {
            return missingParamError('params');
        }
        var contractAddress = params.contract_address, ercType = params.erc_type, limit = params.limit;
        if (isEmpty(contractAddress) && isEmpty(ercType)) {
            return missingParamError('erc_type');
        }
        if (limit && limit > 1000) {
            return invalidLimitError(1000);
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.assets.getAssetsByAccount).concat(accountAddress), params);
    };
    /**
     * Get all NFTs by account
     * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to contract address.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-all-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param ercType Can be erc721 or erc1155.
     * @param showAttribute Whether to load attribute data of the asset. Default is false
     * @returns Promise<Array<{@link CollectionAssets}>>
     */
    NftscanEvmAsset.prototype.getAllAssets = function (accountAddress, ercType, showAttribute) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        var params = {
            erc_type: ercType,
            show_attribute: showAttribute,
        };
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.assets.getAllAssets).concat(accountAddress), params);
    };
    /**
     * Get minted NFTs by account
     * - This endpoint returns a set of NFTs minted by an account address.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-minted-nfts-by-account}
     * @param accountAddress The address of the minter of the assets
     * @param params The query params {@link AccountMintParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanEvmAsset.prototype.getAccountMinted = function (accountAddress, params) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.assets.getAccountMinted).concat(accountAddress), params);
    };
    /**
     * Get NFTs by contract
     * - This endpoint returns a set of NFTs that belong to an NFT contract address. The NFTs are sorted by token_id with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nfts-by-contract}
     * @param contractAddress The NFT contract address for the assets
     * @param params The query params {@link AssetsByContractParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanEvmAsset.prototype.getAssetsByContract = function (contractAddress, params) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.assets.getAssets).concat(contractAddress), params);
    };
    /**
     * Get single NFT
     * - This endpoint returns a single NFT.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-single-nft}
     * @param contractAddress The NFT contract address for the assets
     * @param tokenId The NFT token ID. Can be in Hex or in Number
     * @param showAttribute Whether to load attribute data of the asset. Default is false
     * @returns Promise<{@link Asset}>
     */
    NftscanEvmAsset.prototype.getAssetsByContractAndTokenId = function (contractAddress, tokenId, showAttribute) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        if (isEmpty(tokenId)) {
            return missingParamError('tokenId');
        }
        var params = showAttribute ? { show_attribute: true } : undefined;
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.assets.getAssets).concat(contractAddress, "/").concat(tokenId), params);
    };
    /**
     * Get multiple NFTs
     * - This endpoint returns a set of NFTs according to the search list in the request body.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-multiple-nfts}
     * @param list List of contract address with token ID. Maximum size is 50.
     * @param showAttribute Whether to load attribute data of the assets. Default is false
     * @returns Promise<Array<{@link Asset}>>
     */
    NftscanEvmAsset.prototype.queryAssetsInBatches = function (list, showAttribute) {
        if (isEmpty(list)) {
            return missingParamError('list');
        }
        if (list.length > 50) {
            return invalidParamError('list', 'Maximum size is 50');
        }
        var params = {
            contract_address_with_token_id_list: list,
            show_attribute: !!showAttribute,
        };
        return nftscanPost(this.config, NftscanConst.API.evm.assets.queryAssetsInBatches, params);
    };
    /**
     * Search NFTs
     * - This endpoint returns a list of NFT assets by applying search filters in the request body. The assets are sorted by nftscan_id with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/search-nfts}
     * @param params The query params {@link QueryAssetsByFiltersParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanEvmAsset.prototype.queryAssetsByFilters = function (params) {
        if (params) {
            var contractAddressList = params.contract_address_list, limit = params.limit;
            if (contractAddressList && contractAddressList.length > 50) {
                return invalidParamError('contract_address_list', 'Maximum size is 50');
            }
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanPost(this.config, NftscanConst.API.evm.assets.queryAssetsByFilters, params);
    };
    /**
     * Get NFTs by attributes
     * - This endpoint returns a set of NFTs those belong to an NFT contract address with attributes. The NFTs are sorted by token_id with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nfts-by-attributes}
     * @param params The query params {@link QueryAssetsByAttributesParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanEvmAsset.prototype.queryAssetsByAttributes = function (params) {
        var contractAddress = params.contract_address, attributes = params.attributes;
        if (isEmpty(contractAddress)) {
            return missingParamError('contract_address');
        }
        if (isEmpty(attributes)) {
            return missingParamError('attributes');
        }
        if (attributes.length > 10) {
            return invalidParamError('attributes', 'Maximum size is 10');
        }
        return nftscanPost(this.config, NftscanConst.API.evm.assets.queryAssetsByAttributes, params);
    };
    /**
     * Get all multi-chain NFTs by account
     * - This endpoint returns all multi-chain NFTs owned by an account address. And the NFTs are grouped according to contract address.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-all-multi-chain-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param chain The short name of chain(eth, bnb, polygon, moonbeam, arbitrum, optimism, platon, avalanche). Using ';' to separate multiple chains
     * @param ercType Can be erc721 or erc1155.
     * @returns Promise<Array<{@link QueryMultiChainAssets}>>
     *
     */
    NftscanEvmAsset.prototype.getMultiChainAssets = function (accountAddress, chain, ercType) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (isEmpty(chain)) {
            return missingParamError('chain');
        }
        var params = { chain: chain.join(';'), erc_type: ercType };
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.assets.getMultiChainAssets).concat(accountAddress), params);
    };
    return NftscanEvmAsset;
}(BaseApi));

/**
 * Collection related API
 */
var NftscanEvmCollection = /** @class */ (function (_super) {
    __extends(NftscanEvmCollection, _super);
    function NftscanEvmCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get an NFT collection
     * - This endpoint returns information for a collection with the given NFT contract address.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-an-nft-collection}
     * @param contractAddress The NFT contract address
     * @param showAttribute Whether to obtain attributes distribution for the collection
     * @returns Promise<{@link Collection}>
     */
    NftscanEvmCollection.prototype.getCollectionsByContract = function (contractAddress, showAttribute) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.collection.getCollectionsByContract).concat(contractAddress), { show_attribute: !!showAttribute });
    };
    /**
     * Get NFT collections by ranking.
     * - This endpoint returns information for a list of collections with the given ranking field. The collections are sorted by the given ranking field with the given sort direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-collections-by-ranking}
     * @param params The query params {@link QueryCollectionsByRankingParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    NftscanEvmCollection.prototype.getCollectionsByRanking = function (params) {
        if (params) {
            var limit = params.limit;
            if (limit && limit > 1000) {
                return invalidLimitError(1000);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.collection.getCollectionsByRanking), params);
    };
    /**
     * Search NFT collections.
     * - This endpoint returns information for a list of collections by applying search filters in the request body. The collections are sorted by deploy_block_number with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/search-nft-collections}
     * @param params The query params {@link QueryCollectionsByFiltersParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    NftscanEvmCollection.prototype.queryCollectionsByFilters = function (params) {
        if (params) {
            var limit = params.limit, contractAddressList = params.contract_address_list;
            if (contractAddressList && contractAddressList.length > 10) {
                return invalidParamError('contract_address_list', 'Maximum size is 10');
            }
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanPost(this.config, "".concat(NftscanConst.API.evm.collection.queryCollectionsByFilters), params);
    };
    /**
     * Get NFT collections by account
     * - This endpoint returns information for a list of collections by the account address. The collections are sorted by floor_price with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-collections-by-account}
     * @param accountAddress The account address
     * @param params The query params {@link QueryCollectionsByAccountAddressParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    NftscanEvmCollection.prototype.queryCollectionsByAccountAddress = function (accountAddress, params) {
        var limit = params.limit, ercType = params.erc_type;
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (isEmpty(ercType)) {
            return missingParamError('erc_type');
        }
        if (limit && limit > 100) {
            return invalidLimitError(100);
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.collection.queryCollectionsByAccountAddress).concat(accountAddress), params);
    };
    return NftscanEvmCollection;
}(BaseApi));

/**
 * The other API
 */
var NftscanEvmOther = /** @class */ (function (_super) {
    __extends(NftscanEvmOther, _super);
    function NftscanEvmOther() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get latest block number
     * - This endpoint returns the latest block number NFTScan has reached to.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-latest-block-number}
     * @returns Promise<{@link QueryBlockNumberResponse}>
     */
    NftscanEvmOther.prototype.getBlockNumber = function () {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.other.getBlockNumber));
    };
    /**
     * Get NFT amount by account
     * - This endpoint returns information for ERC721 and ERC1155 NFT amount owned by an account address according to the search list in the request body.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-amount-by-account}
     * @param accountAddressList List of account address. Maximum size is 50.
     * @returns Promise<Array<{@link QueryAssestAmountResponse}>>
     */
    NftscanEvmOther.prototype.queryAssestAmountByAccounts = function (accountAddressList) {
        if (isEmpty(accountAddressList)) {
            return missingParamError('accountAddressList');
        }
        if (accountAddressList.length > 50) {
            return invalidParamError('accountAddressList', 'Maximum size is 50');
        }
        return nftscanPost(this.config, "".concat(NftscanConst.API.evm.other.queryAssestAmountByAccounts), { account_address_list: accountAddressList });
    };
    /**
     * Get NFT owners by contract
     * - This endpoint returns a list of owners for  ERC721 NFT asset.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-owners-by-contract}
     * @param params The query params {@link QueryAssetOwnerByContractParams}
     * @returns Promise<{@link QueryAssetOwnerResponse}>
     */
    NftscanEvmOther.prototype.getAssetOwnerByContract = function (params) {
        var contractAddress = params.contract_address, limit = params.limit;
        if (isEmpty(contractAddress)) {
            return missingParamError('contract_address');
        }
        if (limit && limit > 100) {
            return invalidLimitError(100);
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.other.getAssetOwnerByContract), params);
    };
    /**
     * Asset owner amount for an asset
     * - This endpoint returns information for owner amount of NFTs that belong to an NFT contract address. The NFTs are sorted by token_id with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-owners-by-an-nft}
     * @param params The query params {@link QueryAssetOwnerParams}
     * @returns Promise<{@link QueryAssetOwnerByContractAndTokenIdResponse}>
     */
    NftscanEvmOther.prototype.getAssetOwnerByContractAndTokenId = function (params) {
        var contractAddress = params.contract_address, tokenId = params.token_id, limit = params.limit;
        if (isEmpty(contractAddress)) {
            return missingParamError('contract_address');
        }
        if (isEmpty(tokenId)) {
            return missingParamError('token_id');
        }
        if (limit && limit > 100) {
            return invalidLimitError(100);
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.other.getAssetOwnerByContractAndTokenId), params);
    };
    return NftscanEvmOther;
}(BaseApi));

/**
 * The refresh metadata API
 */
var NftscanEvmRefresh = /** @class */ (function (_super) {
    __extends(NftscanEvmRefresh, _super);
    function NftscanEvmRefresh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Refresh an asset
     * - This endpoint enables you to submit a background task. The task will refresh the metadata of a specified NFT asset.
     * - details: {@link https://docs.nftscan.com/reference/evm/refresh-nft-metadata}
     * @param contractAddress The NFT contract address
     * @param tokenId The NFT token ID. Can be in Hex or in Number
     * @returns Promise<{@link RefreshMetadataResponse}>
     */
    NftscanEvmRefresh.prototype.refreshAsset = function (contractAddress, tokenId) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        if (isEmpty(tokenId)) {
            return missingParamError('tokenId');
        }
        return nftscanPost(this.config, "".concat(NftscanConst.API.evm.refresh.refreshAsset), {
            contract_address: contractAddress,
            token_id: tokenId,
        });
    };
    /**
     * Refresh a contract
     * - This endpoint enables you to submit a background task. The task will refresh the metadata of the entire contract after review.
     * - details: {@link https://docs.nftscan.com/reference/evm/refresh-nft-metadata-by-contract}
     * @param contractAddress The NFT contract address
     * @returns Promise<{@link RefreshMetadataResponse}>
     */
    NftscanEvmRefresh.prototype.refreshContract = function (contractAddress) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanPost(this.config, "".concat(NftscanConst.API.evm.refresh.refreshContract), {
            contract_address: contractAddress,
        });
    };
    return NftscanEvmRefresh;
}(BaseApi));

/**
 * Statistic related API
 */
var NftscanEvmStatistic = /** @class */ (function (_super) {
    __extends(NftscanEvmStatistic, _super);
    function NftscanEvmStatistic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Trade ranking
     * - This endpoint returns NFT trade ranking statistics referring to NFTScan Ranking({@link https://www.nftscan.com/ranking})
     * - details: {@link https://docs.nftscan.com/reference/evm/trade-ranking}
     * @param params The query params {@link QueryTradeRankingParams}
     * @returns Promise<Array<{@link QueryTradeRankingResponse}>>
     */
    NftscanEvmStatistic.prototype.getTradeRanking = function (params) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getTradeRanking), params);
    };
    /**
     * Collection ranking
     * - This endpoint returns NFT collection ranking statistics.
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-ranking}
     * @param params The query params {@link QueryCollectionRankingParams}
     * @returns Promise<Array<{@link QueryCollectionRankingResponse}>>
     */
    NftscanEvmStatistic.prototype.getCollectionRanking = function (params) {
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionRanking), params);
    };
    /**
     * Collection trade distribution
     * - This endpoint returns NFT collection trade distribution referring to NFTScan Traded Distribution({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-trade-distribution}
     * @param contractAddress The NFT contract address
     * @param time Can be 1h, 4h, 12h, 1d, 3d, 7d, 30d and 90d. 1d for default
     * @returns Promise<Array<{@link QueryCollectionTradeResponse}>>
     */
    NftscanEvmStatistic.prototype.getCollectionTrade = function (contractAddress, time) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionTrade).concat(contractAddress), { time: time || RangeType.D1 });
    };
    /**
     * Collection trending statistics
     * - This endpoint returns NFT collection trending statistics referring to NFTScan Trending({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-trending-statistics}
     * @param contractAddress The NFT contract address
     * @param time Can be 1h, 4h, 12h, 1d, 3d, 7d, 30d and 90d. 1d for default
     * @returns Promise<Array<{@link QueryCollectionTrendingResponse}>>
     */
    NftscanEvmStatistic.prototype.getCollectionTrending = function (contractAddress, time) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionTrending).concat(contractAddress), { time: time || RangeType.D1 });
    };
    /**
     * Collection Top Holder
     * - This endpoint returns top holder statistics referring to NFTScan Holders({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Holders}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-top-holder}
     * @param contractAddress The NFT contract address
     * @param limit Result size. Defaults to 20, capped at 100
     * @returns Promise<Array<{@link QueryCollectionTopHolderResponse}>>
     */
    NftscanEvmStatistic.prototype.getCollectionTopHolder = function (contractAddress, limit) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        if (limit && limit > 100) {
            return invalidLimitError(100);
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionTopHolder).concat(contractAddress), { limit: limit || 20 });
    };
    /**
     * Account overview
     * - This endpoint returns overview statistics for an account address referring to NFTScan Overview({@link https://www.nftscan.com/0xea7a0f1434084b2e99b42f045896e7326fed9dc1}).
     * - details: {@link https://docs.nftscan.com/reference/evm/account-overview-statistics}
     * @param accountAddress The account address
     * @returns Promise<{@link QueryAccountOverviewResponse}>
     */
    NftscanEvmStatistic.prototype.getAccountOverview = function (accountAddress) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getAccountOverview).concat(accountAddress));
    };
    /**
     * Collection Blue Chip Statistics
     * - This endpoint returns blue chip statistics referring to({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-blue-chip-statistics}
     * @param contractAddress The NFT contract address
     * @returns Promise<{@link QueryBlueChipStatisticsResponse}>
     */
    NftscanEvmStatistic.prototype.getBlueChipStatistics = function (contractAddress) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getBlueChipStatistics).concat(contractAddress));
    };
    /**
     * Marketplace ranking
     * - This endpoint returns NFT marketplace ranking statistics referring to NFTScan Marketplace({@link https://www.nftscan.com/marketplace}).
     * - details: {@link https://docs.nftscan.com/reference/evm/marketplace-ranking}
     * @param params The query params {@link QueryMarketplaceRankingParams}
     * @returns Promise<Array<{@link QueryMarketplaceRankingResponse}>>
     */
    NftscanEvmStatistic.prototype.getMarketplaceRanking = function (params) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getMarketplaceRanking), params);
    };
    /**
     * Market cap ranking
     * - This endpoint returns NFT market cap ranking statistics.
     * - details: {@link https://docs.nftscan.com/reference/evm/market-cap-ranking}
     * @returns Promise<Array<{@link QueryMarketCapRankingResponse}>>
     */
    NftscanEvmStatistic.prototype.getMarketCapRanking = function () {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getMarketCapRanking));
    };
    /**
     * Collection statistics
     * - This endpoint returns statistics for a collection referring to NFTScan Collection({@link https://www.nftscan.com/search/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-statistics}
     * @param contractAddress The NFT contract address
     * @returns Promise<{@link QueryCollectionStatisticsResponse}>
     */
    NftscanEvmStatistic.prototype.getCollectionStatistics = function (contractAddress) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionStatistics).concat(contractAddress));
    };
    /**
     * Mint ranking
     * - This endpoint returns NFT mint ranking statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Top Mints'.
     * - details: {@link https://docs.nftscan.com/reference/evm/mint-ranking}
     * @param time The time range (1h 6h 12h 1d 3d). 1d for default
     * @returns Promise<Array<{@link QueryMintRankingResponse}>>
     */
    NftscanEvmStatistic.prototype.getMintRanking = function (time) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getMintRanking), { time: time || RangeType.D1 });
    };
    /**
     * Mint amount
     * - This endpoint returns NFT mint amount statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Amount of New NFTs'.
     * - details: {@link https://docs.nftscan.com/reference/evm/mint-amount}
     * @param time The time range (1h 6h 12h 1d 3d 7d 30d). 1d for default
     * @returns Promise<{@link QueryMintAmountResponse}>
     */
    NftscanEvmStatistic.prototype.getMintAmount = function (time) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getMintAmount), { time: time || RangeType.D1 });
    };
    /**
     * Traders ranking
     * - This endpoint returns NFT traders ranking statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Top Traders'.
     * - details: {@link https://docs.nftscan.com/reference/evm/traders-ranking}
     * @param time The time range (1h 6h 12h 1d 3d). 1d for default
     * @param tradeType Can be buy or sell. buy for default
     * @returns Promise<Array<{@link QueryTradersRankingResponse}>>
     */
    NftscanEvmStatistic.prototype.getTradersRanking = function (time, tradeType) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getTradersRanking), { time: time || RangeType.D1, trade_type: tradeType || TradeType.BUY });
    };
    /**
     * Gas ranking
     * - This endpoint returns NFT gas ranking statistics referring to NFTScan Gas Tracker({@link https://www.nftscan.com/analytics/tracker}).
     * - details: {@link https://docs.nftscan.com/reference/evm/gas-ranking}
     * @param show24hTrends Whether to obtain 24-hour gas fee trend data.
     * @returns Promise<Array<{@link QueryGasRankingResponse}>>
     */
    NftscanEvmStatistic.prototype.getGasRanking = function (show24hTrends) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getGasRanking), { show_24h_trends: !!show24hTrends });
    };
    /**
     * Collection overview
     * - This endpoint returns collection overview data.
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-overview}
     * @returns Promise<{@link CollectionOverviewResponse}>
     */
    NftscanEvmStatistic.prototype.getCollectionOverview = function () {
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionOverview));
    };
    /**
     * Wallet Ranking
     * - This endpoint returns the giant whale wallet addresses and their related analysis statistics referring to NFTScan Top Wallet({@link https://www.nftscan.com/analytics/wallet}).
     * - details: {@link https://docs.nftscan.com/reference/evm/wallet-ranking}
     * @param params The query params {@link QueryWalletRankingParams}
     * @returns Promise<{@link WalletRankingResponse}>
     */
    NftscanEvmStatistic.prototype.getWalletRanking = function (params) {
        var limit = params.limit;
        if (limit && limit > 100) {
            return invalidLimitError(100);
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getWalletRanking), params);
    };
    /**
     * Wallet Trade Ranking
     * - This endpoint returns the top 1000 wallet addresses and their related analysis statistics in the last 24 hours.
     * - details: {@link https://docs.nftscan.com/reference/evm/wallet-trade-ranking}
     * @param params The query params {@link QueryTradeWalletRankingParams}
     * @returns Promise<{@link TradeWalletRankingResponse}>
     */
    NftscanEvmStatistic.prototype.getTradeWalletRanking = function (params) {
        var limit = params.limit;
        if (limit && limit > 100) {
            return invalidLimitError(100);
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getTradeWalletRanking), params);
    };
    /**
     * Collection Holding Amount Distribution
     * - This endpoint returns the distribution information of the number of NFT items held referring to NFTScan Holding Amount Distribution({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-holding-amount-distribution}
     * @param contractAddress The NFT contract address
     * @returns Promise<{@link CollectionHoldingDistributionResponse}>
     */
    NftscanEvmStatistic.prototype.getCollectionHoldingAmountDistribution = function (contractAddress) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionHoldingAmountDistribution).concat(contractAddress));
    };
    /**
     * Collection Holding Period Distribution
     * - This endpoint returns NFT item holding period distribution information referring to NFTScan Holding Period Distribution({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-holding-period-distribution}
     * @param contractAddress The NFT contract address
     * @returns Promise<{@link CollectionHoldingDistributionResponse}>
     */
    NftscanEvmStatistic.prototype.getCollectionHoldingPeriodDistribution = function (contractAddress) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionHoldingPeriodDistribution).concat(contractAddress));
    };
    /**
     * Collection Blue Chip List
     * - This endpoint returns the list of blue chips involved in this project referring to NFTScan Blue Chip Collection({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
     * - details: {@link https://docs.nftscan.com/reference/evm/collection-blue-chip-list}
     * @param contractAddress The NFT contract address
     * @param sortField Can be mutual_holders or mutual_holders
     * @param sortDirection Can be asc or desc
     * @returns Promise<{@link CollectionBlueChipListResponse}>
     */
    NftscanEvmStatistic.prototype.getCollectionBlueChipList = function (contractAddress, sortField, sortDirection) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getCollectionHoldingPeriodDistribution).concat(contractAddress), { contract_address: contractAddress, sort_field: sortField, sort_direction: sortDirection });
    };
    /**
     * Account Holding Distribution
     * - This endpoint returns NFT holding distribution statistics for an account address referring to NFTScan Portfolio({@link https://portfolio.nftscan.com/account/0xca1257ade6f4fa6c6834fdc42e030be6c0f5a813}).
     * - details: {@link https://docs.nftscan.com/reference/evm/account-holding-distribution}
     * @param accountAddress The account address
     * @param distributionType Can be volume or amount
     * @returns Promise<{@link AccountHoldingDistributionResponse}>
     */
    NftscanEvmStatistic.prototype.getAccountHoldingDistribution = function (accountAddress, distributionType) {
        if (isEmpty(accountAddress)) {
            return missingParamError('contractAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.statistic.getAccountHoldingDistribution).concat(accountAddress), { distribution_type: distributionType });
    };
    return NftscanEvmStatistic;
}(BaseApi));

/**
 * Transaction related API
 */
var NftscanEvmTransaction = /** @class */ (function (_super) {
    __extends(NftscanEvmTransaction, _super);
    function NftscanEvmTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transactions by account
     * - This endpoint returns a list of NFT transactions for an account address. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-account}
     * @param accountAddress The account address
     * @param params The query params {@link TransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    NftscanEvmTransaction.prototype.getTransactionsByAccount = function (accountAddress, params) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (params) {
            var TokenId = params.token_id, contractAddress = params.contract_address, limit = params.limit;
            if (!isEmpty(TokenId) && isEmpty(contractAddress)) {
                return missingParamError('contract_address');
            }
            if (limit && limit > 1000) {
                return invalidLimitError(1000);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.transaction.getTransactionsByAccount).concat(accountAddress), NftscanEvmTransaction.convertEventType(params));
    };
    /**
     * Get transactions by contract
     * - This endpoint returns a list of NFT transactions for an NFT contract address. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-contract}
     * @param contractAddress The NFT contract address
     * @param params The query params {@link CommonTransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    NftscanEvmTransaction.prototype.getTransactionsByContract = function (contractAddress, params) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.transaction.getTransactions).concat(contractAddress), NftscanEvmTransaction.convertEventType(params));
    };
    /**
     * Get transactions by NFT
     * - This endpoint returns a list of NFT transactions for a single NFT. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-nft}
     * @param contractAddress The NFT contract address
     * @param tokenId The NFT token ID. Can be in Hex or in Number
     * @param params The query params {@link CommonTransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    NftscanEvmTransaction.prototype.getTransactionsByContractAndTokenId = function (contractAddress, tokenId, params) {
        if (isEmpty(contractAddress)) {
            return missingParamError('contractAddress');
        }
        if (isEmpty(tokenId)) {
            return missingParamError('tokenId');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.transaction.getTransactions).concat(contractAddress, "/").concat(tokenId), NftscanEvmTransaction.convertEventType(params));
    };
    /**
     * Get transactions by to address.
     * - This endpoint returns a list of NFT transactions filtered by the param `to` of the transaction. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-to-address}
     * @param toAddress The to address of the transaction
     * @param params The query params {@link CommonTransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    NftscanEvmTransaction.prototype.getTransactionsByToAddress = function (toAddress, params) {
        if (isEmpty(toAddress)) {
            return missingParamError('toAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.evm.transaction.getTransactionsByToAddress).concat(toAddress), NftscanEvmTransaction.convertEventType(params));
    };
    /**
     * Search transactions.
     * - This endpoint returns a list of NFT transactions by applying search filters in the request body. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/evm/search-transactions}
     * @param params The query params {@link QueryTransactionsByFiltersParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanEvmTransaction.prototype.queryTransactionsByFilters = function (params) {
        if (params) {
            var contractAddressList = params.contract_address_list, limit = params.limit, blockNumberStart = params.block_number_start, blockNumberEnd = params.block_number_end;
            if (contractAddressList && contractAddressList.length > 10) {
                return invalidParamError('contract_address_list', 'Maximum size is 10');
            }
            if (blockNumberStart === undefined && blockNumberEnd === undefined && isEmpty(contractAddressList)) {
                return paramErrorDefault('need more filter');
            }
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanPost(this.config, NftscanConst.API.evm.transaction.queryTransactionsByFilters, NftscanEvmTransaction.convertEventType(params));
    };
    /**
     * Get transactions by hash
     * - This endpoint returns the transaction records queried based on the list of transaction hash.
     * - details: {@link https://docs.nftscan.com/reference/evm/get-transactions-by-hash}
     * @param txHashList The string Array of transaction hash. Maximum size is 50.
     * @param eventType The NFT event type Array<{@link EventType}> of the transaction.
     * @returns Promise<Array<{@link Transaction}>>
     */
    NftscanEvmTransaction.prototype.queryTransactionsByTxHashList = function (txHashList, eventType) {
        if (isEmpty(txHashList)) {
            return missingParamError('txHashList');
        }
        if (txHashList.length > 50) {
            return invalidParamError('txHashList', 'Maximum size is 50');
        }
        var params = { tx_hash_list: txHashList };
        if (eventType) {
            params.event_type = eventType;
        }
        return nftscanPost(this.config, NftscanConst.API.evm.transaction.queryTransactionsByTxHashList, NftscanEvmTransaction.convertEventType(params));
    };
    NftscanEvmTransaction.convertEventType = function (params) {
        if (!params) {
            return params;
        }
        var result = __assign({}, params);
        if (result.event_type && Array.isArray(result.event_type)) {
            result.event_type = result.event_type.join(';');
        }
        return result;
    };
    return NftscanEvmTransaction;
}(BaseApi));

/**
 * This class is the main entry point into NFTScan's EVM-like APIs and separates functionality into different object.
 * To use a different chain or API key, you should create a new instance of {@link NftscanEvm}
 *
 * The NFTScan API helps developers build new experiences retrieving NFTs and data analysis. We provide a set of endpoints that
 * enable you to fetch ERC721 and ERC1155 NFT assets as well as transactions, collections, marketplace statistics and more.
 * To use our APIs, You need to register an account on NFTScan open platform OpenAPI Platform({@link https://developer.nftscan.com/})
 * and get your API key for NFTScan API SDK initialize config.
 */
var NftscanEvm = /** @class */ (function (_super) {
    __extends(NftscanEvm, _super);
    function NftscanEvm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NftscanEvm.prototype, "asset", {
        /**
         * The `asset` object contains methods for NFTScan's EVM-like chain asset API.
         */
        get: function () {
            return new NftscanEvmAsset(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanEvm.prototype, "transaction", {
        /**
         * The `transaction` object contains methods for NFTScan's EVM-like chain transaction API.
         */
        get: function () {
            return new NftscanEvmTransaction(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanEvm.prototype, "collection", {
        /**
         * The `collection` object contains methods for NFTScan's EVM-like chain collection API.
         */
        get: function () {
            return new NftscanEvmCollection(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanEvm.prototype, "statistic", {
        /**
         * The `statistic` object contains methods for NFTScan's EVM-like chain statistic API.
         */
        get: function () {
            return new NftscanEvmStatistic(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanEvm.prototype, "refresh", {
        /**
         * The `refresh` object contains NFTScan's EVM-like chain refresh metadata API.
         */
        get: function () {
            return new NftscanEvmRefresh(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanEvm.prototype, "other", {
        /**
         * The `other` object contains NFTScan's EVM-like chain useful extension methods.
         */
        get: function () {
            return new NftscanEvmOther(this.config);
        },
        enumerable: false,
        configurable: true
    });
    return NftscanEvm;
}(BaseApi));

/**
 * Asset related API
 */
var NftscanSolanaAsset = /** @class */ (function (_super) {
    __extends(NftscanSolanaAsset, _super);
    function NftscanSolanaAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get NFTs by account
     * - This endpoint returns a set of NFTs owned by an account address.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param params The query params {@link AssetParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanSolanaAsset.prototype.getAssetsByAccount = function (accountAddress, params) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.assets.getAssetsByAccount).concat(accountAddress), params);
    };
    /**
     * Get all NFTs by account
     * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to collection.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-all-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param showAttribute Whether to obtain attributes for the assets
     * @returns Promise<Array<{@link QueryAllAssetsResponse}>>
     */
    NftscanSolanaAsset.prototype.getAllAssets = function (accountAddress, showAttribute) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.assets.getAllAssets).concat(accountAddress), { show_attribute: !!showAttribute });
    };
    /**
     * Get minted NFTs by account
     * - This endpoint returns a set of NFTs minted by an account address.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-minted-nfts-by-account}
     * @param accountAddress The address of the owner of the assets
     * @param params The query params {@link AssetParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanSolanaAsset.prototype.getAccountMinted = function (accountAddress, params) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.assets.getAccountMinted).concat(accountAddress), params);
    };
    /**
     * Get NFTs by collection
     * - This endpoint returns a set of NFTs that belong to an NFT collection. The NFTs are sorted by token address with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-nfts-by-collection}
     * @param collection The NFT collection for the assets
     * @param params The query params {@link QueryAssetsByCollectionParams}
     * @returns Promise<{@link CommonAssetResponse}>
     */
    NftscanSolanaAsset.prototype.getAssetsByCollection = function (collection, params) {
        if (isEmpty(collection)) {
            return missingParamError('collection');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 1000) {
                return invalidLimitError(1000);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.assets.getAssetsByCollection).concat(collection), params);
    };
    /**
     * Get single NFT
     * - This endpoint returns a single NFT.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-single-nft}
     * @param tokenAddress The NFT token address for the assets
     * @param showAttribute Whether to obtain attributes for the assets
     * @returns Promise<{@link Asset}>
     */
    NftscanSolanaAsset.prototype.getAssetsByTokenAddress = function (tokenAddress, showAttribute) {
        if (isEmpty(tokenAddress)) {
            return missingParamError('tokenAddress');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.assets.getAssetsByTokenAddress).concat(tokenAddress), { show_attribute: !!showAttribute });
    };
    /**
     * Get multiple NFTs
     * - This endpoint returns a single NFT.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-single-nft}
     * @param list List of token address. Maximum size is 50.
     * @param showAttribute Whether to obtain attributes for the assets
     * @returns Promise<{@link Asset}>
     */
    NftscanSolanaAsset.prototype.queryAssetsInBatches = function (list, showAttribute) {
        if (isEmpty(list)) {
            return missingParamError('list');
        }
        if (list.length > 50) {
            return invalidParamError('list', 'Maximum size is 50');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.assets.queryAssetsInBatches), {
            show_attribute: !!showAttribute,
            token_address_list: list,
        });
    };
    return NftscanSolanaAsset;
}(BaseApi));

/**
 * Collection related API
 */
var NftscanSolanaCollection = /** @class */ (function (_super) {
    __extends(NftscanSolanaCollection, _super);
    function NftscanSolanaCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get an NFT collection.
     * - This endpoint returns information for a collection with the given NFT.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-an-nft-collection}
     * @param collection The NFT collection for the assets
     * @returns Promise<{@link Collection}>
     */
    NftscanSolanaCollection.prototype.getCollection = function (collection) {
        if (isEmpty(collection)) {
            return missingParamError('collection');
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.collection.getCollection).concat(collection));
    };
    /**
     * Search NFT collections.
     * - This endpoint returns information for a list of collections by applying search filters in the request body. The collections are sorted by create_block_number with ascending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/search-nft-collections}
     * @param params The query params {@link QueryCollectionsByFiltersParams}
     * @returns Promise<Array<{@link Collection}>>
     */
    NftscanSolanaCollection.prototype.queryCollectionsByFilters = function (params) {
        if (params) {
            var limit = params.limit, collection = params.collection;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
            if (collection && collection.length > 50) {
                return invalidParamError('collection', 'Maximum size is 50');
            }
        }
        return nftscanPost(this.config, "".concat(NftscanConst.API.solana.collection.queryCollectionsByFilters), params);
    };
    return NftscanSolanaCollection;
}(BaseApi));

/**
 * The refresh metadata API
 */
var NftscanSolanaRefresh = /** @class */ (function (_super) {
    __extends(NftscanSolanaRefresh, _super);
    function NftscanSolanaRefresh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Refresh NFT metadata
     * - This endpoint enables you to submit a background task. The task will refresh the metadata of a specified NFT asset.
     * - details: {@link https://docs.nftscan.com/reference/solana/refresh-nft-metadata}
     * @param tokenAddress The token address of the NFT
     * @returns Promise<{@link RefreshMetadataResponse}>
     */
    NftscanSolanaRefresh.prototype.refreshAsset = function (tokenAddress) {
        if (isEmpty(tokenAddress)) {
            return missingParamError('tokenAddress');
        }
        return nftscanPost(this.config, "".concat(NftscanConst.API.solana.refresh.refreshAsset), {
            token_address: tokenAddress,
        });
    };
    return NftscanSolanaRefresh;
}(BaseApi));

/**
 * Statistic related API
 */
var NftscanSolanaStatistic = /** @class */ (function (_super) {
    __extends(NftscanSolanaStatistic, _super);
    function NftscanSolanaStatistic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Trade ranking
     * - This endpoint returns NFT trade ranking statistics referring to NFTScan Ranking({@link https://solana.nftscan.com/analytics/ranking})
     * - details: {@link https://docs.nftscan.com/reference/solana/trade-ranking}
     * @param params The query params {@link QueryTradeRankingParams}
     * @returns Promise<Array<{@link QueryTradeRankingResponse}>>
     */
    NftscanSolanaStatistic.prototype.getTradeRanking = function (params) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.statistic.getTradeRanking), params);
    };
    /**
     * Collection Statistics
     * - This endpoint returns statistics for a collection referring to NFTScan Collection({@link https://solana.nftscan.com/Okay%20Bears})
     * - details: {@link https://docs.nftscan.com/reference/solana/collection-statistics}
     * @param collection The NFT collection for the assets
     * @returns Promise<Array<{@link QueryCollectionStatisticsResponse}>>
     */
    NftscanSolanaStatistic.prototype.getCollectionStatistics = function (collection) {
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.statistic.getCollectionStatistics).concat(collection));
    };
    return NftscanSolanaStatistic;
}(BaseApi));

/**
 * Transaction related API
 */
var NftscanSolanaTransaction = /** @class */ (function (_super) {
    __extends(NftscanSolanaTransaction, _super);
    function NftscanSolanaTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transactions by account
     * - This endpoint returns a list of NFT transactions for an account address. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-transactions-by-account}
     * @param accountAddress The account address
     * @param params The query params {@link TransactionParams}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    NftscanSolanaTransaction.prototype.getTransactionsByAccount = function (accountAddress, params) {
        if (isEmpty(accountAddress)) {
            return missingParamError('accountAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.transaction.getTransactionsByAccount).concat(accountAddress), params);
    };
    /**
     * Get transactions by collection
     * - This endpoint returns a list of NFT transactions for an NFT collection. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-transactions-by-collection}
     * @param collection The NFT collection for the assets
     * @param params The query params {@link BaseNsPaginationReqParam}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    NftscanSolanaTransaction.prototype.getTransactionsByCollection = function (collection, params) {
        if (isEmpty(collection)) {
            return missingParamError('collection');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.transaction.getTransactionsByCollection).concat(collection), params);
    };
    /**
     * Get transactions by NFT
     * - This endpoint returns a list of NFT transactions for a single NFT. The transactions are sorted by timestamp with descending direction.
     * - details: {@link https://docs.nftscan.com/reference/solana/get-transactions-by-nft}
     * @param tokenAddress The NFT token address
     * @param params The query params {@link BaseNsPaginationReqParam}
     * @returns Promise<{@link CommonTransactionResponse}>
     */
    NftscanSolanaTransaction.prototype.getTransactionsByTokenAddress = function (tokenAddress, params) {
        if (isEmpty(tokenAddress)) {
            return missingParamError('tokenAddress');
        }
        if (params) {
            var limit = params.limit;
            if (limit && limit > 100) {
                return invalidLimitError(100);
            }
        }
        return nftscanGet(this.config, "".concat(NftscanConst.API.solana.transaction.getTransactionsByTokenAddress).concat(tokenAddress), params);
    };
    return NftscanSolanaTransaction;
}(BaseApi));

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
var NftscanSolana = /** @class */ (function (_super) {
    __extends(NftscanSolana, _super);
    function NftscanSolana(config) {
        return _super.call(this, { apiKey: config.apiKey, chain: 'solana' }) || this;
    }
    Object.defineProperty(NftscanSolana.prototype, "asset", {
        /**
         * The `asset` object contains methods for NFTScan's Solana asset API.
         */
        get: function () {
            return new NftscanSolanaAsset(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanSolana.prototype, "transaction", {
        /**
         * The `transaction` object contains methods for NFTScan's Solana transaction API.
         */
        get: function () {
            return new NftscanSolanaTransaction(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanSolana.prototype, "collection", {
        /**
         * The `collection` object contains methods for NFTScan's Solana collection API.
         */
        get: function () {
            return new NftscanSolanaCollection(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanSolana.prototype, "statistic", {
        /**
         * The `statistic` object contains methods for NFTScan's Solana statistic API.
         */
        get: function () {
            return new NftscanSolanaStatistic(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftscanSolana.prototype, "refresh", {
        /**
         * The `refresh` object contains methods for NFTScan's Solana refresh metadata API.
         */
        get: function () {
            return new NftscanSolanaRefresh(this.config);
        },
        enumerable: false,
        configurable: true
    });
    return NftscanSolana;
}(BaseApi));

var NftscanInit = /** @class */ (function () {
    function NftscanInit() {
    }
    NftscanInit.onCreate = function () {
        if (this.created) {
            return;
        }
        this.created = true;
        initHttpConfig();
    };
    NftscanInit.created = false;
    return NftscanInit;
}());

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index = /*#__PURE__*/Object.freeze({
    __proto__: null
});

NftscanInit.onCreate();

export { ErcType, EventType, EvmChain, index$1 as EvmType, NftscanEvm, NftscanSolana, NsError, RangeType, index as SolanaType, SortDirection, TradeType };
//# sourceMappingURL=index.js.map
