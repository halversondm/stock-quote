/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';
import React from 'react';
import $ from 'jquery/dist/jquery.js';
import StockActions from './StockActions';
const baseURL = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?jsoncallback=JSON_CALLBACK&symbol=';

export default class StockEntry extends React.Component {
    constructor() {
        super();
        this.handleNewSymbol = this.handleNewSymbol.bind(this);
    }

    handleNewSymbol(event) {
        if (event.target.value === null || event.target.value.length <= 0) {
            return;
        }
        console.log(event.target.value);
        var url = baseURL + event.target.value.trim();
        $.ajax({
            url: url,
            dataType: 'jsonp'
        })
            .done(function (data) {
                console.info("success", data);
                StockActions.create(data.Symbol, data.Name, data.LastPrice);
            }.bind(this))
            .fail(function (response) {
                console.log(response);
            }.bind(this));
    }

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-brand">{this.props.name}</div>
                    <form className="navbar-form navbar-left">
                        <div id="form-group">
                            <input type="text" className="form-control" placeholder="Search ..."
                                   onBlur={this.handleNewSymbol}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

StockEntry.propTypes = {
    name: React.PropTypes.string.isRequired
};

StockEntry.defaultProps = {
    name: ''
};