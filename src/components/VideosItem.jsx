import React from 'react';
const VideosItem = (props) => {
    return (
        <div className={"w-4/5 flex flex-row mb-10 py-10"}>
            <div className={"w-3/4 px-7 max-w-xl hover:scale-105 duration-300"}>
                <img className={'rounded-2xl'} src={props.preview} alt={'logo'}/>
            </div>
            <div className="flex flex-col w-1/2">
                <div className={"text-4xl py-2 font-medium overflow-hidden"}>{props.title}</div>
                <div className={"text-gray-500 text-sm overflow-hidden py-1 flex flex-row items-center"}>
                    <p>{props.date}</p>
                    <div className={"bg-gray-500 w-1 h-1 mx-2 rounded-full"}></div>
                    <p>{props.views} views</p>
                </div>
                <div className={"flex items-center py-2"}>
                    <div className={"w-6 h-6 rounded-full border bg-gray-200 cursor-pointer mr-3"}></div>
                    <span className={"text-gray-500 text-sm font-bold xl:font-normal overflow-hidden"}>{props.author}</span>
                </div>
                <div className={"text-gray-600 text-md "}>
                    {props.description}
                </div>
            </div>
        </div>
    );
};

export default VideosItem;