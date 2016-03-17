/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';
import React from 'react';
import StockStore from './StockStore';
import Stock from './Stock';
import StockLookupService from './StockLookupService';

export default class StockList extends React.Component {
    constructor() {
        super();
        this.state = {stocks: {initial: {stockSymbol: '', stockName: '', stockPrice: ''}}};
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        StockStore.addChangeListener(this.onChange);

        this.props.stockSymbols.forEach(function (stock) {
            StockLookupService.makeCall(stock);
        });
    }

    componentWillUnmount() {
        StockStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({stocks: StockStore.getAll()});
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Volume</th>
                </tr>
                </thead>

                <tbody>
                {Object.keys(this.state.stocks).map(function (stockKey) {
                        var stock = this.state.stocks[stockKey];
                        stock.id = stockKey;
                        return (
                            <Stock stock={stock} key={stockKey}/>
                        )
                    }.bind(this)
                )}
                </tbody>
            </table>
        );
    }
}

StockList.propTypes = {
    stockSymbols: React.PropTypes.array
};

StockList.defaultProps = {
    stockSymbols: []
};

