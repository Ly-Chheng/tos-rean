import Layout from "../layout";
import React from 'react';
import { FaGraduationCap, FaYoutube } from "react-icons/fa";
import Podcast from "../../../assets/images/podcast.png";
import Slider from "../../../components/Slider";
import SectionHeader from "../../../components/SectionHeader";
import vectorBackground from '../../../assets/images/vector_bg.png';

const strategies = [
  {
    title: "ការប្រឡង ថ្នាក់ទី១២ ឆ្នាំ២០២៣",
    image: "https://www.sparkadmissions.com/wp-content/uploads/2020/04/How_to_Get_Good_Grades_in_High_School.jpg",
    detail: "រយៈពេល៖ ២០០ នាទី",
  },
  {
    title: "សៀវភៅបំពេញលំហាត់វិញ្ញាសា",
    image: "https://www.sparkadmissions.com/wp-content/uploads/2020/04/How_to_Get_Good_Grades_in_High_School.jpg",
    detail: "រយៈពេល៖ ២០០ នាទី",
  },
  {
    title: "មេរៀនគន្លឹះជាប់លើកទី១",
    image: "https://www.rootsofaction.com/wp-content/uploads/2012/09/Good-grades-1.jpg",
    detail: "រយៈពេល៖ ១០០ នាទី",
  },
  {
    title: "មេរៀនគន្លឹះជាប់លើកទី១",
    image: "https://myfirstnestegg.com/wp-content/uploads/student-proudly-holds-good-grade.png",
    detail: "រយៈពេល៖ ១០០ នាទី",
  },

];

const students = [
  {
    name: "ជី ម៉ូលិកា",
    image: "https://thumbs.dreamstime.com/b/beauty-woman-portrait-girl-beautiful-face-smiling-closeup-happy-perfect-smile-white-teeth-camera-attractive-healthy-76138194.jpg",
  },
  {
    name: "សុខ ស្រីនាង",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
  },
  {
    name: "លឹម វណ្ណា",
    image: "https://img.freepik.com/free-photo/girl-city_1157-5086.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "សុវណ្ណ រដ្ឋាបុត្រ",
    image: "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-red-t-shirt-black-jeans-holding-different-copybooks-files-smiling-with-bag-white_140725-18639.jpg",
  },
  {
    name: "រ័ត្ន ដាភា",
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/910/897/small_2x/happy-student-boy-with-books-isolated-png.png",
  },
  {
    name: "សុវណ្ណ រដ្ឋាបុត្រ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
  }

];

const videos = [
  {
    title: "បទបង្ហាញ៖ ការរៀនដើម្បីទទួលបាននិទ្ទេស A",
    duration: "15 នាទី",
    videoId: "bpFHTq529ME",
    thumbnail: "https://img.youtube.com/vi/bpFHTq529ME/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/bpFHTq529ME",
  },
  {
    title: "បទបង្ហាញ៖ យុទ្ធសាស្រ្តសិក្សាថ្នាក់ទី១២",
    duration: "20 នាទី",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "បទបង្ហាញ៖ របៀបរៀនអោយមានប្រសិទ្ធភាព",
    duration: "18 នាទី",
    videoId: "tgbNymZ7vqY",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const dataList = [
  { name: "សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ", link: "https://www.beltei.edu.kh/biu" },
  { name: "សាលា ប៊ែលធី អន្តរជាតិ", link: "https://www.beltei.edu.kh/bis" },
  { name: "ប៊ែលធី គ្រុប", link: "https://www.beltei.edu.kh/" },
];

function Home() {
  return (
    <Layout>
      <Slider />
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប</h2>
        <a href="#" className="text-blue-600">ច្រើនទៀត</a>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 min-w-fit lg:grid lg:grid-cols-4 lg:gap-6 lg:px-0">
          {strategies.map((item, index) => (
            <div key={index} className="bg-white p-2 rounded-lg shadow-md w-[250px] shrink-0 lg:w-auto mb-2">
              <img src={item.image} alt={item.title}
                className="w-full h-40 object-cover rounded mb-3 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-base font-semibold mb-2 text-gray-500">{item.title}</h3>
              <div className="flex items-center">
                <div className="p-1 rounded-full color mr-2 text-white">
                  <FaGraduationCap />
                </div>
                <p className="text-gray-400 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionHeader title="បទបង្ហាញរបស់ សិស្សនិទ្ទេស A" linkText="ច្រើនទៀត" href="#" />
      <div className="relative w-full bg-fill bg-center"
        style={{ backgroundImage: `url(${vectorBackground})`, backgroundSize: 'cover' }}
      >
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 min-w-fit lg:grid lg:grid-cols-6 sm:gap-6 mt-1 mb-2">
            {students.map((student, index) => (
              <div key={index} className="flex flex-col items-center shrink-0">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 shadow-lg border border-spacing-7 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] object-cover rounded-full"
                />
                <p className="text-gray-500 mt-2">{student.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-start">
        <img src={Podcast} alt="Logo" className="w-full max-w-4xl" />
      </div>
      <SectionHeader title="BELTEI IU Talk Show" linkText="ច្រើនទៀត" href="#" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-5 md:gap-10 lg:px-24 px-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-2 w-full lg:mb-3 sm:mb-1">
            <div className="aspect-video w-full overflow-hidden rounded cursor-pointer">
              <a href="video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  onClick={() => console.log(video.videoId)}
                  onKeyDown={(e) => e.key === 'Enter' && console.log(video.videoId)}
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
          {dataList.map((item, index) => (
            <a
              key={index}
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

export default Home;