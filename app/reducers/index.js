import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import restaurantReducer from '../config/restaurant-reducer';
import reviewReducer from './review-reducer';

// Combine Reducers
var reducers = combineReducers({
    user: userReducer,
    restaurant: restaurantReducer,
    review: reviewReducer
});

export default reducers;