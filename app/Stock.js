/**
 * Created by Daniel on 3/13/2016.
 */

import React from 'react';
import StockActions from './StockActions';

export default class Stock extends React.Component {

    constructor() {
        super();
        this.deleteStock = this.deleteStock.bind(this);
    }

    deleteStock(event) {
        StockActions.destroy(this.props.stock.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stock.stockSymbol}</td>

                <td>{this.props.stock.stockName}</td>

                <td>{this.props.stock.stockPrice}</td>
                <td>{this.props.stock.stockOpen}</td>
                <td>{this.props.stock.stockHigh}</td>
                <td>{this.props.stock.stockLow}</td>
                <td>{this.props.stock.stockVolume}</td>
                <td>
                    <button className="glyphicon glyphicon-trash" onClick={this.deleteStock}></button>
                </td>
            </tr>

        );
    }
}

Stock.propTypes = {
    stock: React.PropTypes.object
};

Stock.defaultProps = {
    stock: {
        id: '',
        stockSymbol: '',
        stockName: '',
        stockPrice: '',
        stockOpen: '',
        stockHigh: '',
        stockLow: '',
        stockVolume: ''
    }
};