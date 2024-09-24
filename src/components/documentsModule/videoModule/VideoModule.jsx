import React from 'react';
import "./VideoModuleStyle.css";

function VideoModule({ data }) {

    function getYouTubeThumbnailUrl(youtubeUrl) {
        if (youtubeUrl === null || youtubeUrl === undefined) {
            return "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg";
        }

        const urlPattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = youtubeUrl.match(urlPattern);

        if (match && match[1]) {
            const videoId = match[1];
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        } else { 
            console.log("Invalid YouTube Url");
            return '';
        }
    }

    return (
        <div className='video-module-container'>
            <a href={data.url} className='yt-image-link'>
                <div className="thumbnail-container">
                    <img src={getYouTubeThumbnailUrl(data.url)} className='yt-image' alt="YouTube Thumbnail" />
                    <div className="play-button"></div>
                </div>
            </a>
            <p className='video-module-description' style={{textAlign:"start"}}>
                {data.description}
            </p>
        </div>
    )
}

export default VideoModule;
