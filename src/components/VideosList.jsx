import React from 'react';
import VideosItem from "./VideosItem";
import {useSelector} from "react-redux";


const VideosList = () => {
    const videos = useSelector(state => state.videosList)

    return (
        <div>
            {
                videos.videosList.map(item =>
                    <VideosItem
                        title={item.title}
                        description = {item.description}
                        date={item.date}
                        author={item.author}
                        views={item.views}
                        preview={item.preview}
                    />)
            }
        </div>
    );
};

export default VideosList;