import React from 'react';

const CloseIcon = () => {
    return (
        <div className="w-6 h-6 relative cursor-pointer hover:scale-110 hover:bg-red-200 rounded-full duration-300 ">
            <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-full h-1 rotate-45 rounded-full"></span>
            <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-full h-1 -rotate-45 rounded-full"></span>
        </div>
    );
};

export default CloseIcon;