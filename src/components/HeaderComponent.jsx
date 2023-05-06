import React from 'react';
import logo from '../assets/guitar.png'

const HeaderComponent = () => {
    return (
        <div>
            <header className={'w-full px-10 pt-5 flex'}>
                <img className={'w-[10%]'} src={logo} alt="logo"/>
            <div className={'w-[30%] flex justify-evenly items-center mx-auto text-2xl font-bold'}>
                <div className={'cursor-pointer'}>Home</div>
                <div className={'cursor-pointer'}>Posts</div>
                <div className={'cursor-pointer'}>Videos</div>
                <div className={'cursor-pointer'}>About</div>
            </div>
            </header>
        </div>
    );
};

export default HeaderComponent;