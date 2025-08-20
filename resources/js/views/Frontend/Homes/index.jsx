import Layout from "../layout";
import { Link, usePage } from '@inertiajs/react';
import React, { useState, useRef, useEffect } from 'react';
import { FaGraduationCap, FaYoutube, FaArrowCircleRight, FaPlayCircle, FaEye } from "react-icons/fa";
import vector_bg from '../../../assets/images/vector_bg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useAutoScroll from "../../../hook/useAutoScroll";

function Home({ banners, supports, students, strategies, videos, books, podcast }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const studentsRef = useRef(null);
  const supportsRef = useRef(null);
  const [isPaused, setIsPaused] = useState({ students: false, supports: false });

  // Call the reusable animation
  useAutoScroll(
    [
      { ref: studentsRef, data: students, speed: 1, key: 'students' },
      { ref: supportsRef, data: supports, speed: 0.8, key: 'supports' }
    ],
    isPaused
  );
  useEffect(() => {
    // simulate API call
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <Layout>
      {loading ? (
        <div className="w-full h-[200px] sm:h-[170px] md:h-[300px] lg:h-[350px] px-2 animate-pulse bg-gray-300 rounded-lg"></div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          className="w-full h-[200px] sm:h-[170px] md:h-[300px] lg:h-[350px] px-2"
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
      )}

      <section className="bg-blue-50">
        <div className="flex justify-center items-center mb-3 px-10">
          <div className="items-center justify-center text-center mt-[100px]">
            {loading ? (
              <>
                <div className="w-72 h-10 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
                <div className="w-full max-w-xl h-5 bg-gray-200 rounded-md animate-pulse mt-3 mx-auto"></div>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-semibold mb-0 textblue">
                  យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប
                </h2>
                <h2 className="text-lg mb-0 mt-3 text-gray-500">
                  សិស្សត្រៀមប្រឡងបាក់ឌុបត្រូវយល់ដឹង៖ តើបេក្ខជនត្រូវធ្វើអ្វី និងមិនត្រូវអ្វីខ្លះ នៅពេលប្រឡង?
                </h2>
              </>
            )}
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide container mx-auto p-2 md:px-5 lg:px-10">
          <div className="flex gap-3 md:gap-6 px-5 pt-3 pb-3 min-w-fit md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
            {loading
              ? [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm w-[250px] shrink-0 lg:w-auto p-3 animate-pulse"
                >
                  <div className="w-full h-[100px] md:h-40 bg-gray-300 rounded-t-lg"></div>
                  <div className="px-3 pb-4 mt-2">
                    <div className="w-full h-5 bg-gray-200 rounded"></div>
                    {/* <div className="w-full h-1 border-t border-dashed border-gray-200 mt-2"></div> */}
                    <div className="w-full h-3 bg-gray-200 rounded mt-2"></div>
                    {/* <div className="w-5/6 h-3 bg-gray-200 rounded mt-1"></div> */}
                  </div>
                </div>
              ))
              : strategies.map((item, index) => (
                <Link href="home/strategy_detail">
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm w-[250px] shrink-0 lg:w-auto animate-fadeInUpNoOpacity transform transition-transform duration-300 hover:scale-110"
                    style={{ '--index': index }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-[100px] md:h-40 object-cover rounded-t-lg"
                    />
                    <div className="px-3 pb-4">
                      <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-800 line-clamp-2 min-h-[3rem]">{item.title}</h3>
                      {/* <hr className="border-t-3 border-dashed border-gray-300 mt-2" />
                      <p className="text-gray-600 text-sm mt-2">{item.detail}</p> */}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        {/* <div className="flex items-center justify-center mt-10 pb-10">
          {loading ? (
            <div className="w-32 h-10 bg-gray-300 rounded-lg animate-pulse"></div>
          ) : (
            <a href="#">
              <button className="flex items-center gap-2 bg-orange-600 text-white p-3 px-5 rounded-lg hover:bg-orange-700 hover:shadow-sm">
                ច្រើនទៀត
                <FaArrowCircleRight />
              </button>
            </a>
          )}
        </div> */}
      </section>

      <section>
        <div className="flex justify-center items-center mt-[80px] mb-6 px-10">
          <div className="items-center justify-center text-center">
            {loading ? (
              <>
                <div className="w-72 h-10 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
                <div className="w-full max-w-lg h-5 bg-gray-200 rounded-md animate-pulse mt-3 mx-auto"></div>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-semibold mb-0 textblue">
                  បទបង្ហាញរបស់ សិស្សនិទ្ទេស A
                </h2>
                <h2 className="text-lg mb-0 mt-3 text-gray-500">
                  សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៤​ និង ២០២៥
                </h2>
              </>
            )}
          </div>
        </div>
        <div
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: loading ? 'none' : `url(${vector_bg})` }}
        >
          <div
            className="flex overflow-x-auto scrollbar-hide scroll-auto mt-[80px] iteams-center justify-center"
            ref={studentsRef}
            onMouseEnter={() => setIsPaused((prev) => ({ ...prev, students: true }))}
            onMouseLeave={() => setIsPaused((prev) => ({ ...prev, students: false }))}
          >
            <div className="flex gap-4 lg:gap-10 px-2 min-w-max">
              {loading
                ? [...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center shrink-0 mb-6 animate-pulse"
                  >
                    <div className="w-20 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] bg-gray-300 rounded-full shadow-lg border aspect-square"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded mt-2"></div>
                  </div>
                ))
                : students.map((student) => (
                  <div key={student.id} className="flex flex-col items-center shrink-0 mb-6">
                    <Link href="audio">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-20 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] object-cover rounded-full shadow-lg border aspect-square"
                    /></Link>
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
              {loading ? (
                <>
                  <div className="w-72 h-10 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
                  <div className="w-full max-w-lg h-5 bg-gray-200 rounded-md animate-pulse mt-3 mx-auto"></div>
                </>
              ) : (
                <>
                  <h2 className="text-4xl font-semibold mb-0 textblue">
                    BELTEI IS Podcast
                  </h2>
                  <h2 className="text-lg mb-0 mt-3 text-gray-500">
                    គំនិត ចំណេះដឹង បទពិសោធន៍
                  </h2>
                </>
              )}
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col lg:flex-row bg-gray-400 rounded-2xl mt-2 animate-pulse h-[300px]">
              <div className="lg:flex-1 bg-gray-300 h-[300px] rounded-2xl lg:rounded-tr-[150px] lg:rounded-br-[150px]"></div>
              <div className="flex-1 p-3 md:p-10 flex flex-col justify-center items-start gap-3">
                <div className="w-3/4 h-8 bg-gray-300 rounded"></div>
                <div className="w-full h-5 bg-gray-200 rounded"></div>
                <div className="w-5/6 h-5 bg-gray-200 rounded"></div>
                <div className="w-1/3 h-10 bg-gray-300 rounded mt-5"></div>
              </div>
            </div>
          ) : (
            podcast && (  // ✅ safety check
              <div className="flex flex-col lg:flex-row bgblue rounded-2xl mt-2">
                <img
                  src={podcast.thumbnail}
                  alt={podcast.title}
                  className="object-cover lg:rounded-2xl lg:rounded-tr-[150px] lg:rounded-br-[150px] h-[300px]"
                />
                <div className="flex justify-center flex-rows p-3 md:p-10">
                  <div className="flex flex-col px-3 sm:px-5 justify-center items-start">
                    <p className="text-white text-3xl font-semibold mb-2">{podcast.title}</p>
                    <p className="text mt-3 mb-0 text-white">{podcast.description}</p>

                    <Link
                      href={`/video/${podcast.id}`}
                      className="inline-block mt-5 self-start"
                    >
                      <button
                        type="button"
                        className="bg-white w-full py-3 px-5 rounded-lg text-orange-600 text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:text-white hover:bg-orange-500"
                      >
                        មើលឥឡូវ
                        <FaPlayCircle />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <section className="container mx-auto">
        <div className="pb-10">
          <div className="flex justify-center items-center mt-[30px] md:mt-[80px] lg:mt-[80px] mb-[50px] px-10">
            <div className="items-center justify-center text-center">
              {loading ? (
                <>
                  <div className="w-72 h-10 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
                  <div className="w-full max-w-lg h-5 bg-gray-200 rounded-md animate-pulse mt-3 mx-auto"></div>
                </>
              ) : (
                <>
                  <h2 className="text-4xl font-semibold mb-0 text-blue-600">
                    អត្ថបទចំណេះដឹង
                  </h2>
                  <h2 className="text-lg mb-0 mt-3 text-gray-500">
                    បណ្តុំចែករំលែកចំណេះដឹងខ្លី ដែលពេញនិយម
                  </h2>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-3 pb-5 md:gap-6 md:px-6 md:pb-10 mx-auto">
            {loading
              ? [...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white rounded-lg shadow overflow-hidden animate-pulse"
                >
                  <div className="lg:h-[150px] md:h-[100px]  h-[50px] w-full bg-gray-300 p-2 rounded-lg"></div>
                  <div className="py-3 px-4">
                    <div className="w-3/4 h-5 bg-gray-300 rounded mb-2"></div>
                    <div className="w-full h-1 border-t border-dashed border-gray-200 my-2"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
              : books.map((book) => (
                <div
                  key={book.id}
                  className="border border-gray-200 bg-white rounded-lg shadow overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="sm:h-[150px]  min:h-[120px] w-full overflow-hidden p-1">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                    />
                  </div>
                  <div className="py-1 px-4">
                    <h2 className="text-gray-700 text-lg font-semibold line-clamp-2 min-h-[3rem]">
                      {book.title}
                    </h2>
                    <hr className="border-t border-dashed border-gray-300 my-2 mx-auto"/>
                    <p className="text-gray-500  text-sm">{book.date} - ថ្ងៃនេះ</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-center mt-10 pb-10">
            {loading ? (
              <div className="w-32 h-10 bg-gray-300 rounded-lg animate-pulse"></div>
            ) : (
              <a href="#">
                <button className="flex items-center gap-2 bg-orange-600 text-white p-3 px-5 rounded-lg hover:bg-orange-700 hover:shadow-sm">
                  ច្រើនទៀត
                  <FaArrowCircleRight />
                </button>
              </a>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center text-center mt-8 !mb-6 px-10 ">
          {loading ? (
            <>
              <div className="w-72 h-10 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
              <div className="w-full max-w-lg h-5 bg-gray-200 rounded-md animate-pulse mt-3 mx-auto"></div>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-semibold mb-0 textblue">
                BELTEI IU Talk Show
              </h2>
              <p className="text-lg mb-0 mt-3 text-gray-500 max-w-lg">
                The Place where Education meets Leadership, and Ideas change the World!
              </p>
            </>
          )}
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:px-5 px-2 py-5">
            {loading
              ? [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm w-full animate-pulse h-60"
                >
                  <div className="w-full h-36 bg-gray-300 rounded-t-lg"></div>
                  <div className="p-3">
                    <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))
              : videos.map((video, index) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-sm w-full animate-fadeInUpNoOpacity transform transition-transform duration-300 hover:scale-105"
                  style={{ '--index': index }}
                  onClick={() => handleVideoClick(index, video.videoId)}
                  onKeyDown={(e) => e.key === 'Enter' && handleVideoClick(index, video.videoId)}
                  role="button"
                  tabIndex={0}
                >
                  <Link href={route('talkShow')}>
                    <div className="aspect-video w-full overflow-hidden rounded cursor-pointer">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover rounded transition-opacity duration-200 hover:opacity-90"
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-gray-700 mb-2 line-clamp-2 min-h-[3rem]">{video.title}</h3>
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
          {loading ? (
            <div className="w-32 h-10 bg-gray-300 rounded-lg animate-pulse"></div>
          ) : (
            <a href="#">
              <button className="flex items-center gap-2 bg-orange-500 text-white p-3 px-5 rounded-lg hover:bg-orange-600 hover:shadow-sm">
                ច្រើនទៀត
                <FaArrowCircleRight />
              </button>
            </a>
          )}
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-10 lg:mt-15 !mb-6 px-10">
          {loading ? (
            <>
              <div className="w-72 h-10 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
              <div className="w-full max-w-lg h-5 bg-gray-200 rounded-md animate-pulse mt-3 mx-auto"></div>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-semibold mb-0 textblue">
                អ្នកផ្តល់វគ្គសិក្សា
              </h2>
              <p className="text-lg mb-0 mt-3 text-gray-500 max-w-lg">
                សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣ និង​២០២៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
              </p>
            </>
          )}
        </div>
        <div className="flex overflow-x-auto scrollbar-hide scroll-auto">
          {loading ? (
            [...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-32 h-12 bg-gray-300 rounded-lg mx-2 animate-pulse"
              ></div>
            ))
          ) : (
            <div
              className="flex gap-4 scroll-auto justify-center min-w-max w-full p-2"
              ref={supportsRef}
              onMouseEnter={() => setIsPaused((prev) => ({ ...prev, supports: true }))}
              onMouseLeave={() => setIsPaused((prev) => ({ ...prev, supports: false }))}
            >
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
          )}
        </div>
      </section>

      <div className="h-20"></div>
    </Layout>
  );
}

export default Home;