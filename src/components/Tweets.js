import React, { Component } from 'react';

class Tweets extends Component {
    render() {
        return (
            <div class="hero-tweets">
                {
                    this.props.heading ?
                    <>
                    <h2>{this.props.heading}</h2>
                    <hr  class="underline" /></>
                    : null
                }
                {
                    this.props.tweetImage ?
                    <img src={require("../assets/images/tweet-placeholder.png")} class="tweet-image" alt="What People are saying." />
                    : null
                }
            </div>
        );
    }
}

export default Tweets;