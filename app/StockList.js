/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';
import React from 'react';
import StockStore from './StockStore';

export default class StockList extends React.Component {
    constructor() {
        super();
        this.state = {stocks: {initial: {stockSymbol: '', stockName: '', stockPrice: ''}}};
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        StockStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        StockStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({stocks: StockStore.getAll()});
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.stocks).map(function (stockKey) {
                        var stock = this.state.stocks[stockKey];
                        return (
                            <div key={stockKey}>
                                <p>Stock Symbol: {stock.stockSymbol}</p>

                                <p>Stock Name: {stock.stockName}</p>

                                <p>Stock Price: {stock.stockPrice}</p>
                                <hr/>
                            </div>
                        )
                    }.bind(this)
                )}
            </div>
        );
    }
}

