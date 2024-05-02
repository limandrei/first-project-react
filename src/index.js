import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes';

ReactDOM.render(
    <>
        <Routes/>
        <GlobalStyle/>
    </>,
    document.getElementById('root')
);