/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';
var AppDispatcher = require('./AppDispatcher');
var StockConstants = require('./StockConstants');

var StockActions = {

    create: function (data) {
        AppDispatcher.dispatch({
            actionType: StockConstants.STOCK_CREATE,
            data: data
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
