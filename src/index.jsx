import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import App from './pages/app/app';
import React from "react";

import './style/style.scss';

ReactDOM.render(<App />, document.getElementById('root'));
