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
console.log(data.url);

    return (
        <div className='video-module-container'>
            <iframe 
            width="100%" 
            height="250"
             src={data.url} 
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerpolicy="strict-origin-when-cross-origin" 
             allowfullscreen>
            </iframe>
        </div>
    )
}

export default VideoModule;
