import React from 'react';
import './index.css'
import './style.css'
import PostList from "./components/PostList";
import HeaderComponent from "./components/HeaderComponent";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import VideosPage from "./pages/VideosPage";
import HomePage from "./pages/HomePage";

const App = () => {

    return (
        <div className={'container mx-auto bg-white mt-10 rounded-2xl'}>
            <div className={'mx-auto'}>
                <HeaderComponent/>
                <Routes>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/videos'} element={<VideosPage/>}/>
                    <Route path={'/about'} element={<AboutPage />}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;