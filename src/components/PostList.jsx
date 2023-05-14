import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,setPosts})=> {

    const deletePost = (id) => {
        const updatedArray = posts.filter(post => post.id !== id);
        setPosts(updatedArray);
    }

    return (
    <div>
        {
            posts.map(item => <PostItem id={item.id} title={item.title} body={item.body} date={item.date} onDeletePost={deletePost} />)
        }
    </div>
    );
};

export default PostList;