import React, { Component } from 'react';
import '../../static/assets/css/form.css';

class BetaSignUp extends Component {
    render() {
        return (
            <div className="contact">
                <section className="container">
                    <h1>Join the Beta Waitlist</h1>
                    <form data-netlify="true" netlify-honeypot="bot-field" name="beta" action="/thank-you" id="contact-form" role="form">
                        <input type="email" tabindex="1" name="_replyto" placeholder="Email Address" required/>
                        <button className="btn-primary knockout" tabindex="2" type="submit" name="submit">Sign Me Up</button>
                        <input type="hidden" className="hidden" name="bot-field"/>
                        <input type="hidden" name="form-name" value="beta"/>
                    </form>
            
            
                    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input name="replyto" placeholder="Email Address" type="email" />
                    </form>
            
                </section>
            </div>
        )
    }
}

export default BetaSignUp;