import Layout from "../layout";
import { Link } from '@inertiajs/react';
import { FaPen, FaCheckSquare } from "react-icons/fa";
import { useState, useEffect } from "react";

function StrategyDetail({ strategyDetail, strategies }) {
    const [activeTab, setActiveTab] = useState("essential"); // default tab
    const [checkedItems, setCheckedItems] = useState({}); // store checkbox states
    const [activeStrategyId, setActiveStrategyId] = useState(null); // track active strategy

    // toggle checkbox
    const handleCheckboxChange = (id) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Calculate the percentage of checked items
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const totalItems = strategyDetail?.length || 0;
    const progressPercentage = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

    // Set initial active strategy on mount
    useEffect(() => {
        if (strategies.length > 0) {
            setActiveStrategyId(strategies[0].id);
        }
    }, [strategies]);

    return (
        <Layout>
            {/* Hero section */}
            <div
                className="w-full bg-blue-200 aspect-[16/9] max-h-[350px] relative"
                style={{
                    background: `linear-gradient(rgba(9, 9, 110, 0.39), rgba(17, 17, 80, 0.51)), url('https://img.interempresas.net/fotos/2875170.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl font-bold">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប</h1>
                    <p className="text-lg mt-2">
                        សិស្សត្រៀមប្រឡងបាក់ឌុបត្រូវយល់ដឹង៖ តើបេក្ខជនត្រូវធ្វើអ្វី និងមិនត្រូវអ្វីខ្លះ នៅពេលប្រឡង?
                    </p>
                </div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <nav className="flex space-x-2 text-sm text-gray-500 mb-4">
                    <Link href="/home" className="hover:text-[#0060B4] text-lg">
                        រៀនត្រៀម
                    </Link>
                    <span>/</span>
                    <span className="textblue text-lg">
                        យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប
                    </span>
                </nav>

                {/* Tabs */}
                {/* <nav className="flex space-x-6 border-b mb-6 mt-10 overflow-x-auto">
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
                </nav> */}

                {/* Content + Sidebar */}
                <div className="flex flex-col lg:flex-row w-full gap-6">
                    {activeTab === "essential" && (
                        <div>
                            <div className="rounded-lg">
                                <div className="bg-green-200 min-h-[200px] w-full mb-4 rounded-lg p-4 flex gap-4 items-center">
                                    <img
                                        src="https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-colorful-books-pens-and-ruler-back-to-school-stationery-png-image_16265965.png"
                                        alt="Stationery"
                                        className="w-[130px] h-[130px] p-2 object-contain"
                                    />
                                    <div className="flex flex-col justify-center w-full">
                                        <p className="text-2xl font-semibold mb-3">ផ្ទៀងផ្ទាត់សម្ភារៈមុនទៅប្រឡង</p>
                                        <p className="text-md text-gray-600 mb-3">ត្រួតពិនិត្យសម្ភារៈសំខាន់ៗ មុនចូលប្រឡង ដើម្បីបង្កើនទំនុកចិត្តក្នុងការប្រឡង</p>
                                        <div className="bg-gray-300 h-2 w-full rounded-full overflow-hidden">
                                            <div
                                                className="bg-green-500 h-full rounded-full"
                                                style={{ width: `${progressPercentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xl font-semibold mb-2 pt-2">សម្ភារៈដែលត្រូវមានចាំបាច់</p>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
                                {strategyDetail?.map((item, idx) => (
                                    <div
                                        key={item.id || `${item.title}-${idx}`}
                                        className={`shadow-sm p-1 rounded-lg hover:scale-105 transition-transform relative ${checkedItems[item.id] ? 'border border-green-400' : 'border border-gray-300'} border-2`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={!!checkedItems[item.id]}
                                            onChange={() => handleCheckboxChange(item.id)}
                                            className="w-5 h-5 text-green-600 bg-gray-100 border-green-300 rounded-sm focus:ring-green-500 focus:ring-2 absolute top-2 right-2"
                                        />
                                        <div className="flex items-center justify-center rounded-md h-40 mb-4 bg-white">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="max-h-full max-w-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center text-center space-y-1 mb-2">
                                            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Checklist */}
                    {activeTab === "checklist" && (
                        <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
                            <h2 className="text-xl font-bold mb-4">ផ្ទៀងផ្ទាត់សម្ភារៈ</h2>
                            <ul className="space-y-3">
                                {strategyDetail?.map((item, idx) => (
                                    <li key={item.id || `${item.title}-${idx}`} className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={!!checkedItems[item.id]}
                                            onChange={() => handleCheckboxChange(item.id)}
                                            className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <span className="text-gray-800">{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Right sidebar */}
                    <div className="w-full lg:w-1/3 rounded-lg flex flex-col gap-4">
                        <h3 className="text-xl font-semibold mt-2 mb-4 text-gray-800 line-clamp-2 min-h-[3rem]">
                            យុទ្ធសាស្រ្តពាក់ព័ន្ធ
                        </h3>
                        {strategies.map((item, index) => (
                            <Link
                                href={`/strategy/${item.id}`}
                                key={item.id}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation for now
                                    setActiveStrategyId(item.id);
                                }}
                            >
                                <div
                                    className={`flex border-2 rounded-lg sm:w-[250px] lg:w-auto transform transition-transform duration-300 hover:scale-95 hover:bg-gray-200 items-center gap-3 mb-2  ${activeStrategyId === item.id
                                            ? "border-[#0A96A4] bg-gray-300"
                                            : "border-gray-300"
                                        }`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-[90px] w-[110px] object-cover rounded-lg p-1"
                                    />
                                    <h3 className="text-md font-semibold mt-2 mb-2 text-gray-600 line-clamp-2 min-h-[3rem]">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default StrategyDetail;