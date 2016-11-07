import React from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends React.Component {
    render() {
        let restaurants = [];
        if (this.props.restaurants) {
            restaurants = this.props.restaurants.map(restaurant =>
                <Restaurant key={restaurant._id} restaurant={restaurant} />
            );
        }
        return (
            <div>
                <h2>Restaurants</h2>
                <div className="list-group">
                    {restaurants}
                </div>
            </div>
        )
    }
}

export default RestaurantList;