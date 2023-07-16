import Breadcrumb from "@/components/Common/Breadcrumb";
import Form from "@/components/nftForm";

const loanForm = () => {
  return (
    <>
      <Breadcrumb
        pageName="Loan Form"
        description="Fill out the form below and an advisor will contact you"
      />

      <Form />
    </>
  );
};

export default loanForm;