import Layout from "./Layout";
import React, { useState } from 'react';
import { FaGraduationCap, FaYoutube, FaArrowCircleRight } from "react-icons/fa";
import { GiOpenBook, GiBookCover, GiTeacher } from 'react-icons/gi';
import { RiGitRepositoryFill } from "react-icons/ri";
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
      <section className="bg-blue-50">
        <div className="flex justify-center items-center mt-[30px] md:mt-[80px] lg:mt-[80px] mb-3 px-10 py-10">
          <div className="items-center justify-center text-center">
            <h2 className="text-3xl font-semibold mb-0 text-blue-600">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប</h2>
            <h2 className="text-sm mb-0 mt-3 text-gray-500">
              ជោគជ័យ​ក្នុង​ការ​ប្រឡង​មិនមែន​ផ្អែក​លើ​ចំណេះដឹង​តែ​មួយ​មុខ​នោះ​ទេ
              ប៉ុន្តែ​ក៏​អាស្រ័យ​លើ​របៀប​គ្រប់គ្រង​ដំណើរការ​ប្រឡង​ផង​ដែរ
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide container mx-auto pd-10">
          <div className="flex gap-3 px-8 pt-3 pb-3 min-w-fit lg:grid lg:grid-cols-4 lg:gap-6 p-2">
            {strategies.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm w-[250px] shrink-0 lg:w-auto animate-fadeInUpNoOpacity transform transition-transform duration-300 hover:scale-105"
                style={{ '--index': index }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[100px] md:h-40 object-cover rounded-t"
                />
                <div className="px-3 pb-4">
                  <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-800">{item.title}</h3>
                  <hr className="border-t-3 border-dashed border-gray-300 mt-2" />
                  <p className="text-gray-600 text-sm mt-2">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-10 mb-10">
            <a href="#">
              <button className="flex items-center gap-2 bg-orange-600 text-white p-3 px-5 rounded-lg hover:bg-orange-700 hover:shadow-sm">
                ច្រើនទៀត
                <FaArrowCircleRight />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section>
        {/* Header */}
        <div className="flex justify-center items-center mt-[30px] md:mt-[80px] lg:mt-[80px] mb-6 px-10">
          <div className="items-center justify-center text-center">
            <h2 className="text-3xl font-semibold mb-0 text-blue-600">
              បទបង្ហាញរបស់ សិស្សនិទ្ទេស A
            </h2>
            <h2 className="text-sm mb-0 mt-3 text-gray-500">
              សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣-២០២៤ នៃសាលា​ ប៊ែលធី អន្តរជាតិ
            </h2>
          </div>
        </div>

        {/* Scrollable students section with padding and centered container */}
        <div
          className="relative w-full bg-cover bg-center py-6"
          style={{ backgroundImage: `url(${vectorBackground})` }}
        >
          <div className="overflow-x-auto scrollbar-hide container mx-auto px-10">
            <div className="flex gap-4 px-2 min-w-fit lg:grid lg:grid-cols-6 sm:gap-6 mt-1 mb-2">
              {students.map((student, index) => (
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
                  <p className="text-orange-600 mt-2 font-bold">{student.name}</p>
                </div>
              ))}
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


      <div className="pt-10 flex justify-start">
        <img src={image} alt="Beltei Podcast" className="w-full max-w-4xl" />
      </div>
      {/* <SectionHeader title="BELTEI IU Talk Show" linkText="ច្រើនទៀត" href="/videos" /> */}
      <section className="bg-gray-50">

        <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-20 lg:mt-20 !mb-6 px-10 py-10">
          <h2 className="text-3xl font-semibold mb-0 text-blue-600">
            BELTEI IU Talk Show
          </h2>
          <p className="text-sm mb-0 mt-3 text-gray-500 max-w-lg">
            សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣-២០៤៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
          </p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 sm:gap-3 md:gap-5 md:px-5 px-2 py-5">
            {videos.map((video, index) => (
              <div
                key={video.id}
                // className="bg-white shadow rounded-lg p-2 w-full mb-3"
                className="bg-white rounded-lg shadow-sm w-[250px] shrink-0 lg:w-auto animate-fadeInUpNoOpacity transform transition-transform duration-300 hover:scale-105"
                style={{ '--index': index }}
              >
                <div className="aspect-video w-full overflow-hidden rounded cursor-pointer">
                  <a href="video_view">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      onClick={() => handleVideoClick(index, video.videoId)}
                      onKeyDown={(e) => ['Enter', ' '].includes(e.key) && handleVideoClick(index, video.videoId)}
                      role="button"
                      tabIndex={0}
                      className="w-full h-full object-cover rounded hover:opacity-90 "
                    />
                  </a>

                </div>
                <div className="p-2">
                  <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{video.title}</h3>
                  <div className="flex items-center ">
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
            <button className="flex items-center gap-2 bg-orange-500 text-white p-3 px-5 rounded-lg hover:bg-oragne-600 hover:shadow-sm">
              ច្រើនទៀត
              <FaArrowCircleRight />
            </button>
          </a>
        </div>

      </section>

      <section>
  <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-20 lg:mt-20 !mb-6 px-10 py-10">
    <h2 className="text-3xl font-semibold mb-0 text-blue-600">
      អ្នកផ្តល់វគ្គសិក្សា
    </h2>
    <p className="text-sm mb-0 mt-3 text-gray-500 max-w-lg">
      សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៣-២០៤៤ នៃសាលា ប៊ែលធី អន្តរជាតិ
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

export default Homepage;