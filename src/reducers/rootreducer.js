import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import the reducers
import posts from '../reducers/posts';
import comments from '../reducers/comments';
import purchase from "../reducers/purchase";
import user from "../reducers/user"


const rootReducer = combineReducers({posts, comments, purchase, user, routing:routerReducer});

export default rootReducer;


// routing: routerReducer