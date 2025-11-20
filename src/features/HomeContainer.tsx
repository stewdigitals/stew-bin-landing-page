import AboutSection from "@/components/AboutSection"
import CertificationsSection from "@/components/CertificationsSection"
import FAQSection from "@/components/FAQSection"
import HomeBanner from "@/components/HomeBanner"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection"
import ContactContainer from "./ContactContainer"

const HomeContainer = () => {
    return (
        <div>
            <HomeBanner />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <CertificationsSection />
            <FAQSection />
            <ContactContainer />

        </div>
    )
}

export default HomeContainer