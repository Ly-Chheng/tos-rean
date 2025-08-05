import Layout from "./Layout";
import { FaGraduationCap } from "react-icons/fa";


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
        <h2 className="text-2xl font-semibold mb-4">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប​</h2>
        <a href="#" className="text-blue-600">ច្រើនទៀត</a>
      </div>
     

      {/* Cards */}
      <div className="overflow-x-auto">
  <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 min-w-max">
    {strategies.map((item, index) => (
      <div key={index} className="bg-white p-2 rounded-lg shadow-md w-[250px] shrink-0 lg:w-auto">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover rounded mb-3 transition-transform duration-300 hover:scale-105"
        />
        <h3 className="text-base font-semibold mb-2 text-gray-500">{item.title}</h3>
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

    </Layout>
  );
}

export default Homepage;
