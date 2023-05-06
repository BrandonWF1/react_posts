import React from 'react';

const PostItem = ({title, body, date}) => {


    return (
        <div className={'border-2 px-10 py-10 w-3/4 m-5 rounded-xl'}>
            <div className={''}>
                <div className={'text-3xl font-bold mb-5'}>
                    {title}
                </div>
                <div className={'text-xl mb-10 '}>
                    {body}
                </div>
                <div className={'text-xl text-gray-400'}>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default PostItem;