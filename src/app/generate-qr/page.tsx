import QrGenerator from "../components/qrGenerator";
import AddCollaboratorForm from "./componnents/addCollaboratorForm";

const page = () => {
  return (
    <div className="pb-20">
      <QrGenerator />
      <div className="flex justify-center w-full">
        <AddCollaboratorForm />
      </div>
    </div>
  );
};

export default page;
