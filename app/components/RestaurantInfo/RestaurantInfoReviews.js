import React from 'react';
import RestaurantInfoReview from './RestaurantInfoReview';
import RestaurantInfoReviewForm from './RestaurantInfoReviewForm';

class RestaurantInfoReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editId: {},
            addActivated: false
        };
    }
    activateAdd(flag) {
        this.setState({
            addActivated: flag
        });
    }
    render() {
        return (
            <div>
                <h5><strong>Reviews</strong></h5>
                {this.props.reviews && this.props.reviews.length > 0 &&
                    <ul className="list-group">
                        {this.props.reviews.map(review =>
                            <RestaurantInfoReview key={review._id} review={review} userId={this.props.userId}/>
                        )}
                    </ul>
                }
                {!this.state.addActivated &&
                    (<button className="btn btn-success btn-sm" onClick={this.activateAdd.bind(this, true)}>Add review</button>)
                }
                {this.state.addActivated &&
                    <RestaurantInfoReviewForm cancel={this.activateAdd.bind(this, false)} restaurant={this.props.restaurantId} userId={this.props.userId} />
                }
            </div>
        )
    }
}

export default RestaurantInfoReviews;
