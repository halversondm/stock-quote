/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';

import React from 'react';
import StockEntry from './StockEntry';
import StockList from './StockList';

export default class StockQuote extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <StockEntry name="StockQuote"/>
                <StockList />
            </div>
        );
    }
}