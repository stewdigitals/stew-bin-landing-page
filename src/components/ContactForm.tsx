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
  FaLocationDot,
  FaBuilding,
  FaIndustry,
} from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import { toast } from "react-toastify";
import { IoIosCall } from "react-icons/io";
import InputField from "./InputField";
import useUserStore from "@/context/store/user";

const WASTE_SERVICES = [
  "General Waste Collection",
  "Recycling & Sorting",
  "Hazardous Waste Disposal",
  "Medical / Bio-waste Management",
  "E-waste Recycling",
  "Construction & Demolition Waste",
  "Organic / Composting Services",
  "Industrial Waste Management",
  "Waste Audit & Consulting",
  "Other",
];

const INDUSTRIES = [
  "Healthcare",
  "Construction",
  "Manufacturing",
  "Hospitality & Food Service",
  "Retail",
  "Education",
  "Government & Municipal",
  "Real Estate",
  "Other",
];

type FormState = {
  fullName: string;
  email: string;
  service: string;
  message: string;
  phone: string;
  companyName: string;
  industryName: string;
  location: string;
  customIndustry: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: "",
  email: "",
  service: "",
  message: "",
  phone: "",
  companyName: "",
  industryName: "",
  location: "",
  customIndustry: "",
};

const ContactForm = () => {
  const { sendMailToAdmin } = useUserStore();
  const [contactForm, setContactForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!contactForm.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!contactForm.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contactForm.email)
    )
      newErrors.email = "Invalid email address";

    if (!contactForm.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(contactForm.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    if (!contactForm.service) newErrors.service = "Please select a service";
    if (!contactForm.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!contactForm.industryName)
      newErrors.industryName = "Please select an industry";
    if (
      contactForm.industryName === "Other" &&
      !contactForm.customIndustry.trim()
    )
      newErrors.customIndustry = "Please specify your industry";
    if (!contactForm.location.trim())
      newErrors.location = "Location is required";
    if (!contactForm.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const result = await sendMailToAdmin(contactForm);

      if (result.success) {
        toast.success(result.message);
        setContactForm(initialForm);
        setErrors({});
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl h-full lg:mx-8 text-black animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <h2 className="text-3xl hidden md:block md:text-4xl font-extrabold uppercase tracking-wider text-green-600">
          Get In Touch
        </h2>
        <ul className="flex gap-5 text-2xl mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/stewmanagementgroup/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/stewmanagementgroup/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/stew-management-group-924046227/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://x.com/stewmanagement" target="_blank">
            <FaXTwitter />
          </a>
          <a
            href="https://www.youtube.com/@stewmanagementgroup5156"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name + Email */}
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

        {/* Row 2: Contact + Company */}
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Phone Number"
            onChange={(e) => handleChange("phone", e.target.value)}
            value={contactForm.phone}
            icon={IoIosCall}
            error={errors.phone}
            placeholder="Enter your phone number"
            required
            type="text"
          />
          <InputField
            label="Company Name"
            onChange={(e) => handleChange("companyName", e.target.value)}
            value={contactForm.companyName}
            icon={FaBuilding}
            error={errors.companyName}
            placeholder="Enter your company name"
            required
            type="text"
          />
        </div>

        {/* Row 3: Industry + Location */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Industry Select */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Industry <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaIndustry className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
              <select
                value={contactForm.industryName}
                onChange={(e) => handleChange("industryName", e.target.value)}
                className={`w-full pl-9 pr-4 py-2.5 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.industryName ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select your industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>
            {errors.industryName && (
              <p className="text-red-500 text-xs mt-1">{errors.industryName}</p>
            )}
          </div>

          <InputField
            label="Location"
            onChange={(e) => handleChange("location", e.target.value)}
            value={contactForm.location}
            icon={FaLocationDot}
            error={errors.location}
            placeholder="City, State or ZIP"
            required
            type="text"
          />
        </div>

        {/* Custom Industry (conditional) */}
        {contactForm.industryName === "Other" && (
          <InputField
            label="Specify Your Industry"
            onChange={(e) => handleChange("customIndustry", e.target.value)}
            value={contactForm.customIndustry}
            icon={FaIndustry}
            error={errors.customIndustry}
            placeholder="Enter your industry"
            required
            type="text"
          />
        )}

        {/* Service Select */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">
            Service Required <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {WASTE_SERVICES.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => handleChange("service", service)}
                className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 text-left ${
                  contactForm.service === service
                    ? "bg-green-600 text-white border-green-600 shadow-md scale-[1.02]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-600"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          {errors.service && (
            <p className="text-red-500 text-xs mt-1">{errors.service}</p>
          )}
        </div>

        {/* Message */}
        <InputField
          label="Message"
          onChange={(e) => handleChange("message", e.target.value)}
          value={contactForm.message}
          icon={FaCommentDots}
          error={errors.message}
          placeholder="Describe your waste management needs..."
          required
          type="textarea"
        />

        {/* Submit */}
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
                Send Message{" "}
                <RiSendPlaneFill className="ml-2 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
