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
        this.deleteStock = this.deleteStock.bind(this);
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

    deleteStock(event) {
        console.info(event);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-1"><h4>Symbol</h4></div>
                    <div className="col-sm-3"><h4>Name</h4></div>
                    <div className="col-sm-1"><h4>Price</h4></div>
                    <div className="col-sm-1"><h4>Open</h4></div>
                    <div className="col-sm-1"><h4>High</h4></div>
                    <div className="col-sm-1"><h4>Low</h4></div>
                    <div className="col-sm-1"><h4>Volume</h4></div>
                </div>

                {Object.keys(this.state.stocks).map(function (stockKey) {
                        var stock = this.state.stocks[stockKey];
                        return (
                            <div className="row" key={stockKey}>
                                <div className="col-sm-1">{stock.stockSymbol}</div>

                                <div className="col-sm-3">{stock.stockName}</div>

                                <div className="col-sm-1">{stock.stockPrice}</div>
                                <div className="col-sm-1">{stock.stockOpen}</div>
                                <div className="col-sm-1">{stock.stockHigh}</div>
                                <div className="col-sm-1">{stock.stockLow}</div>
                                <div className="col-sm-1">{stock.stockVolume}</div>
                                <div className="col-sm-1">
                                    <button className="glyphicon glyphicon-trash" onClick={this.deleteStock}></button>
                                </div>
                                <hr/>
                            </div>
                        )
                    }.bind(this)
                )}
            </div>
        );
    }
}

