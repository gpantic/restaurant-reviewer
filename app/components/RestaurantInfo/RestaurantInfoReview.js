import React from 'react';
import RestaurantInfoReviewForm from './RestaurantInfoReviewForm';
import {connect} from 'react-redux';
import {deleteReviewById} from '../../actions/actions';

class RestaurantInfoReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }
    editReview(flag) {
        this.setState({
            isEditing: flag
        });
    }
    deleteReview(id) {
        this.props.deleteReviewById(id);
    }
    render() {
        if (this.state.isEditing) {
            return (
                <li className="list-group-item">
                    <RestaurantInfoReviewForm review={this.props.review}
                                              cancel={this.editReview.bind(this, false)}
                                              restaurant={this.props.review.restaurant}
                                              userId={this.props.userId} />
                </li>
            )
        } else {
            return (
                <li className="list-group-item">
                    <span className="badge">{this.props.review.stars}</span>
                    <strong>{this.props.review.username}</strong>
                    <p>{this.props.review.text}</p>
                    {this.props.userId === this.props.review.user &&
                        <div className="clearfix">
                            <button className="btn btn-success btn-xs col-xs-2" onClick={this.editReview.bind(this, true)}>Edit</button>
                            <button className="btn btn-danger btn-xs col-xs-2 pull-right" onClick={this.deleteReview.bind(this, this.props.review._id)}>Delete</button>
                        </div>
                    }
                </li>
            )
        }
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        deleteReviewById: function (review) {
            deleteReviewById(dispatch, review);
        }
    };
};

export default connect(null, mapDispatchToProps)(RestaurantInfoReview);