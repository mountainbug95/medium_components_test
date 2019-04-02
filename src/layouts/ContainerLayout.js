import React, { Component } from 'react';

import '../../static/assets/css/single-column-layout.scss';

class SingleColumnLayout extends Component {
    render() {
        return (
            <div className="single-column">
                {this.props.header}
                {this.props.generic}
                <div className="container">
                    {this.props.children}
                </div>
                {this.props.footer}
            </div>
        )
    }
}

export default SingleColumnLayout;