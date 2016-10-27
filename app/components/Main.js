import React from 'react';
import RestaurantList from './RestaurantList/RestaurantList';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import RestaurantService from '../services/RestaurantService';
import ReviewService from '../services/ReviewService';
import UserService from '../services/UserService';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            selected: {},
            user: {}
        };
    }
    componentDidMount() {
        Promise.all([
            RestaurantService.get(),
            ReviewService.get(),
            UserService.get()
        ]).then(data => {
            let restaurants = data[0].map(restaurant => {
                let reviews = [];
                data[1].forEach(review => {
                    if (review.restaurant === restaurant._id) {
                        for (let i = 0; i < data[2].length; i++) {
                            if (review.user === data[2][i]._id) {
                                review.username = data[2][i].name;
                                break;
                            }
                        }
                        reviews.push(review);
                    }
                });
                restaurant.reviews = reviews;
                restaurant.average = function () {
                    let total = 0;
                    this.reviews.forEach(review => {
                        total += review.stars;
                    });
                    return total === 0 ? null : (total/this.reviews.length).toFixed(1);
                };
                return restaurant;
            });
            let selected = null;
            if (this.props.params.id) {
                for (let i = 0; i < restaurants.length; i++) {
                    if (restaurants[i]._id === this.props.params.id) {
                        selected = restaurants[i];
                        break;
                    }
                }
            }

            this.setState({
                restaurants: restaurants,
                selected: selected,
                user: data[2][0]
            });
        });
    }
    componentWillReceiveProps(props) {
        if (props.params.id) {
            if (!this.state.selected || props.params.id !== this.state.selected._id) {
                for (let i = 0; i < this.state.restaurants.length; i++) {
                    if (this.state.restaurants[i]._id === props.params.id) {
                        this.state.selected = this.state.restaurants[i];
                        break;
                    }
                }
            }
        } else {
            this.state.selected = null;
        }
    }

    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <RestaurantList restaurants={this.state.restaurants} selected={this.state.selected}/>
                        </div>
                        <div className="col-md-8">
                            <RestaurantInfo restaurant={this.state.selected} user={this.state.user} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;