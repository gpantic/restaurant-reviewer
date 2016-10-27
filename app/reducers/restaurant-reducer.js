import * as types from '../actions/action-types';

const initialState = {
    restaurants: []
};

const restaurantReducer = function(state = initialState, action) {

    switch(action.type) {
        case types.GET_RESTAURANTS_SUCCESS:
            return Object.assign({}, state, { restaurants: action.restaurants });
    }

    return state;

};

export default restaurantReducer;