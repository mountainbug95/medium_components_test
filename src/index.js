import _ from 'lodash';
import React, { Component } from 'react';

import ContainerLayout from './layouts/ContainerLayout';
import SingleColumnLayout from './layouts/SingleColumnLayout';
import MediumLayout from './layouts/MediumLayout';
import BetaSignUp from './layouts/BetaSignUp';
import _Header from './components/Header';
import _Footer from './components/Footer';
import HeroPrimary from './components/HeroPrimary';
import StackItems from './components/StackItems';
import GenericSection from './components/GenericSection';
import Checklist from './components/CheckList';
import Features from './components/Features';
import Hero from './components/Hero';
import OpenFile from './components/OpenFile';
import Tweets from './components/Tweets';
import VideoSection from './components/VideoSection';
import TitleBlock from './components/TitleBlock';
import TwoColumnBlock from './components/TwoColumnBlock';
import Jobs from './components/Jobs';
import Banner from './components/Banner';

function withTransform(Component, transform) {
    return (props) => {
        return <Component {...transform(props)}/>
    }
}

const Footer = withTransform(_Footer, props => {
    return Object.assign(_.get(props, 'site.siteMetadata.footer', {}), props);
});

const Header = withTransform(_Header, props => {
    return Object.assign(_.get(props, 'site.siteMetadata.header', {}), props);
});

export default {
    ContainerLayout,
    SingleColumnLayout,
    MediumLayout,
    BetaSignUp,
    Footer,
    Header,
    HeroPrimary,
    StackItems,
    GenericSection,
    Checklist,
    Features,
    Hero,
    OpenFile,
    Tweets,
    VideoSection,
    TwoColumnBlock,
    TitleBlock,
    Jobs,
    Banner
};
