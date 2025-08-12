import Layout from "../layout";
import React, { useState } from 'react';
import { FaGraduationCap, FaYoutube, FaArrowCircleRight } from "react-icons/fa";
import Podcast from "../../../assets/images/podcast.png";
import vector_bg from '../../../assets/images/vector_bg.png';
import Slider from "@/Components/Slider";

function Home({ banners, supports, students, strategies, videos }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handleVideoClick = (index, videoId) => {
    setActiveVideoIndex(index);
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <Layout>
      <Slider banners={banners} />
      <section className="bg-blue-50">
        <div className="flex justify-center items-center mt-[30px] md:mt-[80px] lg:mt-[80px] mb-3 px-10 py-10">
          <div className="items-center justify-center text-center">
            <h2 className="text-3xl font-semibold mb-0 text-blue-600">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប</h2>
            <h2 className="text-lg mb-0 mt-3 text-gray-500">
              ជោគជ័យក្នុងការប្រឡងមិនមែនផ្អែកលើចំណេះដឹងតែមួយមុខនោះទេ
              ប៉ុន្តែក៏អាស្រ័យលើរបៀបគ្រប់គ្រងដំណើរការប្រឡងផងដែរ
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide container mx-auto p-10">
          <div className="flex gap-3 md:gap-6 px-5 pt-3 pb-3 min-w-fit md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
            {strategies.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm w-[250px] shrink-0 lg:w-auto animate-fadeInUpNoOpacity transform transition-transform duration-300 hover:scale-105"
                style={{ '--index': index }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[100px] md:h-40 object-cover rounded-t-lg"
                />
                <div className="px-3 pb-4">
                  <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-800">{item.title}</h3>
                  <hr className="border-t-3 border-dashed border-gray-300 mt-2" />
                  <p className="text-gray-600 text-sm mt-2">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 pb-10">
          <a href="#">
            <button className="flex items-center gap-2 bg-orange-600 text-white p-3 px-5 rounded-lg hover:bg-orange-700 hover:shadow-sm">
              ច្រើនទៀត
              <FaArrowCircleRight />
            </button>
          </a>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center mt-[30px] md:mt-[80px] lg:mt-[80px] mb-6 px-10">
          <div className="items-center justify-center text-center">
            <h2 className="text-3xl font-semibold mb-0 text-blue-600">
              បទបង្ហាញរបស់ សិស្សនិទ្ទេស A
            </h2>
            <h2 className="text-lg mb-0 mt-3 text-gray-500">
              សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣-២០២៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
            </h2>
          </div>
        </div>
        <div
          className="relative w-full bg-cover bg-center py-6"
          style={{ backgroundImage: `url(${vector_bg})` }}
        >
          <div className="overflow-x-auto scrollbar-hide container mx-auto px-10 z-90">
            <div className="flex gap-4 px-2 min-w-fit md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 sm:gap-6 mt-1 mb-2">
              {students.map((student, index) => {
                return (
                  <div
                    key={student.id}
                    className="flex flex-col items-center shrink-0 animate-fadeInUp opacity-0 mb-6 sm:mb-0"
                    style={{ '--index': index }}
                  >
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-20 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] object-cover rounded-full shadow-lg border aspect-square"
                    />
                    <p className="text-orange-600 mt-2 font-sm">{student.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 mb-10">
          <a href="#">
            <button className="flex items-center gap-2 bg-orange-600 text-white p-3 px-5 rounded-lg hover:bg-orange-700 hover:shadow-sm">
              ច្រើនទៀត
              <FaArrowCircleRight />
            </button>
          </a>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto max-w-7xl rounded-xl">
          <div className="bg-blue-500 p-2 flex items-center justify-center rounded-xl">
            <div className="aspect-video w-full overflow-hidden rounded-xl max-w-full max-h-full">
              <img
                src="https://i0.wp.com/www.crossagency.com/wp-content/uploads/2023/06/AdobeStock_275000603-1.jpeg?resize=800%2C534&quality=89&ssl=1"
                alt="Podcast"
                className="object-cover rounded transition-opacity duration-200 hover:opacity-90"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between min-h-[250px] max-w-lg p-4">
            <div>
              <p className="text-blue-700 text-2xl font-semibold">About this Podcast</p>
              <p className="text-lg mt-3 mb-0 text-gray-500">
                នៅក្នុងការកំណត់នៃការអប់រំ ការធ្វើបទបង្ហាញគឺជាដំណើរឆ្ពោះទៅរកការបង្រៀន ឬផ្តល់ការបង្រៀនប្រកបដោយភាពទាក់ទាញ។ សម្រាប់សន្និសីទ សិក្ខាសាលា និងព្រឹត្តិការណ៍សាធារណៈ
              </p>
            </div>

            <a href="#" className="inline-block mt-5 self-start">
              <button className="flex items-center gap-2 border border-orange-700 text-orange-700 p-3 px-5 rounded-lg hover:bg-orange-700 hover:text-white hover:shadow-sm transition">
                ច្រើនទៀត
                <FaArrowCircleRight />
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-20 lg:mt-20 !mb-6 px-10 py-10">
          <h2 className="text-3xl font-semibold mb-0 text-blue-600">
            BELTEI IU Talk Show
          </h2>
          <p className="text-lg mb-0 mt-3 text-gray-500 max-w-lg">
            សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២ៀ២៣-២០៤៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
          </p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:px-5 px-2 py-5">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-sm w-full animate-fadeInUpNoOpacity transform transition-transform duration-300 hover:scale-105"
                style={{ '--index': index }}
                onClick={() => handleVideoClick(index, video.videoId)}
                onKeyDown={(e) => e.key === 'Enter' && handleVideoClick(index, video.videoId)}
                role="button"
                tabIndex={0}
              >
                <div className="aspect-video w-full overflow-hidden rounded">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded transition-opacity duration-200 hover:opacity-90"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-base font-semibold text-gray-700 mb-2">{video.title}</h3>
                  <div className="flex items-center">
                    <div className="p-1 rounded-full bg-red-700 mr-2 text-white">
                      <FaYoutube />
                    </div>
                    <p className="text-sm text-gray-500">រយៈពេល៖ {video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center p-10">
          <a href="#">
            <button className="flex items-center gap-2 bg-orange-500 text-white p-3 px-5 rounded-lg hover:bg-orange-600 hover:shadow-sm">
              ច្រើនទៀត
              <FaArrowCircleRight />
            </button>
          </a>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-20 lg:mt-20 !mb-6 px-10/py-10">
          <h2 className="text-3xl font-semibold mb-0 text-blue-600">
            អ្នកផ្តល់វគ្គសិក្សា
          </h2>
          <p className="text-lg mb-0 mt-3 text-gray-500 max-w-lg">
            សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣-២៦៤៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
          </p>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 justify-center min-w-max w-full p-2">
            {supports.map((item) => (
              <a
                key={item.id}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-center text-gray-800 bg-blue-300 px-6 py-3 rounded-lg shadow whitespace-nowrap hover:bg-blue-400 transition-colors"
              >
                <img src={item.logo} alt={item.name} className="h-10" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="h-20"></div>
    </Layout>
  );
}

export default Home;