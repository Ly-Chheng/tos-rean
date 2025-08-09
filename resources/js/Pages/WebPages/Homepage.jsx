import Layout from "./Layout";
import React, { useState } from 'react';
import { FaGraduationCap, FaYoutube } from "react-icons/fa";
import SectionHeader from "@/Components/SectionHeader";
import image from '../../assets/images/beltei_podcast.png';
import vectorBackground from '../../assets/images/vector_bg.png';
import Slider from "@/Components/Slider";

function Homepage({ banners, supports, students, strategies, videos }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handleVideoClick = (index, videoId) => {
    setActiveVideoIndex(index);
    console.log(`Playing video: ${videoId}`);
  };

  return (
    <Layout>
      <Slider banners={banners} />
      <SectionHeader title="យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប" linkText="ច្រើនទៀត" href="/strategies" />
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 min-w-fit lg:grid lg:grid-cols-4 lg:gap-6 lg:px-0">
          {strategies.map((item) => (
            <div
              key={item.id}
              className="bg-white p-2 rounded-lg shadow-md w-[250px] shrink-0 lg:w-auto mb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded mb-3 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-base font-semibold mb-2 text-gray-500">{item.title}</h3>
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-blue-600 mr-2 text-white">
                  <FaGraduationCap />
                </div>
                <p className="text-gray-400 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionHeader title="បទបង្ហាញរបស់ សិស្សនិទ្ទេស A" linkText="ច្រើនទៀត" href="/students" />
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${vectorBackground})` }}
      >
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 min-w-fit lg:grid lg:grid-cols-6 sm:gap-6 mt-1 mb-2">
            {students.map((student) => (
              <div key={student.id} className="flex flex-col items-center shrink-0">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] object-cover rounded-full shadow-lg border"
                />
                <p className="text-gray-500 mt-2">{student.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-start">
        <img src={image} alt="Beltei Podcast" className="w-full max-w-4xl" />
      </div>
      <SectionHeader title="BELTEI IU Talk Show" linkText="ច្រើនទៀត" href="/videos" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-5 md:gap-10 lg:px-24 px-6">
        {videos.map((video, index) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg p-2 w-full mb-3">
            <div className="aspect-video w-full overflow-hidden rounded cursor-pointer">
              <a href="video_view">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  onClick={() => handleVideoClick(index, video.videoId)}
                  onKeyDown={(e) => ['Enter', ' '].includes(e.key) && handleVideoClick(index, video.videoId)}
                  role="button"
                  tabIndex={0}
                  className="w-full h-full object-cover rounded hover:opacity-90 transition duration-300 hover:scale-105"
                />
              </a>
                
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">{video.title}</h3>
            <div className="flex items-center">
              <div className="p-1 rounded-full bg-red-700 mr-2 text-white">
                <FaYoutube />
              </div>
              <p className="text-sm text-gray-500">រយៈពេល៖ {video.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <SectionHeader title="អ្នកផ្តល់វគ្គសិក្សា" linkText="" href="#" />
      <div className="px-6 lg:px-10">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide justify-start">
          {supports.map((item) => (
            <a
              key={item.id}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-gray-800 bg-blue-300 px-6 py-3 rounded-lg shadow whitespace-nowrap hover:bg-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="h-10"></div>
    </Layout>
  );
}

export default Homepage;