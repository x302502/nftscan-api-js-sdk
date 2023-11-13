export default class NftscanConst {
    /**
     * NFTScan's API base url
     */
    static readonly BASE_URL: {
        eth: string;
        bnb: string;
        arbitrum: string;
        moonbeam: string;
        polygon: string;
        optimism: string;
        platon: string;
        solana: string;
        avalanche: string;
        cronos: string;
        fantom: string;
        gnosis: string;
        zksync: string;
        linea: string;
        base: string;
        scroll: string;
    };
    /**
     * NFTScan's API url
     */
    static readonly API: {
        evm: {
            assets: {
                getAssetsByAccount: string;
                getAllAssets: string;
                getAccountMinted: string;
                getAssets: string;
                getMultiChainAssets: string;
                queryAssetsInBatches: string;
                queryAssetsByFilters: string;
                queryAssetsByAttributes: string;
            };
            transaction: {
                getTransactionsByAccount: string;
                getTransactions: string;
                getTransactionsByToAddress: string;
                queryTransactionsByFilters: string;
                queryTransactionsByTxHashList: string;
            };
            collection: {
                getCollectionsByContract: string;
                getCollectionsByRanking: string;
                queryCollectionsByFilters: string;
                queryCollectionsByAccountAddress: string;
            };
            statistic: {
                getTradeRanking: string;
                getCollectionRanking: string;
                getCollectionTrade: string;
                getCollectionTrending: string;
                getCollectionTopHolder: string;
                getAccountOverview: string;
                getBlueChipStatistics: string;
                getMarketplaceRanking: string;
                getMarketCapRanking: string;
                getCollectionStatistics: string;
                getMintRanking: string;
                getMintAmount: string;
                getTradersRanking: string;
                getGasRanking: string;
                getCollectionOverview: string;
                getWalletRanking: string;
                getTradeWalletRanking: string;
                getCollectionHoldingAmountDistribution: string;
                getCollectionHoldingPeriodDistribution: string;
                getCollectionBlueChipList: string;
                getAccountHoldingDistribution: string;
            };
            refresh: {
                refreshAsset: string;
                refreshContract: string;
            };
            other: {
                getBlockNumber: string;
                queryAssestAmountByAccounts: string;
                getAssetOwnerByContract: string;
                getAssetOwnerByContractAndTokenId: string;
            };
        };
        solana: {
            assets: {
                getAssetsByAccount: string;
                getAllAssets: string;
                getAccountMinted: string;
                getAssetsByCollection: string;
                getAssetsByTokenAddress: string;
                queryAssetsInBatches: string;
            };
            transaction: {
                getTransactionsByAccount: string;
                getTransactionsByCollection: string;
                getTransactionsByTokenAddress: string;
            };
            collection: {
                getCollection: string;
                queryCollectionsByFilters: string;
            };
            statistic: {
                getTradeRanking: string;
                getCollectionStatistics: string;
            };
            refresh: {
                refreshAsset: string;
            };
        };
    };
}
