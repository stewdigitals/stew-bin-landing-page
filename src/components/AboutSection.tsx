// components/AboutSection.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Heading from './Heading';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-linear-to-br from-green-50 to-white">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-xl w-full h-80 md:h-96 overflow-clip">
                    <Image
                        src="/images/waste.png"
                        alt="Stew Management Group - Waste Management"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl shadow-xl hover:scale-110 duration-1000"
                    />
                </div>
                <div>
                    <Heading title="Who We Are" />
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        <strong>Stew Management Group</strong> is a pioneer in integrated waste management services,
                        catering to municipal, commercial, industrial, and biomedical sectors across India. With a
                        mission to create a cleaner and greener environment, we offer innovative, compliant, and
                        sustainable solutions — from waste collection and segregation to transportation, recycling, and disposal.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Backed by a skilled team and modern infrastructure, we proudly support city corporations,
                        large industries, and healthcare institutions in achieving their environmental goals with efficiency,
                        transparency, and a commitment to safety.
                    </p>
                    <Link
                        href="https://www.stewbin.com/services/waste-audit"
                        className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition"
                    >
                        Learn more about our services <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
