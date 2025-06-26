import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight, BsPlay } from "react-icons/bs";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const testimonials = [
  {
    id: 1,
    name: "Lassad Zrig",
    image: "LassadZrig.png",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    videoUrl: "/lasaadzrig.mp4",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
];

const TestimonialsSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const toggleVideo = (testimonialId) => {
    setPlayingVideo(playingVideo === testimonialId ? null : testimonialId);
  };

  return (
    <section
      id="testimonials"
      className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-amber-50 to-white"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          style={{ color: "#1a1a1a" }}
        >
          What our happy client say
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
          Things that make it the best place to start trading
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12 py-4">
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-lg border border-amber-100 h-full flex flex-col hover:shadow-xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #fefce8 50%, #fef3c7 100%)",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.1), 0 0 0 1px rgba(217, 119, 6, 0.1)",
                }}
              >
                {/* Profile Image */}
                <motion.div
                  variants={fadeIn("down", 0.4 * (index + 1))}
                  className="w-20 h-20 mx-auto mb-4 relative"
                >
                  <motion.img
                    variants={fadeIn("up", 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-3 border-amber-200 shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-amber-100 opacity-20"></div>
                </motion.div>

                {/* Star Rating */}
                <motion.div
                  variants={fadeIn("up", 0.4 * (index + 1))}
                  className="flex justify-center mb-3"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span
                      key={starIndex}
                      variants={fadeIn("up", 0.1 * starIndex)}
                      className="text-amber-400 text-base mx-0.5"
                      style={{ color: "#f59e0b" }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>

                {/* Name */}
                <motion.h3
                  variants={textVariant(0.3)}
                  className="font-bold text-lg mb-3 text-gray-900"
                >
                  {testimonial.name}
                </motion.h3>

                {/* Testimonial Text */}
                <motion.p
                  variants={fadeIn("up", 0.6 * (index + 1))}
                  className="text-gray-700 mb-6 flex-grow leading-relaxed text-sm"
                >
                  {testimonial.text}
                </motion.p>

                {/* Video Section - Fixed size container */}
                <motion.div
                  variants={fadeIn("up", 0.7 * (index + 1))}
                  className="mt-auto flex justify-center"
                >
                  {/* Fixed container with 9:16 aspect ratio (mobile portrait) */}
                  <div
                    className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-lg border-2 border-amber-200"
                    style={{
                      width: "160px",
                      height: "280px",
                      aspectRatio: "9/16",
                    }}
                  >
                    {playingVideo === testimonial.id ? (
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        autoPlay
                        onPause={() => setPlayingVideo(null)}
                        onEnded={() => setPlayingVideo(null)}
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div
                        className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center"
                        onClick={() => toggleVideo(testimonial.id)}
                      >
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>

                        {/* Decorative phone frame */}
                        <div className="absolute inset-4 border-2 border-gray-600/30 rounded-lg bg-gradient-to-b from-gray-800/20 to-gray-900/20"></div>

                        {/* Play Button */}
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative z-20 w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-300"
                        >
                          <BsPlay className="w-6 h-6 text-white ml-0.5 drop-shadow-lg" />
                        </motion.div>

                        {/* Video info overlay */}
                        <div className="absolute bottom-3 left-3 right-3 z-10">
                          <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-amber-400/20">
                            <p className="text-white text-xs font-medium text-center">
                              📱 Mobile Video
                            </p>
                          </div>
                        </div>

                        {/* Duration badge */}
                        <div className="absolute top-3 right-3 z-10">
                          <div className="bg-amber-500/90 backdrop-blur-sm px-2 py-1 rounded-md text-white text-xs font-semibold">
                            9:16
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
                        <div className="absolute bottom-6 right-4 w-2 h-2 bg-white/40 rounded-full opacity-50"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            variants={fadeIn("right", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border-2 border-amber-300 bg-white flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 cursor-pointer transition-all duration-300 shadow-md"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn("left", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border-2 border-amber-300 bg-white flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 cursor-pointer transition-all duration-300 shadow-md"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
