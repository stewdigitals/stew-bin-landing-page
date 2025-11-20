'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Heading from './Heading';

const faqs = [
    {
        question: 'Why Choose Stew Management Group?',
        answer:
            'Stew Management Group offers professional waste management solutions with an emphasis on sustainability, innovation, and operational excellence. We serve residential, commercial, and industrial clients with tailor-made services that meet environmental compliance and exceed customer expectations.',
    },
    {
        question: 'What services do you provide?',
        answer:
            'We offer waste collection, recycling, disposal, segregation planning, and sustainability consulting services across various sectors.',
    },
    {
        question: 'Do you offer industrial waste management?',
        answer:
            'Yes, we specialize in handling industrial waste responsibly, ensuring proper treatment, documentation, and eco-friendly disposal.',
    },
    {
        question: 'How can I schedule a pickup?',
        answer:
            'You can easily schedule a pickup by contacting our support team via phone, email, or filling out the service request form on our website.',
    },
    {
        question: 'Is your service available in my area?',
        answer:
            'We are expanding rapidly. Please check our service coverage section or contact us directly to confirm availability in your region.',
    },
    {
        question: 'Do you provide reporting and documentation?',
        answer:
            'Yes, we offer detailed waste management reports and compliance documentation for businesses and housing societies.',
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section id='faq' className="py-18 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <Heading title="Frequently Asked Questions" />
                <div className="space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex justify-between cursor-pointer items-center w-full text-lg font-medium text-left focus:outline-none"
                            >
                                <span>{faq.question}</span>
                                {activeIndex === index ? (
                                    <FaChevronUp className="text-gray-500" />
                                ) : (
                                    <FaChevronDown className="text-gray-500" />
                                )}
                            </button>
                            {activeIndex === index && (
                                <div className="mt-2 text-gray-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
