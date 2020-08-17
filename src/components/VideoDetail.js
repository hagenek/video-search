import React from "react";

const VideoDetail = ({ video, firstVideo }) => {

    if (video) {
        const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                <iframe src={videoSrc} title="Video Player"/>
                </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            </div>
        )
    }
     if (firstVideo) {
        const videoSrc = `https://youtube.com/embed/${firstVideo.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                <iframe src={videoSrc} title="Video Player"/>
                </div>
            <div className="ui segment">
                <h4 className="ui header">{firstVideo.snippet.title}</h4>
                <p>{firstVideo.snippet.description}</p>
            </div>
            </div>
        )}

    return <div>Loading...</div>   
}

    export default VideoDetail

