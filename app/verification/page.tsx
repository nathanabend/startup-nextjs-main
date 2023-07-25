import Breadcrumb from "@/components/Common/Breadcrumb";
import Verification from "@/components/Verification";

const verification = () => {
  return (
    <>
      <Breadcrumb
        pageName="Thank you for submitting your form"
        description="Please fill out the identity verification form below"
      />

      <Verification />
    </>
  );
};

export default verification;