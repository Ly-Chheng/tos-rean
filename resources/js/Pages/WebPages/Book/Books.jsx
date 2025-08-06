import Layout from "../Layout";
import SectionHeader from "@/Components/SectionHeader";

const bookItems = [
  {
    title: "គណិតវិទ្យា",
    image: "https://cdn-icons-png.freepik.com/512/4720/4720458.png",
  },
  {
    title: "កម្រងវិញ្ញ្ញាសារឆ្នាំចាស់",
    image: "https://cdn-icons-png.flaticon.com/512/2106/2106584.png",
  },
  {
    title: "វេយ្យាករណ៍",
    image: "https://icon-library.com/images/grammar-icon/grammar-icon-16.jpg",
  },
  {
    title: "សៀវភៅជា Audio",
    image: "https://cdn-icons-png.flaticon.com/512/4539/4539103.png",
  },
];

function Books() {
  return (
    <Layout>
      <SectionHeader title="ប្រភេទសៀវភៅ" linkText="" href="#" />
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-center gap-6 py-4">
          {bookItems.map((item, index) => (
            <div
              key={index}
              className="bg-pink-200 p-4 rounded-lg shadow flex flex-col items-center justify-center 
                        max-w-[250px] h-auto min-h-[150px] w-full sm:max-w-[160px] sm:min-h-[90px] 
                        md:max-w-[250px] md:min-h-[150px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-2/5 h-auto mb-2 max-w-[80px] sm:max-w-[60px] md:max-w-[80px]"
              />
              <p className="text-sm font-semibold text-gray-700 text-center mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Books;