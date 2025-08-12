import { useState } from "react";
import Layout from "../layout";

function Video() {
    const [currentVideo, setCurrentVideo] = useState({
        id: "C1JKlm8-ayE",
        title: "Main Video Title",
        description: "This is the main video description."
    });

    const relatedVideos = [
        {
            id: "dQw4w9WgXcQ",
            title: "Related Video 1",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            description: "Description for related video 1."
        },
        {
            id: "3JZ_D3ELwOQ",
            title: "Related Video 2",
            thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/mqdefault.jpg",
            description: "Description for related video 2."
        },
        {
            id: "LXb3EKWsInQ",
            title: "Related Video 3",
            thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/mqdefault.jpg",
            description: "Description for related video 3."
        }
    ];

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row gap-6 p-4">
                {/* Main Video Section */}
                <div className="flex-1">
                    <div className="w-full aspect-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${currentVideo.id}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">{currentVideo.title}</h2>
                        <p className="text-gray-600 mt-1">{currentVideo.description}</p>
                    </div>
                </div>

                {/* Related Videos Section */}
                <div className="w-full lg:w-1/3">
                    <h3 className="text-lg font-semibold mb-3">វីដេអូពាក់ព័ន្ធ</h3>
                    <div className="flex flex-col gap-2 overflow-y-auto max-h-[500px] pr-2">
                        {relatedVideos.map((video, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentVideo(video)}
                                className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg transition text-left"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-40 h-24 object-cover rounded"
                                />
                                <div className="flex flex-col justify-center">
                                    <p className="font-medium text-sm">{video.title}</p>
                                    <span className="text-gray-500 text-xs">1.2M views • 2 days ago</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Video;
