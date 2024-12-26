import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { FaRunning, FaUsers, FaTrophy } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ExtraTwo = () => {
  const [hasStartedCounting, setHasStartedCounting] = useState({
    events: false,
    participants: false,
    awards: false,
  });

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init();

    // Intersection Observer to trigger CountUp on scroll
    const handleScroll = () => {
      const eventsElement = document.getElementById("total-events");
      const participantsElement = document.getElementById("participants");
      const awardsElement = document.getElementById("awards");

      // Check if elements are in the viewport
      if (eventsElement && isInViewport(eventsElement) && !hasStartedCounting.events) {
        setHasStartedCounting((prev) => ({ ...prev, events: true }));
      }
      if (participantsElement && isInViewport(participantsElement) && !hasStartedCounting.participants) {
        setHasStartedCounting((prev) => ({ ...prev, participants: true }));
      }
      if (awardsElement && isInViewport(awardsElement) && !hasStartedCounting.awards) {
        setHasStartedCounting((prev) => ({ ...prev, awards: true }));
      }
    };

    // Helper function to check if an element is in the viewport
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasStartedCounting]);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto " >
      {/* Marathon Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-orange-50">
        <div className="container mx-auto text-center text-orange-800">
          <h2 className="text-3xl font-bold mb-8">Marathon Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Events */}
            <div
              className="bg-white rounded-lg p-6 shadow-lg"
              data-aos="fade-up"
              id="total-events"
            >
              <div className="flex items-center justify-center mb-4">
                <FaRunning className="text-5xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Total Events</h3>
              {hasStartedCounting.events && (
                <CountUp start={0} end={850} duration={7} className="text-5xl font-bold text-orange-600" />
              )}
            </div>

            {/* Participants */}
            <div
              className="bg-white rounded-lg p-6 shadow-lg"
              data-aos="fade-up"
              id="participants"
            >
              <div className="flex items-center justify-center mb-4">
                <FaUsers className="text-5xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Participants</h3>
              {hasStartedCounting.participants && (
                <CountUp start={0} end={8500} duration={7} className="text-5xl font-bold text-orange-600" />
              )}
            </div>

            {/* Awards Won */}
            <div
              className="bg-white rounded-lg p-6 shadow-lg"
              data-aos="fade-up"
              id="awards"
            >
              <div className="flex items-center justify-center mb-4">
                <FaTrophy className="text-5xl text-yellow-500" />
              </div>
              <div>
              <h3 className="text-xl font-semibold">Awards Won</h3>
              </div>
              {hasStartedCounting.awards && (
                <CountUp start={0} end={85} duration={7} className="text-5xl font-bold text-orange-600" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Fade delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "The marathon experience was fantastic! The organization was top-notch, and I loved the smooth registration process."
                </p>
                <h4 className="text-xl font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">Participant</p>
              </div>
            </Fade>

            {/* Testimonial 2 */}
            <Fade delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "Organizing this marathon was such an amazing experience. The platform was easy to navigate, and everything ran smoothly."
                </p>
                <h4 className="text-xl font-semibold">Jane Smith</h4>
                <p className="text-sm text-gray-500">Event Organizer</p>
              </div>
            </Fade>

            {/* Testimonial 3 */}
            <Fade delay={700}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "A great community of runners and organizers. I highly recommend participating in future events!"
                </p>
                <h4 className="text-xl font-semibold">Mark Johnson</h4>
                <p className="text-sm text-gray-500">Participant</p>
              </div>
            </Fade>

            {/* Testimonial 4 */}
            <Fade delay={800}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "Loved the flexibility and ease of signing up! I will definitely join more marathons."
                </p>
                <h4 className="text-xl font-semibold">Samantha Green</h4>
                <p className="text-sm text-gray-500">Participant</p>
              </div>
            </Fade>

            {/* Testimonial 5 */}
            <Fade delay={900}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "Fantastic platform with a seamless experience from start to finish. Every detail was well thought out."
                </p>
                <h4 className="text-xl font-semibold">Alan Brown</h4>
                <p className="text-sm text-gray-500">Event Organizer</p>
              </div>
            </Fade>

            {/* Testimonial 6 */}
            <Fade delay={1000}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "This is the best marathon management system I've ever seen. Highly recommended for any event organizer!"
                </p>
                <h4 className="text-xl font-semibold">Emily White</h4>
                <p className="text-sm text-gray-500">Participant</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraTwo;
