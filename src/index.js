import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/app';
import 'typeface-roboto'; // se importa la fuente de Material-UI
import './css/index.scss'; // css general
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
