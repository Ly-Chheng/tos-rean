import Layout from "../layout";
import { Link } from '@inertiajs/react';
import { FaPen, FaCheckSquare } from "react-icons/fa";
import { useState } from "react";

function StrategyDetail({ strategyDetail }) {
    const [activeTab, setActiveTab] = useState("essential"); // default tab

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <nav className="flex space-x-2 text-sm text-gray-500 mb-4">
                    <Link href="/home" className="hover:text-[#0060B4] text-lg">
                        រៀនត្រៀម
                    </Link>
                    <span>/</span>
                    <span className="textblue text-lg">
                        សម្ភារៈដែលត្រូវត្រៀមមុនប្រឡងបាក់ឌុប
                    </span>
                </nav>

                {/* Tabs */}
                <nav className="flex space-x-6 border-b mb-6 mt-10">
                    <button
                        className={`font-semibold text-xl pb-2 flex gap-2 items-center ${activeTab === "essential"
                            ? "text-orange-600 border-b-4 border-orange-600"
                            : "text-gray-600 hover:text-orange-600"
                            }`}
                        onClick={() => setActiveTab("essential")}
                    >
                        <FaPen />
                        សម្ភារៈដែចំបាច់
                    </button>
                    <button
                        className={`font-semibold text-xl pb-2 flex items-center gap-2 ${activeTab === "checklist"
                            ? "text-orange-600 border-b-4 border-orange-600"
                            : "text-gray-600 hover:text-orange-600"
                            }`}
                        onClick={() => setActiveTab("checklist")}
                    >
                        <FaCheckSquare />
                        ផ្ទៀងផ្ទាត់សម្ភារៈមុនពេលទៅប្រឡង
                    </button>
                </nav>

                {/* Tab Content */}
                {activeTab === "essential" && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {strategyDetail.map((item, idx) => (
                            <div key={idx} className="shadow-sm p-1 rounded-lg border border-gray-200 hover-scale5">
                                <div className="flex items-center justify-center rounded-md h-40 mb-4 bg-white">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>

                                <div className="flex flex-col items-center text-center space-y-1 mb-2">
                                    <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                                    <p className="text-gray-600 font-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "checklist" && (
                    <div className="flex flex-col space-y-4">
                        {strategyDetail.map((item, idx) => (
                            <div key={idx}>
                                <div className="flex items-center justify-between">
                                    <div className="ml-2">
                                        <label
                                            htmlFor={`checkbox-${idx}`}
                                            className="font-semibold text-gray-600 text-lg"
                                        >
                                            {item.title}
                                        </label>
                                        <p
                                            id={`checkbox-text-${idx}`}
                                            className="text-sm font-normal text-gray-500"
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center h-5">
                                        <input
                                            id={`checkbox-${idx}`}
                                            aria-describedby={`checkbox-text-${idx}`}
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                    </div>
                                </div>
                                <hr className="border-gray-300" />
                            </div>
                        ))}
                        {/* Optional Button */}
                        {/* <div className="mt-4">
                            <button className="w-full py-3 px-5 bg-orange-500 text-white font-semibold rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-orange-600">
                                ប៊ូតុងប្រតិបត្តិការ
                            </button>
                        </div> */}
                    </div>
                )}

            </div>
        </Layout>
    );
}

export default StrategyDetail;
