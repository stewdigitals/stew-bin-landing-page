'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Footer = () => {
    const router = useRouter();
    return (
        <footer className="bg-[#2c2c2c] text-white font-poppins px-5 sm:px-10 md:px-16 lg:px-24 pt-16 pb-10">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Image
                            onClick={() => router.push("/")}
                            src="/logo.png"
                            alt="Stew Management Group"
                            width={60}
                            height={60}
                            className="w-16 h-16 hover:scale-110 bg-white duration-1000 cursor-pointer p-1.5 rounded-xl"
                        />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        Providing sustainable waste solutions with smart services, consulting, and eco-awareness.
                    </p>

                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        {[
                            { name: 'Home', path: '/#home' },
                            { name: 'About', path: '/#about' },
                            { name: 'Service', path: '/#service' },
                            { name: 'Testimonial', path: '/#testimonial' },
                            { name: 'FAQ', path: '/#faq' },
                            { name: 'Contact Us', path: '/#contact' },
                        ].map(({ name, path }, idx) => (
                            <li key={idx}>
                                <Link href={path} className="flex items-center gap-2 hover:text-green-700 transition-all">
                                    <MdKeyboardDoubleArrowRight className="hover:text-green-700" /> {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">Our Services</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        {[
                            { label: 'Waste Audit', path: 'https://www.stewbin.com/services/waste-audit' },
                            { label: 'Consulting', path: 'https://www.stewbin.com/services/consulting' },
                            { label: 'O&M Contract', path: 'https://www.stewbin.com/services/omc' },
                            { label: 'Plant Reactivation', path: 'https://www.stewbin.com/services/reactivation' },
                        ].map(({ label, path }) => (
                            <li key={label}>
                                <a href={path} target='_blank' className="flex items-center gap-2 hover:text-green-700 transition-all">
                                    <MdKeyboardDoubleArrowRight className="hover:text-green-700" /> {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info + Social */}
                <div>
                    <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-white">Contact Us</h4>

                    {/* Email */}
                    <div className="flex items-start gap-3 text-sm text-gray-300 mb-3">
                        <FaEnvelope className="mt-1 text-smg-green" />
                        <a href="mailto:info@stewmanagement.com" className="hover:text-smg-green transition-all">
                            info@stewmanagement.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 text-sm text-gray-300 mb-3">
                        <FaPhoneAlt className="mt-1 text-smg-green" />
                        <a href="tel:+919820290408" className="hover:text-smg-green transition-all">
                            +91 9820290408
                        </a>
                    </div>

                    {/* Address */}
                    <div className="flex  gap-3 text-sm text-gray-300 mb-4">
                        <FaMapMarkerAlt className="text-smg-green text-3xl" />
                        <p>
                            B-512, Mayuresh Trade Centre, Sec-19A, Turbhe, Navi Mumbai- 400703
                        </p>
                    </div>



                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-white text-xl">
                        {[
                            { icon: <FaFacebookF />, href: 'https://www.facebook.com/stewmanagementgroup/' },
                            { icon: <FaInstagram />, href: 'https://www.instagram.com/stewmanagementgroup/' },
                            { icon: <FaYoutube />, href: 'https://www.youtube.com/@stewmanagementgroup5156' },
                            { icon: <FaTwitter />, href: 'https://x.com/stewmanagement' },
                            { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/stew-management-group-924046227/?original_referer=https%3A%2F%2Fstewmanagement.com%2F' },
                        ].map(({ icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 rounded-full hover:bg-smg-green transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider and Copyright */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400 space-y-2">
                <p className="tracking-wide">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Stew Management Group</span>. All rights reserved.
                </p>

                <a
                    href="https://stewdigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-gray-400 hover:text-smg-green transition-colors duration-300"
                >
                    <span className="italic">Designed & Developed by</span>{" "}
                    <span className="font-medium text-white hover:underline">Stew Digital Solution Pvt. Ltd.</span>
                </a>
            </div>

        </footer>
    );
};

export default Footer;
