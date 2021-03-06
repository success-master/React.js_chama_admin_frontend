import "./app/main/dashboard/component/css/bootstrap.min.css";
import "./app/main/dashboard/component/shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import 'babel-polyfill'
import 'typeface-muli';
import './react-table-defaults';
import './styles/index.css';
import './styles/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from 'app/App';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
