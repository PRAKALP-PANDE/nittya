import React from 'react';

const YoutubeVideos = () => {
    return (
        <div className="px-6 py-12 max-w-7xl mx-auto bg-gray-50">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Featured Videos
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/DpHebYSOu-8?si=Y0LiWclDL89ttzq3"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/0wgpVhGYttY?si=Xsa1GqjP2_BSnFet"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/FagOp3KHHDg?si=79vo4xN-9d-2IRTu"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/FagOp3KHHDg?si=79vo4xN-9d-2IRTu"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/FagOp3KHHDg?si=79vo4xN-9d-2IRTu"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default YoutubeVideos;
