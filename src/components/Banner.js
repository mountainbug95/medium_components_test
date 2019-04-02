
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../static/assets/css/banner.scss';


class Banner extends Component {

    bannerItem(item) {
        return (
            <div className="item">
                <div><img src={item.image}/></div>
                <h3>{item.title} <span>{item.subtitle}</span></h3>
            </div>
        )
    }

    render() {
        const {title, items} = this.props;
        return (
            <div className="banner">
                <div className="container">
                    <h2>{title}</h2>
                    <div className="items">
                        {items.map(item => this.bannerItem(item))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;