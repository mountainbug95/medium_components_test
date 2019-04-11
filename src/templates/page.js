import _ from 'lodash';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../../static/assets/css/main.scss';

import COMPONENTS from '../index';




export default class Page extends React.Component {
    render() {
        const {site, frontmatter} = this.props.pageContext;
        const {template, sections} = frontmatter;

        const Layout = COMPONENTS[template];

        let layoutProps = {};
        Object.keys(this.props.pageContext.frontmatter).forEach((field) => {
            const prop = this.props.pageContext.frontmatter[field];
            if (prop.component) {
                const Component = COMPONENTS[prop.component];
                layoutProps[field] = <Component site={site} {...prop}/>;
            } else {
                // layoutProps[field] = prop;
            }
        });

        const children = (sections || []).map((section) => {
            const Component = COMPONENTS[section.component];
            return <Component site={site} {...section}/>;
        });

        return (
            <Layout {...layoutProps}>
                {children}
                {ReactHtmlParser(_.get(this.props, 'pageContext.html'))}
            </Layout>
        );
    }
}
