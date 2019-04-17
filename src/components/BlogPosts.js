import React, { Component } from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

import '../../static/assets/css/blog-posts.scss';

class BlogPosts extends Component {

    singlePost(post) {
        return (
            <div className="post-container">
                <div className="thumbnail-container">
                    <ResponsiveEmbed>
                        <img src={ require('../../static/images/blogs/thumbnails/' + post.thumbnail + '.png') } className="thumbnail" />
                    </ResponsiveEmbed>
                </div>
                <div className="post-info">
                    <div><a href={post.href}><h1>{post.title}</h1></a></div>
                    <div>{post.excerpt}</div>
                </div>
            </div>
        );
    }

    render() {
        const {posts} = this.props;
        return (
            <div className="blog-posts">
                {posts.map(this.singlePost)}
            </div>
        )
    }
}

export default BlogPosts;