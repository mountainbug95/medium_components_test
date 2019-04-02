import _ from 'lodash';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import COMPONENTS from '../index';


import '../../static/assets/css/main.scss';

export default class Page extends React.Component {

    render() {
        const {template, sections} = this.props.pageContext.frontmatter;
        const Layout = COMPONENTS[template];

        let layoutProps = {};
        Object.keys(this.props.pageContext.frontmatter).forEach((field) => {
            const prop = this.props.pageContext.frontmatter[field];
            if (prop.component) {
                const Component = COMPONENTS[prop.component];
                layoutProps[field] = <Component {...prop}/>;
            } else {
                // layoutProps[field] = prop;
            }
        });

        console.log(layoutProps)

        const children = (sections || []).map((section) => {
            const Component = COMPONENTS[section.component];
            return <Component {...section}/>;
        });

        return (
            <Layout {...layoutProps}>
                {children}
                {ReactHtmlParser(_.get(this.props, 'pageContext.html'))}
            </Layout>
        );
    }
}
