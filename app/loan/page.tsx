import Breadcrumb from "@/components/Common/Breadcrumb";
import Loan from "@/components/Loan";

const loanForm = () => {
  return (
    <>
      <Breadcrumb
        pageName="Loan Form"
        description="Simple steps to get the funding you need"
      />

      <Loan />
    </>
  );
};

export default loanForm;