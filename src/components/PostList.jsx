import React from 'react';
import PostItem from "./PostItem";
import {useDispatch, useSelector} from "react-redux";
import {updatePosts} from "../store/Slices/PostListSlice";

const PostList = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.postList)
    const deletePost = (id) => {
        const updatedArray = posts.postList.filter(post => post.id !== id)
        dispatch(updatePosts(updatedArray))
    }

    return (
        <div>
            {
                posts.postList.map(item =>
                    <PostItem
                        id={item.id}
                        onDeletePost={deletePost}
                        title={item.title}
                        body={item.body}
                        date={item.date}
                    />)
            }
        </div>
    );
};

export default PostList;