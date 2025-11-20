"use client";

import React, { useState } from "react";
import {
    FaEnvelope,
    FaCommentDots,
    FaXTwitter,
    FaFacebook,
    FaInstagram,
    FaSpinner,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import { toast } from "react-toastify";
import { IoIosCall } from "react-icons/io";
import InputField from "./InputField";

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        message: "",
    });


    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors: typeof errors = {
            fullName: "",
            email: "",
            contactNumber: "",
            message: "",
        };

        if (!contactForm.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!contactForm.email.trim()) newErrors.email = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contactForm.email))
            newErrors.email = "Invalid email address";

        if (!contactForm.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
        else if (!/^\d{10}$/.test(contactForm.contactNumber))
            newErrors.contactNumber = "Enter a valid 10-digit number";

        if (!contactForm.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.values(newErrors).every((err) => !err);
    };

    const handleChange = (field: string, value: string) => {
        setContactForm({ ...contactForm, [field]: value });
        setErrors({ ...errors, [field]: "" });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            setLoading(false);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            try {
                console.log("Form Submitted:", contactForm); // ← LOG FORM DATA HERE
                toast.success("Form data logged in console!");
                setContactForm({ fullName: "", email: "", contactNumber: "", message: "" });
                setErrors({ fullName: "", email: "", contactNumber: "", message: "" });
            } catch (e) {
                toast.error("Something went wrong!");
            } finally {
                setLoading(false);
            }
        }, 3000);






    };


    return (
        <div className="p-6 md:p-10 max-w-4xl h-full lg:mx-8 text-black animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between mb-10">
                <h2 className="text-3xl hidden md:block md:text-4xl font-extrabold uppercase tracking-wider text-green-600">
                    Get In Touch
                </h2>
                <ul className="flex gap-5 text-2xl mt-4 md:mt-0">
                    <a href="https://www.instagram.com/stewmanagementgroup/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.facebook.com/stewmanagementgroup/" target="_blank"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/stew-management-group-924046227/" target="_blank"><FaLinkedin /></a>
                    <a href="https://x.com/stewmanagement" target="_blank"><FaXTwitter /></a>
                    <a href="https://www.youtube.com/@stewmanagementgroup5156" target="_blank"><FaYoutube /></a>
                </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                        label="Full Name"
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        value={contactForm.fullName}
                        icon={GoPersonFill}
                        error={errors.fullName}
                        placeholder="Enter your full name"
                        required
                        type="text"
                    />
                    <InputField
                        label="Email Address"
                        onChange={(e) => handleChange("email", e.target.value)}
                        value={contactForm.email}
                        icon={FaEnvelope}
                        error={errors.email}
                        placeholder="Enter your email"
                        required
                        type="email"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <InputField
                        label="Contact Number"
                        onChange={(e) => handleChange("contactNumber", e.target.value)}
                        value={contactForm.contactNumber}
                        icon={IoIosCall}
                        error={errors.contactNumber}
                        placeholder="Enter your phone number"
                        required
                        type="text"
                    />
                </div>
                <InputField
                    label="Message"
                    onChange={(e) => handleChange("message", e.target.value)}
                    value={contactForm.message}
                    icon={FaCommentDots}
                    error={errors.message}
                    placeholder="Write your message here..."
                    required
                    type="textarea"
                />

                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="relative active:scale-90 inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                <FaSpinner className="animate-spin mr-2" /> Sending...
                            </>
                        ) : (
                            <>
                                Send Message <RiSendPlaneFill className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
