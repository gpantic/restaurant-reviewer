import * as types from './action-types';
import RestaurantService from '../services/RestaurantService.js';
import UserService from '../services/UserService.js';
import ReviewService from '../services/ReviewService.js';

/* Restaurant actions */
export function getRestaurantsList(dispatch) {
    Promise.all([
        RestaurantService.get(),
        ReviewService.get(),
        UserService.get()
    ]).then(data => {
        let restaurants = data[0].map(restaurant => {
            let reviews = [];
            data[1].forEach(review => {
                for (let i = 0; i < data[2].length; i++) {
                    if (review.user === data[2][i]._id) {
                        review.username = data[2][i].name;
                        break;
                    }
                }
                if (review.restaurant === restaurant._id) {
                    reviews.push(review);
                }
            });
            restaurant.reviews = reviews;
            return restaurant;
        });
        dispatch({
            type: types.GET_RESTAURANTS_SUCCESS,
            restaurants
        });
    });
}

export function getRestaurantById(dispatch, id) {
    dispatch({
        type: types.SET_SELECTED_RESTAURANT,
        id
    });
}

/* Review actions */
export function updateReview(dispatch, review, id) {
    if (id) {
        ReviewService.put(review, id).then(() => {
            getRestaurantsList(dispatch);
        });
    } else {
        ReviewService.post(review, id).then(() => {
            getRestaurantsList(dispatch);
        });
    }
}

export function deleteReviewById(dispatch, id) {
    ReviewService.delete(id).then(() => {
        dispatch({
            type: types.DELETE_REVIEW_SUCCESS,
            id
        });
        getRestaurantsList(dispatch);
    });
}

/* User actions */
export function getActiveUser(dispatch) {
    UserService.get().then(users => {
        let activeUser = users[0];
        dispatch({
            type: types.SET_ACTIVE_USER,
            activeUser
        });
    });
}