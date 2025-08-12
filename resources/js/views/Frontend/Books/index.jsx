import Layout from "../layout";
import { FaGraduationCap, FaSearch, FaFilter } from "react-icons/fa";
import HoverCard from "@/Components/HoverCard";

const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500', 'bg-red-500'];

function Books({ categories = [], stemBooks = [], bookCategories = [] }) {
    return (
        <Layout>
            {/* <div className="flex justify-between mt-10 mb-5">
                <h2 className="text-xl font-semibold mb-4">ប្រភេទសៀវភៅ</h2>
                <a href="#" className="text-blue-600">ច្រើនទៀត</a>
            </div> */}
            {/* <div className="overflow-x-auto scrollbar-hide px-4">
                <div className="flex gap-4 md:gap-6 py-2 min-w-fit justify-center">
                    {bookCategories.map((item, index) => (
                        <div key={index} className="bg-pink-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center
                         min-w-[160px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[230px] 
                         hover:bg-pink-300 transition duration-200"
                        >
                            <img src={item.image} alt={`${item.title} category`} className="h-10 w-10 md:w-16 md:h-16 object-contain mb-4" />
                            <p className="text-center text-gray-800 font-medium text-sm md:text-base">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Search + Filter */}
            <div className="flex justify-end items-center gap-2 mt-6 mb-4">
                <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="ស្វែងរក..."
                        aria-label="Search books"
                        className="h-10 w-full pl-10 pr-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customBlue"
                    />
                </div>
                <button className="h-10 w-10 flex items-center justify-center rounded bg-gray-300 text-white">
                    <FaFilter />
                </button>
            </div>

            {/* STEM Books Section */}
            <div className="flex justify-between mt-10 mb-5">
                <h2 className="text-xl font-semibold mb-4">STEM ប្រចាំថ្ងៃ</h2>
                <a href="#" className="text-blue-600">មើលទាំងអស់</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-4">
                {stemBooks.map((book, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <a href="read_more" className="hover:opacity-90 transition-opacity duration-300    ">
                            <img
                                src={book.image}
                                alt={`${book.title} book cover`}
                                className="hover:opacity-90 shadow-md rounded-lg min-w-[120px] min-h-[180px] w-[160px] h-[220px] lg:w-[200px] lg:h-[300px] object-cover hover:scale-105 duration-300"
                            />
                        </a>

                        <p className="text-center text-gray-700 text-sm sm:text-base">{book.genre}</p>
                    </div>
                ))}
            </div>

            {/* General Knowledge & Other Sections */}
            <div className="flex flex-col md:flex-row mx-auto p-4 gap-4 mt-3">
                <div className="bg-gray-100 shadow-md w-full lg:w-1/2 p-4 rounded-lg flex items-center">
                    <div className="w-full">
                        <div className="flex justify-start">
                            <h2 className="text-xl lg:text-3xl font-bold text-black">ចំណេះដឹងទូទៅ</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-read-aloud-vector-png-image_11064937.png"
                                alt="Reading book icon"
                                className="h-24 lg:h-[170px] mt-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className="bg-blue-300 p-4 rounded-lg h-32">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg lg:text-2xl font-semibold text-white">
                                កម្រងសំណួរ ចម្លើយត្រៀមបាក់ឌុប
                            </h2>
                            <img
                                src="https://img.pikbest.com/png-images/20191012/cartoon-flat-boy-reading-book-png-element_2525052.png!sw800"
                                alt="Boy reading book"
                                className="h-16 lg:h-[100px]"
                            />
                        </div>
                    </div>
                    <div className="bg-customBlue p-4 rounded-lg h-32 text-white flex items-center text-lg lg:text-2xl">
                        អក្សរសិល្ប៍ខ្មែរ តែងសេចក្តី
                    </div>
                </div>
            </div>

            {/* Practice Section */}
            {/* <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-customBlue100 mx-2">
                    <FaGraduationCap className="text-xl" />
                </div>
                <div className="flex justify-between mt-10 mb-5">
                    <h2 className="text-xl font-semibold mb-4">លំហាត់អនុវត្តន៍</h2>
                    <a href="#" className="text-blue-600">ច្រើនទៀត</a>
                </div>
            </div> */}

            {/* <div className="overflow-x-auto scrollbar-hide px-4">
                <div className="flex gap-4 md:gap-6 py-2 min-w-fit justify-center">
                    {bookCategories.map((item, index) => (
                        <HoverCard
                            key={index}
                            title={item.title}
                            image={item.image}
                            initialColor={colors[index % colors.length]}
                        />
                    ))}
                </div>
            </div> */}

            {/* Stats */}
            <div className="flex justify-center items-center mt-5 md-3 sm:md-6 text-xl font-bold">
                10,000 Books in 15 Categories
            </div>

            {/* Categories Grid */}
            <div className="items-center justify-center gap-3 sm:gap-4 mt-4 md:mt-4 px-4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {categories.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="border border-gray-300 shadow-sm hover:bg-pink-50 flex items-center justify-center rounded-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="sm:h-[150px] sm:w-[150px] h-[100px] w-[100px] object-contain p-4"
                            />
                        </div>
                        <p className="mt-2 text-center font-medium">{item.title}</p>
                    </div>
                ))}
            </div>

            <div className="h-10"></div>
        </Layout>
    );
}

export default Books;
