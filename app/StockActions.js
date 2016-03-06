/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';
var AppDispatcher = require('./AppDispatcher');
var StockConstants = require('./StockConstants');

var StockActions = {

    create: function (stockSymbol, stockName, stockPrice) {
        AppDispatcher.dispatch({
            actionType: StockConstants.STOCK_CREATE,
            stockSymbol: stockSymbol,
            stockName: stockName,
            stockPrice: stockPrice
        });
    },
    destroy: function (uiId) {
        AppDispatcher.dispatch({
            actionType: StockConstants.STOCK_DESTROY,
            uiId: uiId
        });
    }

};

module.exports = StockActions;
