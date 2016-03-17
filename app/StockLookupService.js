/**
 * Created by Daniel on 3/16/2016.
 */
'use strict';

import $ from 'jquery/dist/jquery.js';
import StockActions from './StockActions';
const baseURL = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?jsoncallback=JSON_CALLBACK&symbol=';

class StockLookupService {

    constructor() {

    }

    static makeCall(stockSymbol) {
        var url = baseURL + stockSymbol.trim();
        $.ajax({
            url: url,
            dataType: 'jsonp'
        }).success(function (data) {
            console.info("success", data);
            StockActions.create(data);
        }.bind(this))
            .fail(function (response) {
                console.error(response);
            }.bind(this));
    }

}

export default StockLookupService;
