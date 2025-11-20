'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUserShield, FaLeaf, FaHeadset } from 'react-icons/fa';
import Heading from './Heading';

const points = [
    { label: '8+ Years Experience', icon: <FaAward /> },
    { label: 'Certified Team', icon: <FaUserShield /> },
    { label: 'Eco-Friendly Methods', icon: <FaLeaf /> },
    { label: '24/7 Customer Support', icon: <FaHeadset /> },
];

const WhyChooseUsSection = () => {
    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* <h2 className="text-4xl font-extrabold text-green-800 mb-12 uppercase tracking-wide">
          Why Choose Us
        </h2> */}
                <Heading title="Why Choose Us" />

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {points.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg"
                        >
                            <div className="text-green-600 text-3xl mb-4">
                                {item.icon}
                            </div>
                            <span className="text-lg font-semibold text-gray-800">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
