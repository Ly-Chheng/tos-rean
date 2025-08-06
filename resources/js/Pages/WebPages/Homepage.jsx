import Layout from "./Layout";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "@/Components/SectionHeader";
import image from '../../assets/images/beltei_podcast.png';


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
  }
];

const students = [
  {
    name: "ជី ម៉ូលិកា",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
  },
  {
    name: "សុខ ស្រីនាង",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
  },
  {
    name: "លឹម វណ្ណា",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
  },
  {
    name: "សម រង្សី",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
  },
  {
    name: "សម រង្សី",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
  }
];
const videos = [
  {
    title: "បទបង្ហាញ៖ ការរៀនដើម្បីទទួលបាននិទ្ទេស A",
    duration: "15 នាទី",
    videoUrl: "https://www.youtube.com/embed/bpFHTq529ME",
  },
  {
    title: "បទបង្ហាញ៖ យុទ្ធសាស្រ្តសិក្សាថ្នាក់ទី១២",
    duration: "20 នាទី",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
  {
    title: "បទបង្ហាញ៖ របៀបរៀនអោយមានប្រសិទ្ធភាព",
    duration: "18 នាទី",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const dataList = [
  "សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ",
  "សាលា ប៊ែលធី អន្តរជាតិ",
  "វិទ្យាស្ថានពាណិជ្ជកម្ម",
];



function Homepage() {
  return (
    <Layout>
      <div className="flex justify-center items-center mb-6">
        <img
          src="https://img.freepik.com/free-vector/back-school-cover-illustration-with-education-elements_47987-23351.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Banner"
          className="max-h-64 object-cover w-full rounded"
        />
      </div>

      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប​</h2>
        <a href="#" className="text-blue-600">ច្រើនទៀត</a>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 min-w-fit lg:grid lg:grid-cols-4 lg:gap-6 lg:px-0">
          {strategies.map((item, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-lg shadow-md w-[250px] shrink-0 lg:w-auto mb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded mb-3 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-base font-semibold mb-2 text-gray-500">
                {item.title}
              </h3>
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-customBlue mr-2 text-white">
                  <FaGraduationCap />
                </div>
                <p className="text-gray-400 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionHeader title="បទបង្ហាញរបស់ សិស្សនិទ្ទេស A" linkText="ច្រើនទៀត" href="#" />
      <div className="overflow-x-auto scrollbar-hide sm:mt-1 lg:mt-2">
        <div className="flex px-6 justify-center gap-x-6 md:gap-x-10 lg:gap-x-12">
          {students.map((student, index) => (
            <div key={index} className="flex flex-col items-center shrink-0">
              <img
                src={student.image}
                alt={student.name}
                className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 object-cover rounded-full"
              />
              <p className="text-gray-500 mt-2">{student.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10 flex justify-start">
        <img src={image} alt="Beltei Podcast" className="w-full max-w-4xl" />
      </div>

      <SectionHeader title="BELTEI IU Talk Show" linkText="ច្រើនទៀត" href="#" />
      <div className="grid  lg:grid-cols-3  md:grid-cols-2 gap-10 lg:px-24 px-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-2 w-full lg:mb-3 sm:mb-1"
          >
            <div className="aspect-video w-full overflow-hidden rounded">
              <iframe
                className="w-full h-full p-1 rounded"
                src={video.videoUrl}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              {video.title}
            </h3>
            <p className="text-sm text-gray-500">រយៈពេល៖ {video.duration}</p>
          </div>
        ))}
      </div>

      <SectionHeader title="អ្នកផ្តល់វគ្គសិក្សា" linkText="" href="#" />
      <div className="px-6 lg:px-10">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide justify-center">
          {dataList.map((item, index) => (
            <div
              key={index}
              className="text-center text-gray-800 bg-blue-300 px-6 py-3 rounded-lg shadow whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
}

export default Homepage;
