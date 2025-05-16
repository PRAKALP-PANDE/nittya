import Link from 'next/link';
import React from 'react';

const YoutubeVideos = () => {
    // Video data array for easier management
    const videos = [
        {
            id: 'DpHebYSOu-8',
            title: 'Introduction to React Hooks',
            description: 'Learn how to use React Hooks in your applications'
        },
        {
            id: '0wgpVhGYttY',
            title: 'Advanced CSS Techniques',
            description: 'Modern CSS patterns for better UI development'
        },
        {
            id: 'GbLcsgd_TsI',
            title: 'UI/UX Design Principles',
            description: 'Essential design principles for developers'
        },
        {
            id: 'FagOp3KHHDg',
            title: 'TypeScript for Beginners',
            description: 'Getting started with TypeScript in your projects'
        },
        {
            id: 'ub2-Zql11Lg',
            title: 'Next.js Crash Course',
            description: 'Build modern web apps with Next.js'
        },
        {
            id: 'pPM4tTKTnFQ',
            title: 'UI/UX Design Principles',
            description: 'Essential design principles for developers'
        },
        {
            id: 'jPsnc0m9xuo',
            title: 'UI/UX Design Principles',
            description: 'Essential design principles for developers'
        },
        {
            id: '8Z2_o-6Q03k',
            title: 'State Management in 2023',
            description: 'Comparing Redux, Context, and Zustand'
        }
    ];

    return (
        <div className="px-4 py-16 w-full bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center mb-16">
                <h2 className="text-6xl font-bold text-gray-900 mb-4 cookie-regular">
                    Featured <span className="text-[#2d9155]">Videos</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Watch our latest tutorials and learn from industry experts
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {videos.map((video, index) => (
                    <div
                        key={video.id}
                        className="rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                        <div className="rounded-lg overflow-hidden shadow-md bg-white">
                            <iframe
                                className="w-full h-64"
                                src={`https://www.youtube.com/embed/${video.id}?si=Y0LiWclDL89ttzq3`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <Link href="https://www.youtube.com/@NutritionWithVidya" className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-500 bg-gradient-to-r from-[#166534] to-[#2d9155] rounded-xl shadow-lg group hover:shadow-[0_10px_25px_-10px_rgba(45,145,85,0.4)] hover:translate-y-[-2px]">
                    View All Videos
                </Link>
            </div>
        </div>
    );
};

export default YoutubeVideos;