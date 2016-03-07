/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';

import React from 'react';
import StockStore from './StockStore';

export default class StockFooter extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {count: 0};

    }

    componentDidMount() {
        StockStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        StockStore.removeChangeListener(this.onChange);
    }

    onChange() {
        var count = Object.keys(StockStore.getAll()).length;
        this.setState({count: count});
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">Number of stocks in list: {this.state.count}</div>
            </div>
        )
    }
}
