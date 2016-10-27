import * as types from '../actions/action-types';

const initialState = {
    users: []
};

const userReducer = function(state = initialState, action) {

    switch(action.type) {
        case types.GET_USERS_SUCCESS:
            return Object.assign({}, state, { users: action.users });
    }

    return state;

};

export default userReducer;