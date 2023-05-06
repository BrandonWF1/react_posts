import React from 'react';
import PostItem from "./PostItem";


const PostList = ()=> {

    const posts = [
        {
            title: 'Title 1',
            body: 'OPIASDFOswkehfgIOSUGSOPFasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasD',
            date: '05.05.2023',
        },
        {
            title: 'Title 2',
            body: 'ASDasdasdasasasd',
            date: '05.05.2023',
        },
        {
            title: 'Title 3',
            body: 'asddaSAsdsaasd',
            date: '05.05.2023',
        }
    ]




    return (
    <div className={'py-10'}>
        {
            posts.map(item => <PostItem title={item.title} body={item.body} date={item.date} />)
        }
    </div>
    );
};

export default PostList;