import React from 'react';
import {connect} from 'react-redux';
import RestaurantInfoReviews from './RestaurantInfoReviews';
import {getRestaurantById, getActiveUser} from '../../actions/actions';

class RestaurantInfo extends React.Component {
    componentDidMount() {
        let id = this.props.params.id;
        this.props.getRestaurant(id);
        this.props.getActiveUser();
    }
    componentWillReceiveProps(props) {
        this.props.getRestaurant(props.params.id);
    }
    render() {
        if (!this.props.restaurant) {
            return null;
        }
        return (
            <div>
                <h2>Restaurant Info</h2>
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.restaurant.name}</div>
                    <div className="panel-body">
                        {this.props.restaurant.description &&
                            <p>{this.props.restaurant.description}</p>
                        }
                        <RestaurantInfoReviews
                            reviews={this.props.restaurant.reviews}
                            restaurantId={this.props.restaurant._id}
                            userId={this.props.user._id} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    let selectedRestaurant = state.restaurants.reduce((found, restaurant) => {
        return found !== null ? found : restaurant._id === state.restaurantId ? restaurant : null;
    }, null);
    return {
        restaurant: selectedRestaurant,
        user: state.activeUser
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        getRestaurant: function (id) {
            getRestaurantById(dispatch, id);
        },
        getActiveUser: function() {
            getActiveUser(dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfo);
