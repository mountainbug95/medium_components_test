import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../../static/assets/css/single-column-layout.scss';
import '../../static/assets/css/blog-post-layout.scss';

class BlogPostLayout extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="blog-post single-column">
                <Header 
                    {...this.props.header} 
                    backgroundImage={"images/detail-bg.jpg"}
                />
                <div className="container s-page">
                    <h1>{title}</h1>
                    {this.props.children}
                </div>
                <Footer {...this.props.footer}/>
            </div>
        )
    }
}

export default BlogPostLayout;