import Layout from '../layout';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import vector_bg from '../../../assets/images/vector_bg.png';
import useAutoScroll from "../../../hook/useAutoScroll";

function Audio({ students }) {
    const [loading, setLoading] = useState(true);
    const [isPaused, setIsPaused] = useState({ students: false });
    const studentsRef = useRef(null);

    useAutoScroll(
        [
            { ref: studentsRef, data: students, speed: 1, key: 'students' }
        ],
        isPaused
    );

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); // simulate API fetch
    }, []);

    // Skeleton loader while loading
    if (loading) {
        return (
            <Layout>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-10 px-4 md:px-0">
                    <div className="w-full md:w-[200px] h-[200px] bg-gray-300 rounded-lg animate-pulse mx-auto"></div>
                    <aside className="col-span-2 mt-6 md:mt-0">
                        <div className="w-48 h-6 bg-gray-300 rounded animate-pulse mb-4"></div>
                        <div className="w-64 h-6 bg-gray-300 rounded animate-pulse mb-6"></div>
                        <div className="w-full h-24 bg-gray-200 rounded animate-pulse mb-6"></div>
                        <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
                    </aside>
                </div>

                <section className="mt-10 px-4 md:px-10">
                    <div className="justify-center items-center mt-10 mb-6 text-center">
                        <div className="w-72 h-10 bg-gray-300 rounded-md animate-pulse mx-auto mb-2"></div>
                        <div className="w-64 h-5 bg-gray-200 rounded-md animate-pulse mx-auto"></div>
                    </div>

                    <div className="flex overflow-x-auto scrollbar-hide mt-6 gap-4">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex flex-col items-center shrink-0 mb-6 animate-pulse">
                                <div className="w-20 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] bg-gray-300 rounded-full shadow-lg border aspect-square"></div>
                                <div className="w-16 h-3 bg-gray-200 rounded mt-2"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </Layout>
        );
    }

    // Real content
    return (
        <Layout>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-10 px-4 md:px-0 bg-blue-50 rounded-lg shadow-lg p-6 md:p-10">
                <div className='flex justify-center md:justify-center'>
                    <img
                        className="w-[250px] md:w-[300px] h-[180px] md:h-[200px] object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                        alt="profile"
                    />
                </div>
                <aside className="col-span-2 mt-6 md:mt-0 px-4">
                    <div className='flex flex-row gap-4 sm:gap-6 items-start sm:items-center'>
                        <h1 className="text-2xl sm:text-3xl font-semibold text-orange-400">ជួបជាមួយ ៖ </h1>
                        <h1 className="text-2xl sm:text-3xl text-gray-700 font-semibold">សេង ហ្គេកលី</h1>
                    </div>

                    <p className='mt-6 text-base sm:text-lg'>
                        ការពិពណ៌នារការងារ គឺជាការពិពណ៌នាលំអិតដោយផ្តោតសំខាន់លើភារៈកិច្ច និងការទទួលខុសត្រូវដែលពាក់ព័ន្ធទៅនឹងការប្រតិបត្តិការងារនោះ
                    </p>

                    <audio
                        controls
                        src="https://www.dropbox.com/scl/fi/7wfldtnr5lapp46lgcr9y/Sreynea-mp3.mp3?rlkey=w85ov8w1mii2zwkywycm9d8q3&raw=1"
                        className="w-full mt-4 rounded-lg shadow"
                    />
                </aside>
            </div>

            <section className='mt-10'>
                <div className="text-start mb-2 px-10 py-5">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                        បទបង្ហាញរបស់ សិស្សនិទ្ទេស A
                    </h2>
                    {/* <h2 className="text-base sm:text-lg mt-2 text-gray-500">
                        សិស្សនិទ្ទេស A អតីតសិស្សថ្នាក់ទី12 ក្នុងឆ្នាំសិក្សា២០២៤​ និង ២០២៥
                    </h2> */}
                </div>

                <div
                    className="relative w-full bg-cover bg-center px-10"
                    style={{ backgroundImage: `url(${vector_bg})` }}
                >
                    <div
                        className="flex overflow-x-auto scrollbar-hide mt-6 gap-4 lg:gap-10 py-4"
                        ref={studentsRef}
                        onMouseEnter={() => setIsPaused(prev => ({ ...prev, students: true }))}
                        onMouseLeave={() => setIsPaused(prev => ({ ...prev, students: false }))}
                    >
                        {students.map(student => (
                            <div key={student.id} className="flex flex-col items-center shrink-0 mb-4">
                                <Link href="audio">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-20 sm:w-[120px] lg:w-[150px] h-20 sm:h-[120px] lg:h-[150px] object-cover rounded-full shadow-lg border aspect-square"
                                    />
                                </Link>
                                <p className="text-orange-600 mt-2 text-sm sm:text-base">{student.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Audio;
