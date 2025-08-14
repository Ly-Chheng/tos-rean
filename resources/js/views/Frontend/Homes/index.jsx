import Layout from "../layout";
import React, { useState, useRef, useEffect } from 'react';
import { FaGraduationCap, FaYoutube, FaArrowCircleRight, FaPlayCircle } from "react-icons/fa";
import Podcast from "../../../assets/images/podcast.png";
import vector_bg from '../../../assets/images/vector_bg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home({ banners, supports, students, strategies, videos }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const studentsRef = useRef(null);
  const supportsRef = useRef(null);
  const [isPaused, setIsPaused] = useState({ students: false, supports: false });

  const handleVideoClick = (index, videoId) => {
    setActiveVideoIndex(index);
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  // Centralized scroll animation logic
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const sections = [
      { ref: studentsRef, data: students, speed: 1, key: 'students' },
      { ref: supportsRef, data: supports, speed: 0.8, key: 'supports' },
    ];

    const animationFrameIds = {};

    // Initialize animation for each section
    for (const { ref, data, speed, key } of sections) {
      if (!data || data.length === 0) {
        continue;
      }
      const container = ref.current;
      if (!container) {
        continue;
      }
      let lastTime = performance.now();
      const scrollStep = (now) => {
        const delta = (now - lastTime) / 16.67;
        lastTime = now;
        if (isPaused[key]) {
          animationFrameIds[key] = requestAnimationFrame(scrollStep);
          return;
        }
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) {
          container.scrollLeft = 0;
          return;
        }
        container.scrollLeft += speed * delta;
        // Buffer to handle precision issues
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        }
        animationFrameIds[key] = requestAnimationFrame(scrollStep);
      };
      animationFrameIds[key] = requestAnimationFrame(scrollStep);
    }
    return () => {
      // Cleanup all animation frames
      for (const key in animationFrameIds) {
        cancelAnimationFrame(animationFrameIds[key]);
      }
    };
  }, [isPaused, students, supports]);

  // Handle dynamic content updates and resize
  useEffect(() => {
    const handleResize = () => {
      if (studentsRef.current) {
        studentsRef.current.scrollLeft = 0;
      }
      if (supportsRef.current) {
        supportsRef.current.scrollLeft = 0;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [students, supports]);

  return (
    <Layout>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        className="w-full h-[150px] sm:h-[170px] md:h-[300px] lg:h[350px] px-2 py-2"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.image}
              alt={`Banner ${banner.id}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="bg-blue-50">
        <div className="flex justify-center items-center mb-3 px-10">
          <div className="items-center justify-center text-center mt-[100px]">
            <h2 className="text-4xl font-semibold mb-0 textblue">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប</h2>
            <h2 className="text-lg mb-0 mt-3 text-gray-500">
              សិស្សត្រៀមប្រឡងបាក់ឌុបត្រូវយល់ដឹង៖ តើបេក្ខជនត្រូវធ្វើអ្វី និងមិនត្រូវអ្វីខ្លះ នៅពេលប្រឡង?
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
        <div className="flex justify-center items-center mt-[80px] md:mt-[80px] lg:mt-[80px] mb-6 px-10">
          <div className="items-center justify-center text-center">
            <h2 className="text-4xl font-semibold mb-0 textblue">
              បទបង្ហាញរបស់ សិស្សនិទ្ទេស A
            </h2>
            <h2 className="text-lg mb-0 mt-3 text-gray-500">
              សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៤​ និង ២០២៥
            </h2>
          </div>
        </div>
        <div
          className="relative w-full bg-cover bg-center py-6"
          style={{ backgroundImage: `url(${vector_bg})` }}
        >
          <div
            className="flex overflow-x-auto scrollbar-hide scroll-auto mt-[80px]"
            ref={studentsRef}
            onMouseEnter={() => setIsPaused((prev) => ({ ...prev, students: true }))}
            onMouseLeave={() => setIsPaused((prev) => ({ ...prev, students: false }))}
          >
            <div className="flex gap-4 lg:gap-8 px-2 min-w-max">
              {students.map((student) => (
                <div key={student.id} className="flex flex-col items-center shrink-0 mb-6">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-20 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] object-cover rounded-full shadow-lg border aspect-square"
                  />
                  <p className="text-orange-600 mt-2 text-sm">{student.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[10px] bg-gray-50">
        <div className="container mx-auto pb-10">
          <div className="flex justify-center items-center mt-[30px] md:mt-[80px] lg:mt-[80px] mb-[50px] px-10">
            <div className="items-center justify-center text-center">
              <h2 className="text-4xl font-semibold mb-0 textblue">
                BELTEI IS Podcast
              </h2>
              <h2 className="text-lg mb-0 mt-3 text-gray-500">
                សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣ ២០២៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
              </h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bgblue rounded-2xl mt-2">
            <img
              src="https://education.ams.com.kh/wp-content/uploads/2024/11/Nov-65.png"
              alt="Podcast"
              className="object-cover rounded-2xl transition-opacity duration-200 hover:opacity-90 h-[300px]"
              style={{ borderTopRightRadius: '150px', borderBottomRightRadius: '150px' }}
            />
            <div className="flex justify-center flex-rows">
              <div className="flex flex-col px-10 justify-center items-start">
                <p className="text-white text-3xl font-semibold mb-2">ការធ្វើបទបង្ហាញគឺជាដំណើរឆ្ពោះទៅរកការបង្រៀន</p>
                <p className="text mt-3 mb-0 text-white">
                  នៅក្នុងការកំណត់នៃការអប់រំ ការធ្វើបទបង្ហាញគឺជាដំណើរឆ្ពោះទៅរកការបង្រៀន ឬផ្តល់ការបង្រៀនប្រកបដោយភាពទាក់ទាញ។ សម្រាប់សន្និសីទ សិក្ខាសាលា និងព្រឹត្តិការណ៍សាធារណៈ
                </p>
                <a href="#" className="inline-block mt-5 self-start">
                  <button
                    type="button"
                    className="bg-white w-full py-3 px-5 rounded-lg text-orange-600 text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:text-white hover:bg-orange-500"
                  >
                    មើលឥឡូវ
                    <FaPlayCircle />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-20 lg:mt-20 !mb-6 px-10 py-10">
          <h2 className="text-4xl font-semibold mb-0 textblue">
            BELTEI IU Talk Show
          </h2>
          <p className="text-lg mb-0 mt-3 text-gray-500 max-w-lg">
            សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣ និង ២០២៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
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
        <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-20 lg:mt-20 !mb-6 px-10 py-10">
          <h2 className="text-4xl font-semibold mb-0 textblue">
            អ្នកផ្តល់វគ្គសិក្សា
          </h2>
          <p className="text-lg mb-0 mt-3 text-gray-500 max-w-lg">
            សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣ និង​២០២៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
          </p>
        </div>
        <div
          className="flex overflow-x-auto scrollbar-hide scroll-auto"
          ref={supportsRef}
          onMouseEnter={() => setIsPaused((prev) => ({ ...prev, supports: true }))}
          onMouseLeave={() => setIsPaused((prev) => ({ ...prev, supports: false }))}
        >
          <div className="flex gap-4 scroll-auto justify-center min-w-max w-full p-2">
            {supports.map((item) => (
              <a
                key={item.id}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-center text-white bgblue px-6 py-3 rounded-lg shadow whitespace-nowrap hover:bg-blue-600 transition-colors"
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