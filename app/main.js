'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import StockQuote from './StockQuote.js';
import $ from 'jquery/dist/jquery.js';
import bootstrapCSS from 'bootstrap/dist/css/bootstrap.css';
import bootstrapJS from 'bootstrap/dist/js/bootstrap.js';
import styles from './app.css';

let initialList = ["MSFT", "AAPL", "JPM", "AMZN", "T", "F"];

ReactDOM.render(<StockQuote stockSymbols={initialList}/>, document.getElementById('root'));
