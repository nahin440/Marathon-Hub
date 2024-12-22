import React from 'react';
import img1 from '../../assets/marathon-banner/2149399630.jpg';
import img2 from '../../assets/marathon-banner/4730906_2451282.jpg';
import img3 from '../../assets/marathon-banner/6665.jpg';

const Banner = () => {
    return (
        <div className="w-full bg-[#fff8e4]   mb-16 mt-8">
            <div className="container w-full mx-auto ">
                {/* DaisyUI Carousel */}
                <div className="carousel w-full rounded-lg">
                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={img1}
                            alt="Marathon Banner 1"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 px-4 flex flex-col justify-center  items-center text-[#fff8e4]">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">
                                Join the Ultimate Marathon Experience!
                            </h2>
                            <p className="text-lg">
                                Be part of an unforgettable journey this season.
                            </p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4  md:top-1/2 ">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={img2}
                            alt="Marathon Banner 2"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 px-4 flex flex-col justify-center items-center text-[#fff8e4]">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">
                                Push Your Limits
                            </h2>
                            <p className="text-lg">
                                Take on the challenge and achieve greatness.
                            </p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4 md:top-1/2 ">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={img3}
                            alt="Marathon Banner 3"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex px-4 flex-col justify-center items-center text-[#fff8e4]">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">
                                Celebrate Victory Together
                            </h2>
                            <p className="text-lg">
                                Join runners from around the world and make history.
                            </p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4 md:top-1/2 ">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
