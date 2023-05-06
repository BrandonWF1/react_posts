import React from 'react';
import './index.css'
import './style.css'
import PostList from "./components/PostList";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {

    return (
        <div className={'container mx-auto bg-white mt-10 rounded-2xl'}>
            <div className={'mx-auto'}>
                <HeaderComponent/>
                <PostList/>
            </div>
        </div>
    );
};

export default App;