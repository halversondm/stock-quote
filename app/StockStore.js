/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';
var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var StockConstants = require('./StockConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

/**
 * The data store.
 */
var stocks = {};

/**
 * Create stock
 * @param data
 */
function create(data) {
    var uiId = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    stocks[uiId] = {
        stockSymbol: data.Symbol,
        stockName: data.Name,
        stockPrice: data.LastPrice,
        stockHigh: data.High,
        stockOpen: data.Open,
        stockLow: data.Low,
        stockVolume: data.Volume
    };
}

/**
 * Delete a stock
 * @param uiId
 */
function destroy(uiId) {
    delete stocks[uiId];
}

/**
 * Public API
 */
var StockStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return stocks;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case StockConstants.STOCK_CREATE:
            create(action.data);
            StockStore.emitChange();
            break;
        case StockConstants.STOCK_DESTROY:
            destroy(action.uiId);
            StockStore.emitChange();
            break;
        default:
            break;
    }
});

export default StockStore;
