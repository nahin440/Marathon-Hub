import React, { useEffect, useState } from 'react';
import img1 from '../../assets/marathon-banner/2149399630.jpg';
import img2 from '../../assets/marathon-banner/4730906_2451282.jpg';
import img3 from '../../assets/marathon-banner/6665.jpg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
        }, 2500); // Slide changes every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-[#fff8e4] mb-16 ">
            <div className=" w-full mx-auto">
                {/* DaisyUI Carousel */}
                <div className=" w-full rounded-lg relative">
                    {/* Slide 1 */}
                    <div
                        id="slide1"
                        className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'
                            }`}
                    >
                        <img
                            src={img1}
                            alt="Marathon Banner 1"
                            className="w-full h-[400px] md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 px-4 flex flex-col justify-center items-center text-[#fff8e4]">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">
                                Join the Ultimate Marathon Experience!
                            </h2>
                            <p className="text-lg mb-4">
                                Be part of an unforgettable journey this season.
                            </p>
                            {/* <button className="btn btn-primary bg-[#15B392] text-white px-6 py-2 rounded-md">
                                Learn More
                            </button> */}
                        </div>
                        <div className='hidden md:flex' >
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <button
                                    aria-label="Previous Slide"
                                    onClick={() => setCurrentSlide(3)}
                                    className="btn btn-circle"
                                >
                                    ❮
                                </button>
                                <button
                                    aria-label="Next Slide"
                                    onClick={() => setCurrentSlide(2)}
                                    className="btn btn-circle"
                                >
                                    ❯
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div
                        id="slide2"
                        className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'
                            }`}
                    >
                        <img
                            src={img2}
                            alt="Marathon Banner 2"
                            className="w-full h-[400px] md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 px-4 flex flex-col justify-center items-center text-[#fff8e4]">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">
                                Push Your Limits
                            </h2>
                            <p className="text-lg mb-4">
                                Take on the challenge and achieve greatness.
                            </p>
                            {/* <button className="btn btn-primary bg-[#15B392] text-white px-6 py-2 rounded-md">
                                Register Now
                            </button> */}
                        </div>
                        <div className='hidden md:flex' >
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <button
                                    aria-label="Previous Slide"
                                    onClick={() => setCurrentSlide(1)}
                                    className="btn btn-circle"
                                >
                                    ❮
                                </button>
                                <button
                                    aria-label="Next Slide"
                                    onClick={() => setCurrentSlide(3)}
                                    className="btn btn-circle"
                                >
                                    ❯
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div
                        id="slide3"
                        className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'
                            }`}
                    >
                        <img
                            src={img3}
                            alt="Marathon Banner 3"
                            className="w-full h-[400px] md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 px-4 flex flex-col justify-center items-center text-[#fff8e4]">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">
                                Celebrate Victory Together
                            </h2>
                            <p className="text-lg mb-4">
                                Join runners from around the world and make history.
                            </p>
                            {/* <button className="btn btn-primary bg-[#15B392] text-white px-6 py-2 rounded-md">
                                Get Started
                            </button> */}
                        </div>
                        <div className='hidden md:block' >
                            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <button
                                    aria-label="Previous Slide"
                                    onClick={() => setCurrentSlide(2)}
                                    className="btn btn-circle"
                                >
                                    ❮
                                </button>
                                <button
                                    aria-label="Next Slide"
                                    onClick={() => setCurrentSlide(1)}
                                    className="btn btn-circle"
                                >
                                    ❯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
