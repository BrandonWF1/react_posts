import React from 'react';

const PostItem = (props) => {


    return (
        <div className={'border-2 px-10 py-10 w-[90%] m-5 rounded-xl'}>
            <div className={''}>
                <div className={'text-3xl font-bold mb-5'}>
                    {props.title}
                </div>
                <div className={'text-xl mb-10 '}>
                    {props.body}
                </div>
                <div className={'text-xl text-gray-400'}>
                    {props.date}
                </div>
            </div>
        </div>
    );
};

export default PostItem;