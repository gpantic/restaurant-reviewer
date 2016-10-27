import React from 'react';
import RestaurantInfoReviews from './RestaurantInfoReviews';

class RestaurantInfo extends React.Component {
    render() {
        if (this.props.restaurant) {
            return (
                <div>
                    <h2>Restaurant Info</h2>
                    <div className="panel panel-default">
                        <div className="panel-heading">{this.props.restaurant.name}</div>
                        <div className="panel-body">
                            <p>{this.props.restaurant.description}</p>
                            <RestaurantInfoReviews reviews={this.props.restaurant.reviews}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default RestaurantInfo;
