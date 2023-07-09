import Breadcrumb from "@/components/Common/Breadcrumb";
import Form from "@/components/form";

const FormInvest = () => {
  return (
    <>
      <Breadcrumb
        pageName="Investment Form"
        description="Fill out the form below and an investment advisor will contact you"
      />

      <Form />
    </>
  );
};

export default FormInvest;