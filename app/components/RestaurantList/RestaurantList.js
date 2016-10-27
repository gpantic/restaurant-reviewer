import React from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends React.Component {
    isActive(id) {
        return this.props.selected && this.props.selected._id === id;
    }
    render() {
        let restaurants = this.props.restaurants.map(restaurant =>
            <Restaurant key={restaurant._id} restaurant={restaurant} isActive={this.isActive(restaurant._id)}></Restaurant>
        );
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