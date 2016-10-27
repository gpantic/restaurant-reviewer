import React from 'react';
import {Link} from 'react-router';

class Restaurant extends React.Component {
    classNames () {
        return 'list-group-item' + (this.props.isActive ? ' active' : '');
    }
    link (id) {
        return '/' + id;
    }
    render() {
        return (
            <Link to={this.link(this.props.restaurant._id)} className={this.classNames()}>
                <span className="badge">{this.props.restaurant.average()}</span>
                {this.props.restaurant.name}
            </Link>
        )
    }
}

export default Restaurant;