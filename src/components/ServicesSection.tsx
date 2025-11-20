// components/ServicesSection.tsx
'use client';
import { motion } from 'framer-motion';
import {
    FaRecycle,
    FaIndustry,
    FaBiohazard,
    FaLeaf,
    FaClipboardCheck,
    FaHandsHelping,
    FaTools,
    FaUniversity,
} from 'react-icons/fa';
import Heading from './Heading';


const services = [
    {
        icon: <FaRecycle className="text-green-600 text-3xl mb-4" />,
        title: 'Waste Management',
        description: 'Comprehensive solid waste collection, segregation, and scientific disposal.',
        path: 'https://www.stewbin.com/services/waste-management',
    },
    {
        icon: <FaClipboardCheck className="text-green-600 text-3xl mb-4" />,
        title: 'Waste Audit',
        description: 'In-depth waste audits to assess, categorize, and improve waste practices.',
        path: 'https://www.stewbin.com/services/waste-audit',
    },
    {
        icon: <FaHandsHelping className="text-green-600 text-3xl mb-4" />,
        title: 'Consulting',
        description: 'Environmental consulting for industries, institutions, and municipalities.',
        path: 'https://www.stewbin.com/services/consulting',
    },
    {
        icon: <FaTools className="text-green-600 text-3xl mb-4" />,
        title: 'O&M Contracts',
        description: 'Operation & Maintenance of waste processing and treatment facilities.',
        path: 'https://www.stewbin.com/services/omc',
    },
    {
        icon: <FaIndustry className="text-green-600 text-3xl mb-4" />,
        title: 'Industrial Cleaning',
        description: 'Specialized cleaning and decontamination for heavy industries and plants.',
        path: 'https://www.stewbin.com/services/industrial-cleaning',
    },
    {
        icon: <FaBiohazard className="text-green-600 text-3xl mb-4" />,
        title: 'Hazardous Waste',
        description: 'Safe handling and disposal of biomedical, chemical, and hazardous waste.',
        path: 'https://www.stewbin.com/services/hazardous-waste',
    },
    {
        icon: <FaLeaf className="text-green-600 text-3xl mb-4" />,
        title: 'Green Projects',
        description: 'Implementation of sustainability and green infrastructure projects.',
        path: 'https://www.stewbin.com/services/green-projects',
    },
    {
        icon: <FaUniversity className="text-green-600 text-3xl mb-4" />,
        title: 'Educational & Awareness',
        description: 'School visits, campaigns, and programs to promote eco-conscious behavior.',
        path: 'https://www.stewbin.com/services/educational-visits',
    },
];

const ServicesSection = () => {
    return (
        <section id="service" className="py-20 bg-linear-to-br from-white via-green-50 to-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <Heading title="Our Services" />

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.a
                            key={index}
                            href={service.path}
                            whileHover={{ scale: 1.05 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1, duration: 0.4, type: 'spring' }}
                            className="group block p-6 border border-[#8080802c] rounded-2xl bg-white hover:shadow-xl hover:border-green-500 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                {service.icon}
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
