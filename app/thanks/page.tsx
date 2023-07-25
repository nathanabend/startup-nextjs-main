import Breadcrumb from "@/components/Common/Breadcrumb";
import Thanks from "@/components/Thanks";

const thanks = () => {
  return (
    <>
      <Breadcrumb
        pageName="Thank you"
        description="We have recieved your form and identity verification"
      />

      <Thanks />
    </>
  );
};

export default thanks;