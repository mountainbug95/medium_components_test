import React, { Component } from 'react';
import { withPrefix } from 'gatsby';

import '../../static/assets/css/header.scss';

class Header extends Component {
    render() {
        const {navItems, actionItem, inversed, backgroundImage} = this.props;
        const inversedClassName = inversed ? 'inversed' : '';
        const arrowClassName = actionItem ? 'with-arrow' : '';
        const logoImage = inversed ? require('../../static/images/header/logo.svg')
                                   : require('../../static/images/header/logo-white.svg');
        return (
            <header className={`header ${arrowClassName} ${inversedClassName}`}>
                {backgroundImage ? <img className="background-image" src={withPrefix(backgroundImage)}/> : null}
                <div className="container full-width">
                    <nav>
                        <a href="/" className="stackbit-logo"><img src={logoImage} height="24" width="157" alt="Stackbit"/></a>
                        {(navItems || []).map(item => <a className="text-link" href={item.href}>{item.title}</a>)}
                        {actionItem ? (
                            <a href={actionItem.href} className={`text-link with-arrow ${inversedClassName}`}>{actionItem.title}</a>
                        ) : null}
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;