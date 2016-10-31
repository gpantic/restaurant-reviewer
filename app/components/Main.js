import React from 'react';
import RestaurantList from './RestaurantList/RestaurantList';
import {connect} from 'react-redux';
import {getRestaurantsList} from '../actions/actions';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: props.params.id || null
        };
    }
    componentDidMount() {
        this.props.getRestaurants();
    }
    componentWillReceiveProps(props) {
        this.setState({
            selectedId: props.params.id || null
        });
    }
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <RestaurantList restaurants={this.props.restaurants} selectedId={this.state.selectedId} />
                        </div>
                        <div className="col-md-9">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        restaurants: state.restaurants
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        getRestaurants: function () {
            getRestaurantsList(dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);