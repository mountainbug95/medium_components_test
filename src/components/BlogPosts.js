import React, { Component } from 'react';

import '../../static/assets/css/blog-posts.scss';

class BlogPosts extends Component {

    singlePost(post) {
        return (
            <div>
                <div><img src={post.thumbnail}/></div>
                <div>
                    <div><a href={post.href}>{post.title}</a></div>
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