import React from 'react';
import react_logo from '../assets/react_logo.png'
const AboutPage = () => {
    return (
        <div className={'flex mb-10'}>
            <img className={'w-1/2 px-10 py-10 '} src={react_logo} alt="react_logo"/>
            <div className={'font-bold text-3xl'}>This WebPage was created by BrandonWF.</div>
        </div>
    );
};

export default AboutPage;