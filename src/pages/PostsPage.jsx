import React, {useEffect, useState} from 'react';
import PostList from "../components/PostList";
import ModalPopup from "../components/ModalPopup";
import axios from "axios";
import {updatePosts} from "../store/Slices/PostListSlice";
import {useDispatch, useSelector} from "react-redux";

const PostsPage = () => {
    const [popupVisible, setPopupVisible] = useState(false)
    const openPopup = () => {
        setPopupVisible(true)
    }

    const postList = useSelector(state => state.postList)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(res => {
            dispatch(updatePosts(res.data))
        })
    }, [])

    const createPost = (post) => {
        const newPostsArray = [...postList.postList,post]
        dispatch(updatePosts(newPostsArray))
    }

    return (
        <div>

            <div className={'py-10 flex '}>
                <div className={'w-[70%]'}>
                    <PostList/>
                </div>
                <div className={'w-1/4 flex flex-col items-center'}>
                    <div className={'flex flex-col items-center border-4 px-10 py-[62px] m-5 rounded-2xl bg-pink-50 hover:scale-105 duration-300'}>
                        <div className={'font-bold text-2xl py-5'}>Create your own post!</div>
                        <button
                            className={'px-8 bg-purple-200 py-1 text-xl font-bold rounded-xl  hover:scale-105 duration-300 hover:bg-purple-400'}
                            onClick={openPopup}
                        >Create post
                        </button>
                    </div>
                </div>
                {popupVisible && <ModalPopup
                    createNewPost={createPost}
                    setPopupVisible={setPopupVisible}/>}
            </div>
        </div>
    );
};

export default PostsPage;