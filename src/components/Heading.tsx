"use client"
import React from 'react'
import { motion } from 'framer-motion';
interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-xl md:text-3xl font-extrabold uppercase tracking-widest text-green-800 mb-12"
        >
            {title}
        </motion.h2>
    )
}

export default Heading