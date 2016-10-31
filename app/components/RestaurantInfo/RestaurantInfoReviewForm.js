import React from 'react';
import {connect} from 'react-redux';
import {updateReview} from '../../actions/actions';

class RestaurantInfoReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: {
                date: props.review && props.review.date ? props.review.date : new Date(),
                stars: props.review && props.review.stars || 5,
                text: props.review && props.review.text || '',
                restaurant: props.restaurant || null,
                user: props.userId || null
            }
        };
    }
    save(review) {
        if (this.props.review) {
            this.props.saveReview(review, this.props.review._id);
        } else {
            this.props.saveReview(review);
        }
        this.props.cancel();
    }
    textChanged(event) {
        let value = event.target.value;
        this.setState(stateObj => {
            stateObj.review.text = value;
        });
    }
    starsChanged(event) {
        let value = event.target.value;
        this.setState(stateObj => {
            stateObj.review.stars = parseInt(value);
        });
    }
    render() {
        let starsOptions = [];
        for (let i = 1; i <= 5; i++) {
            starsOptions.push(<option key={i} value={i}>{i}</option>);
        }
        return (
            <form>
                <div className="form-group row">
                    <div className="col-md-10">
                        <textarea className="form-control" value={this.state.review.text} onChange={this.textChanged.bind(this)} rows="4" style={{'resize': 'none'}} />
                    </div>
                    <div className="col-md-2">
                        <select className="form-control" value={this.state.review.stars} onChange={this.starsChanged.bind(this)}>{starsOptions}</select>
                    </div>
                </div>
                <div className="clearfix">
                    <button className="btn btn-success btn-xs col-xs-2" onClick={this.save.bind(this, this.state.review)}>Save</button>
                    <button className="btn btn-warning btn-xs col-xs-2 pull-right" onClick={this.props.cancel}>Cancel</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        saveReview: function (review, id) {
            updateReview(dispatch, review, id);
        }
    };
};

export default connect(null, mapDispatchToProps)(RestaurantInfoReviewForm);