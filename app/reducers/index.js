import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import restaurantReducer from './restaurant-reducer';
import reviewReducer from './review-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    restaurantState: restaurantReducer,
    reviewState: reviewReducer
});

export default reducers;