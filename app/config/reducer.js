import * as types from '../actions/action-types';

const initialState = {
    restaurants: [],
    restaurantId: null,
    activeUser: {}
};

const reducer = function(state = initialState, action) {

    switch(action.type) {
        case types.GET_RESTAURANTS_SUCCESS:
            return Object.assign({}, state, {restaurants: action.restaurants});

        case types.SET_SELECTED_RESTAURANT:
            return Object.assign({}, state, {restaurantId: action.id});

        case types.SET_ACTIVE_USER:
            return Object.assign({}, state, {activeUser: action.activeUser});
    }
    return state;
};

export default reducer;