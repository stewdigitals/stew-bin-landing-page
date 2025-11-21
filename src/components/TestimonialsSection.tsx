'use client';

import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from './Heading';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Ravi Mehta',
        feedback: 'Stew Management handled our industrial waste with professionalism. Highly recommend their services!',
        company: 'EcoTex Industries',
    },
    {
        name: 'Nikita Sharma',
        feedback: 'Their team is reliable, certified, and always on time. Great support and eco-friendly process!',
        company: 'UrbanGreen Co.',
    },
    {
        name: 'Kunal Desai',
        feedback: 'Excellent consultancy and execution of green projects. The team is well-versed in regulations.',
        company: 'GreenCore Pvt. Ltd.',
    },
    {
        name: 'Pooja Verma',
        feedback: 'We’ve reduced 40% of our waste thanks to Stew’s customized waste audit strategy.',
        company: 'MetroTech Solutions',
    },
];

const TestimonialsSection = () => {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const current = testimonials[index];

    return (
        <section id='testimonial' className="py-20  ">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <Heading title="Happy Clients" />

                <div className="grid md:grid-cols-2 gap-2">
                    <div className="relative p-3  h-full">


                        {/* Testimonial Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white  p-8 sm:p-10 mx-auto max-w-xl relative"
                            >
                                <FaQuoteLeft className="text-green-200 text-4xl absolute top-5 left-5" />
                                <p className="text-lg sm:text-xl p-3 text-green-700 italic mb-6 relative z-10">
                                    {/* "{current.feedback}" */}
                                    {`"${current.feedback}"`}
                                </p>

                                <div className="border-t border-t-[#80808055] pt-4">
                                    <h4 className="text-green-700 text-lg font-semibold">{current.name}</h4>
                                    <p className="text-sm text-gray-500">{current.company}</p>
                                    <div className="flex justify-center cursor-pointer mt-2 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <div className="nav flex justify-center items-center gap-6">
                            {/* Arrows */}
                            <button
                                onClick={handlePrev}
                                className=" bg-white p-3 rounded-full shadow cursor-pointer z-20 hover:bg-green-100"
                            >
                                <FaChevronLeft className="text-green-600 text-xl" />
                            </button>
                            <p className='text-2xl text-gray-500' >{index + 1}/{testimonials.length}</p>
                            <button
                                onClick={handleNext}
                                className=" bg-white p-3 rounded-full shadow cursor-pointer z-20 hover:bg-green-100"
                            >
                                <FaChevronRight className="text-green-600 text-xl" />
                            </button>
                        </div>
                    </div>
                    <div className=" hidden md:block h-[80vh] w-full p-5">
                        <Image width={1920} height={1080} className='w-full h-full ' src={"/images/feedback1.gif"} alt='testimonial image' />

                    </div>
                </div>



            </div>
        </section>
    );
};

export default TestimonialsSection;
