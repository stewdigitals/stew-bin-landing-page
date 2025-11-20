
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

const ContactContainer = () => {
    return (
        <div id="contact" className="grid py-6 max-w-[1200px] mx-auto my-3 lg:grid-cols-[1fr_2fr] justify-center items-center">
            <div className="left rounded-2xl  bg-[#00c950] shadow-lg  p-4">
                <ContactDetails />
            </div>
            <div className="right  py-4">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactContainer;