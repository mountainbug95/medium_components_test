import React, { Component } from 'react';
import '../../static/assets/css/index.css';

class MediumLayout extends Component {
    render() {
        return (
            <div class="outer">
                {this.props.header}
                {this.props.hero}
                {this.props.features}
                {this.props.videoSection}
                {this.props.genericSection}
                {this.props.openFile}
                {this.props.footer}
            </div>
        )
    }
}

export default MediumLayout;