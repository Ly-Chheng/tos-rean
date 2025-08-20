import { useState, useRef, useEffect } from "react";
import Layout from "../layout";

function TalkShow({ talkShow = [] }) {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    const [loading, setLoading] = useState(true); // ✅ make it a state

    const currentVideo = talkShow[activeVideoIndex] || null;
    const listRef = useRef(null);

    // simulate API call
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (talkShow.length === 0) {
            setActiveVideoIndex(0);
        } else if (activeVideoIndex >= talkShow.length) {
            setActiveVideoIndex(talkShow.length - 1);
        }
    }, [talkShow, activeVideoIndex]);

    useEffect(() => {
        const list = listRef.current;
        if (list && talkShow.length > 0) {
            const activeButton = list.children[activeVideoIndex];
            if (activeButton) {
                activeButton.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        }
    }, [activeVideoIndex, talkShow]);

    const handleVideoClick = (index) => {
        if (index >= 0 && index < talkShow.length) {
            setActiveVideoIndex(index);
            setAutoplay(true);
        }
    };

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-7xl mx-auto">
                {/* Main Video Section */}
                <div className="flex-1">
                    {loading ? (
                        <div className="animate-pulse">
                            <div className="w-full aspect-video rounded-lg bg-gray-300"></div>
                            <div className="h-6 bg-gray-300 rounded mt-4 w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded mt-2 w-full"></div>
                            <div className="h-4 bg-gray-300 rounded mt-2 w-5/6"></div>
                        </div>
                    ) : currentVideo && talkShow.length > 0 ? (
                        <div>
                            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${currentVideo.videoId}${autoplay ? "?autoplay=1" : ""}&rel=0`}
                                    // src={`https://www.youtube.com/embed/${currentVideo.videoId}${autoplay ? "?autoplay=1" : ""}${autoplay ? "&" : "?"}rel=0`}
                                    title={currentVideo.title || "Video"}
                                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    onLoad={() => setAutoplay(true)}
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                    
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mt-4 line-clamp-2">
                                {currentVideo.title || "No title available"}
                            </h2>
                            <p className="text-gray-600 mt-2 line-clamp-3">
                                {currentVideo.description || "No description available"}
                            </p>
                        </div>
                    ) : (
                        <div className="w-full aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-500 text-lg">No video selected</p>
                        </div>
                    )}
                </div>

                {/* Related Video List */}
                <div className="w-full lg:w-1/3">
                    <div className="flex justify-between items-center p-3 rounded-t-lg sticky top-0 z-10">
                        <h3 className="text-lg font-semibold">វីដេអូពាក់ព័ន្ធ</h3>
                    </div>

                    {loading ? (
                        <div className="flex flex-col gap-3 border border-gray-200 rounded-b-lg animate-pulse">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex gap-3 p-3">
                                    <div className="w-40 h-24 bg-gray-300 rounded-md"></div>
                                    <div className="flex flex-col justify-center flex-1 gap-2">
                                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : talkShow.length > 0 ? (
                        <div
                            ref={listRef}
                            className="flex flex-col gap-3 p-1  pr-2 border border-gray-200 rounded-b-lg"
                        >
                            {talkShow.map((video, index) => (
                                <button
                                    key={video.id || index}
                                    onClick={() => handleVideoClick(index)}
                                    disabled={index === activeVideoIndex}
                                    className={`flex gap-3 p-3 rounded-lg transition-all text-left w-full ${index === activeVideoIndex
                                            ? "bg-gray-200 cursor-default"
                                            : "hover:bg-gray-100 cursor-pointer"
                                        }`}
                                >
                                    <img
                                        src={video.thumbnail || "https://via.placeholder.com/160x90"}
                                        alt={video.title || "Video thumbnail"}
                                        className="w-40 h-24 object-cover rounded-md"
                                        loading="lazy"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <p className="font-medium text-sm line-clamp-2">
                                                {video.title || "Untitled Video"}
                                            </p>
                                            <p className="text-xs text-gray-600 line-clamp-2">
                                                {video.description || "Description Video"}
                                            </p>
                                        </div>
                                            
                                        <span className="text-gray-500 text-xs">
                                            {video.views || "1.2M"} views • {video.uploadDate || "2 days ago"}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 text-center text-gray-500 border border-gray-200 rounded-b-lg">
                            No related videos available
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default TalkShow;
