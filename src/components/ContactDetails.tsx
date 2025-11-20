import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails = () => {
    return (
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 uppercase tracking-widest mb-4">
                Contact Us
            </h2>

            <p className="text-center text-sm md:text-base text-white mb-8">
                {`  Have questions or need help? Reach out — we're here for you!`}
            </p>

            <ul className="space-y-6">
                <li className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                        <FaEnvelope className="text-green-900 text-xs" />
                    </div>
                    <span className="text-white text-sm">
                        Email:{" "}
                        <a
                            href="mailto:info@stewmanagement.com"
                            className="text-green-900 hover:text-green-900 underline transition"
                        >
                            info@stewmanagement.com
                        </a>
                    </span>
                </li>

                <li className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                        <FaPhoneAlt className="text-green-900 text-xs" />
                    </div>
                    <span className="text-white text-sm">
                        Phone:{" "}
                        <a
                            href="tel:919820290408"
                            className="text-green-900 hover:text-green-900 underline transition"
                        >
                            +91 9820290408
                        </a>
                    </span>
                </li>

                <li className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                        <FaMapMarkerAlt className="text-green-900 text-sm" />
                    </div>
                    <span className="text-white text-xs">
                        B-512, Mayuresh Trade Centre, Sec-19A, Turbhe, Navi Mumbai- 400703
                    </span>
                </li>
            </ul>

            <p className="text-center text-sm text-white mt-10">
                We look forward to hearing from you!
            </p>
        </div>
    );
};

export default ContactDetails;
