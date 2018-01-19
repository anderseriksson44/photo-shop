import { createStore, compose, applyMiddleware } from 'redux';
// import { syncHistoryWithStore} from 'react-router-redux';
// import { browserHistory } from 'react-router';
import thunk from "redux-thunk";

// import the root reducer
import rootReducer from '../reducers/rootreducer';


//import data
// import comments from '../data/comments';
import posts from '../data/poster';

// create an object for the default data
const defaultState = {
  posts

};


const store = createStore(
    rootReducer, 
    defaultState,
    compose( 
        applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

// export const history = syncHistoryWithStore(
//     browserHistory, 
//     store
//     );

export default store;