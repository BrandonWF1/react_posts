import React from 'react';
import logo from '../assets/guitar.png'
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <header className={'w-full px-10 pt-5 flex'}>
                <img className={'w-[10%]'} src={logo} alt="logo"/>
                <div className={'w-[30%] flex justify-evenly items-center mx-auto text-2xl font-bold'}>
                    <NavLink
                        to={'/home'}
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? "underline text-purple-300" : ""
                        }
                    >Home</NavLink>
                    <NavLink
                        to={'/posts'}
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? "underline text-purple-300" : ""
                        }
                    >Posts</NavLink>
                    <NavLink
                        to={'/videos'}
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? "underline text-purple-300" : ""
                        }
                    >Videos</NavLink>
                    <NavLink
                        to={'/about'}
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? "underline text-purple-300" : ""
                        }
                    >About</NavLink>
                </div>
            </header>
        </div>
    );
};

export default HeaderComponent;