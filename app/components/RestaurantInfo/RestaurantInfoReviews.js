import React from 'react';

class RestaurantInfoReviews extends React.Component {
    render() {
        if (this.props.reviews) {
            return (
                <div>
                    <strong>Reviews</strong>
                    <ul className="list-group">
                        {this.props.reviews.map(review => (
                            <li key={review._id} className="list-group-item">
                                <span className="badge">{review.stars}</span>
                                <strong>{review.username}</strong>
                                <p>{review.text}</p>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-success btn-sm">Add review</button>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default RestaurantInfoReviews;
