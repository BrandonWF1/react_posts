import React, {useState} from 'react';
import PostItem from "./PostItem";
import ModalPopup from "./ModalPopup";

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