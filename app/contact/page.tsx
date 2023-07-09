import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Send us a message and an investment advisor will be in touch with you or send us an email at info@blockheath.com"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
