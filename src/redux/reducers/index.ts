import { combineReducers } from 'redux';
import bookReducer from './Book';

const RootReducer = combineReducers({
    book: bookReducer,
});

export default RootReducer;
