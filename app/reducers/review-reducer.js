import * as types from '../actions/action-types';

const initialState = {
    reviews: []
};

const reviewReducer = function(state = initialState, action) {

    switch(action.type) {
        case types.GET_REVIEWS_SUCCESS:
            return Object.assign({}, state, { reviews: action.reviews });

        case types.ADD_REVIEW_SUCCESS:
            return Object.assign({}, state, { reviews: action.review });

        case types.PUT_REVIEW_SUCCESS:
            return Object.assign({}, state, { reviews: action.review });

        case types.DELETE_REVIEW_SUCCESS:

            const newReviews = _.filter(state.reviews, review => review.id != action.id);
            return Object.assign({}, state, { reviews: newReviews });
    }

    return state;

};

export default reviewReducer;