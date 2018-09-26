/**
 * Entrace Page
 * the visit request of user will go through this page 
 * and distribute to each router
 */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import '@/configs/theme'
import './index.css';
import App from './App';

/** for set title in every page*/
global.setTitle = (title)=>{
    document.title = title;
}

ReactDOM.render(<App/>,document.getElementById('root'));
registerServiceWorker();
