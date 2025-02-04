import React from "react";
import "./ResourcesContent1.css"; // Assuming you have an App.css file for styling.

const VideoGallery = () => {
    const videos = [
        { id: 1, title: "Video 1", src: "../../../assets/videos/Resouces/video1.mp4" },
        { id: 2, title: "Video 2", src: "path/to/video2.mp4" },
        { id: 3, title: "Video 3", src: "path/to/video3.mp4" },
        { id: 4, title: "Video 4", src: "path/to/video4.mp4" },
    ];

    return (
        <div className="video-gallery">
            <h2 className="video-title">Tune In to Our Latest Videos</h2>
            <div className="video-grid">
                {videos.map((video) => (
                    <div className="video-item" key={video.id}>
                        <video
                            className="video-player"
                            controls
                            poster="path/to/placeholder.jpg" // Optional poster image
                        >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
