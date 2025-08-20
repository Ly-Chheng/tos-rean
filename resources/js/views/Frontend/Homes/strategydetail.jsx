import Layout from "../layout";
import { Link } from '@inertiajs/react';
import { useState, useEffect } from "react";

function StrategyDetail({ strategies }) {
    const [activeStrategyId, setActiveStrategyId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    // Set default active strategy
    useEffect(() => {
        if (strategies?.length > 0) {
            setActiveStrategyId(strategies[0].id);
        }
    }, [strategies]);

    // Find active strategy object
    const activeStrategy = strategies?.find((s) => s.id === activeStrategyId);

    // Handle modal open/close
    const openModal = (index = 0) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        if (Array.isArray(activeStrategy?.image)) {
            setCurrentImageIndex((prev) => (prev + 1) % activeStrategy.image.length);
        }
    };

    const prevImage = () => {
        if (Array.isArray(activeStrategy?.image)) {
            setCurrentImageIndex((prev) => (prev - 1 + activeStrategy.image.length) % activeStrategy.image.length);
        }
    };

    useEffect(() => {
        // simulate API call
        setTimeout(() => setLoading(false), 1000);
      }, []);

    // Loading skeleton
    if (loading || !strategies) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-6">
                    <div className="w-full bg-gray-200 aspect-[16/9] max-h-[350px] relative animate-pulse">
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                            <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
                            <div className="h-6 w-1/2 bg-gray-300 rounded mt-2"></div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 mt-10">
                        <div className="flex-1">
                            <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse mb-2"></div>
                            <div className="h-6 w-1/4 bg-gray-300 rounded animate-pulse mb-2"></div>
                            <div className="h-1 w-full bg-gray-300 rounded animate-pulse mb-2"></div>
                            <div className="w-full h-[400px] bg-gray-300 rounded-lg animate-pulse"></div>
                            <div className="h-6 w-1/4 bg-gray-300 rounded animate-pulse mt-2 mb-2"></div>
                            <div className="h-16 w-full bg-gray-300 rounded animate-pulse"></div>
                            <div className="h-6 w-1/4 bg-gray-300 rounded animate-pulse mt-2 mb-2"></div>
                            <div className="w-full h-[200px] bg-gray-300 rounded-lg animate-pulse"></div>
                        </div>
                        <aside className="w-full lg:w-1/3 flex flex-col gap-2">
                            <div className="h-6 w-1/2 bg-gray-300 rounded animate-pulse mb-2"></div>
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex border-2 border-gray-200 rounded-lg animate-pulse"
                                >
                                    <div className="h-[90px] w-[110px] bg-gray-300 rounded-lg p-1"></div>
                                    <div className="p-1 flex-1 flex items-center justify-between">
                                        <div>
                                            <div className="h-5 w-3/4 bg-gray-300 rounded mb-1"></div>
                                            <div className="h-4 w-full bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </aside>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div
                className="w-full bg-blue-200 aspect-[16/9] max-h-[350px] relative"
                style={{
                    background: `linear-gradient(rgba(9, 9, 110, 0.39), rgba(17, 17, 80, 0.51)), url('https://img.interempresas.net/fotos/2875170.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `linear-gradient(rgba(9, 9, 110, 0.39), rgba(17, 17, 80, 0.51)), url('https://img.interempresas.net/fotos/2875170.jpeg') || url('https://via.placeholder.com/1200x675')`,
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl font-bold">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប</h1>
                    <p className="text-lg mt-2">
                        សិស្សត្រៀមប្រឡងបាក់ឌុបត្រូវយល់ដឹង៖ តើបេក្ខជនត្រូវធ្វើអ្វី និងមិនត្រូវអ្វីខ្លះ នៅពេលប្រឡង?
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <nav className="flex space-x-2 text-sm text-gray-500 mb-4">
                    <Link href="/home" className="hover:text-[#0060B4] text-lg">
                        រៀនត្រៀម
                    </Link>
                    <span>/</span>
                    <span className="text-blue-500 text-lg">យុទ្ធសាស្រ្តប្រឡងបាក់ឌុប</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-8 mt-10">
                    <div className="flex-1">
                        {activeStrategy ? (
                            <>
                                <h1 className="text-xl font-semibold mb-2 pt-2">{activeStrategy.title}</h1>
                                <p className="text-md pt-2 mb-2 text-gray-600">{activeStrategy.date || 'N/A'}</p>
                                <hr />
                                <img
                                    src={activeStrategy.thumbnail || (Array.isArray(activeStrategy.image) ? activeStrategy.image[0] : activeStrategy.image) || 'https://via.placeholder.com/400'}
                                    alt={activeStrategy.title}
                                    className="w-full h-[400px] mt-5 object-cover rounded-lg cursor-pointer  overflow-hidden"
                                    onClick={() => openModal(0)}
                                />
                                <h1 className="text-xl font-semibold mb-2 pt-5">ការពិពណ័នា ៖</h1>
                                <p className="text-md text-gray-700">
                                    {activeStrategy.description || 'មិនមានការពិពណ៌នា'}
                                </p>
                                <h1 className="text-lg font-semibold mb-2 pt-10">បណ្តុំរូបភាពពាក់ព័ន្ធ ៖</h1>
                                <div className="flex flex-col gap-3 px-5">
                                    {Array.isArray(activeStrategy.image) && activeStrategy.image.length > 0 ? (
                                        activeStrategy.image.map((img, index) => (
                                            img && (
                                                <img
                                                    key={index}
                                                    src={img || 'https://via.placeholder.com/200'}
                                                    alt={`${activeStrategy.title} - Image ${index + 1}`}
                                                    className="w-full object-contain rounded-lg cursor-pointer"
                                                />
                                            )
                                        ))
                                    ) : (
                                        <img
                                            src={(Array.isArray(activeStrategy.image) ? activeStrategy.image[0] : activeStrategy.image) || activeStrategy.thumbnail || 'https://via.placeholder.com/200'}
                                            alt={activeStrategy.title}
                                            className="w-full object-contain rounded-lg cursor-pointer"
                                        />
                                    )}
                                </div>
                            </>
                        ) : (
                            <p className="text-lg text-gray-600">មិនមានទិន្នន័យ</p>
                        )}
                    </div>

                    <aside className="w-full lg:w-1/3 flex flex-col gap-2">
                        <h3 className="text-xl font-semibold pb-2 text-gray-800">
                            យុទ្ធសាស្រ្តពាក់ព័ន្ធ
                        </h3>
                        {strategies.map((item) => (
                            <Link
                                href="#"
                                key={item.id}
                                className="group"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveStrategyId(item.id);
                                }}
                            >
                                <div
                                    className={`flex border-2 rounded-lg sm:w-[250px] lg:w-auto transform transition-transform duration-300 hover:scale-95 hover:bg-gray-200 gap-2
                                        ${activeStrategyId === item.id ? 'bg-gray-200' : 'border-gray-200'}`}
                                >
                                    <img
                                        src={item.thumbnail || (Array.isArray(item.image) ? item.image[0] : item.image) || 'https://via.placeholder.com/110x90'}
                                        alt={item.title}
                                        className="h-[90px] w-[110px] object-cover p-1 rounded-lg"
                                    />
                                    <div className="p-1 flex-1 flex items-center justify-between">
                                        <div>
                                            <h4 className="text-md font-medium text-gray-800 group-hover:text-[#0A96A4] line-clamp-1">
                                                {item.title}
                                            </h4>
                                            <p className="line-clamp-2 text-gray-600 text-sm">
                                                {item.description.length > 80 ? `${item.description.slice(0, 80)}...` : item.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </aside>
                </div>
            </div>
            <div className="h-10"></div>
        </Layout>
    );
}

export default StrategyDetail;