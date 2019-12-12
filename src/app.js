import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';

const jsx = (
    <AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));
