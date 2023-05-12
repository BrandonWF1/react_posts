import React from 'react';

const MyInput = (props) => {
    return (
        <div>
            <input
                {...props}
                className={'border rounded-2xl px-4 py-2 outline-none focus:bg-pink-50 duration-300 text-xl my-2'}
                />
        </div>
    );
};

export default MyInput;