import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import Single from './components/Single';

// import PhotoGrid from './components/PhotoGrid';
// import Single from './components/Single';
// import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import store from './store/store';
import { BrowserRouter, Route, Switch } from "react-router-dom"
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render (
  
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>    
            <Route exact path="/view/:id" component={Single}></Route>
        </Switch>
    </BrowserRouter>
</Provider>
  
  , document.getElementById('root')
);

