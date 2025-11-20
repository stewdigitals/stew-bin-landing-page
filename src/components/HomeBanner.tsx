"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const banners = [
    "/banners/home1.jpg",
    "/banners/home2.jpg",
    "/banners/home3.jpg"
]; // 🔁 Replace with your actual images

const HomeBanner = () => {
    const [current, setCurrent] = useState(0);

    // Auto-slide every 3 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    };

    return (
        <div id="home" className="relative pt-5 w-full h-[30vh] md:h-[50vh] overflow-hidden">
            {banners.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="bg-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[black] text-3xl bg-[#ffffffa0] bg-opacity-50 p-2 z-40 cursor-pointer rounded-full hover:bg-opacity-70 transition"
            >
                <SlArrowLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[black] text-3xl bg-[#ffffffa0] bg-opacity-50 p-2 z-40 rounded-full flex justify-center items-center cursor-pointer hover:bg-opacity-70 transition"
            >
                <SlArrowRight />
            </button>

            {/* Optional: Indicators */}
            <div className="absolute bottom-4 z-40 left-1/2 transform -translate-x-1/2 flex gap-2">
                {banners.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HomeBanner;