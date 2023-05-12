import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts})=> {

    return (
    <div>
        {
            posts.map(item => <PostItem title={item.title} body={item.body} date={item.date} />)
        }
    </div>
    );
};

export default PostList;