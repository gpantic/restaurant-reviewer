import React from 'react';
import {Link} from 'react-router';

class Restaurant extends React.Component {
    classNames () {
        return 'list-group-item' + (this.props.isActive ? ' active' : '');
    }
    averageRating(reviews) {
        let total = 0;
        reviews.forEach(review => {
            total += review.stars;
        });
        return total === 0 ? null : (total/reviews.length).toFixed(1);
    }
    render() {
        return (
            <Link to={'/' + this.props.restaurant._id} className={this.classNames()}>
                <span className="badge">{this.averageRating(this.props.restaurant.reviews)}</span>
                {this.props.restaurant.name}
            </Link>
        )
    }
}

export default Restaurant;