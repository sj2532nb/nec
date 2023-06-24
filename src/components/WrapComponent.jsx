import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import RightQuickComponent from './wrap/RightQuickComponent';

export default function WrapComponent(){
    return (
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <RightQuickComponent/>
        </div>
    );
};