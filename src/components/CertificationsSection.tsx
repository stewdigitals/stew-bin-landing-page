"use client";

import React, { useRef, useState, MouseEvent } from "react";
import {
    GiFlowerPot,
    GiPlantSeed,
    GiGardeningShears,
    GiWateringCan,
    GiWoodenChair,
} from "react-icons/gi";
import { FaSeedling, FaBoxOpen, FaHome } from "react-icons/fa";
import { MdLocalFlorist, MdAddShoppingCart, MdCompost } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import { PiShovelFill } from "react-icons/pi";

interface Certification {
    name: string;
    icon: React.ReactNode;
}

const certifications: Certification[] = [
    { name: "POTS", icon: <GiFlowerPot /> },
    { name: "Grow bags", icon: <BsFillBagFill /> },
    { name: "garden tools", icon: <GiGardeningShears /> },
    { name: "gardening kits", icon: <FaBoxOpen /> },
    { name: "vegetable seeds", icon: <GiPlantSeed /> },
    { name: "green & fruits seeds", icon: <FaSeedling /> },
    { name: "Flower Seeds", icon: <MdLocalFlorist /> },
    { name: "watering equipments", icon: <GiWateringCan /> },
    { name: "pot stand", icon: <GiWoodenChair /> },
    { name: "decor", icon: <FaHome /> },
    { name: "accessories", icon: <MdAddShoppingCart /> },
    { name: "composter", icon: <MdCompost /> },
    { name: "soil & manures", icon: <PiShovelFill /> },
];

const CertificationsSection: React.FC = () => {
    // Use ref with explicit typing of HTMLDivElement or null
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="py-12 bg-white border-t border-t-[#80808025]">
            <div className="max-w-6xl mx-auto px-4 text-center select-none">
                {/* Optional heading */}
                {/* <h2 className="text-2xl font-semibold mb-8">Our Certifications & Partners</h2> */}

                <div
                    ref={scrollRef}
                    className="overflow-x-auto hide-scrollbar -mx-4 px-4 cursor-grab active:cursor-grabbing"
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    <div className="flex space-x-5 py-10 px-4 whitespace-nowrap">
                        {certifications.map((item, i) => (
                            <div
                                key={i}
                                className="inline-flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition-all duration-300 group min-w-[180px]"
                            >
                                <div className="bg-green-100 text-green-700 p-3 rounded-full text-2xl mb-3 group-hover:scale-110 transition">
                                    {item.icon}
                                </div>
                                <div className="text-xs text-center font-semibold uppercase text-gray-700 tracking-wide">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
