import QrGenerator from "../components/qrGenerator";
import AddCollaboratorForm from "./componnents/addCollaboratorForm";
import { Suspense } from "react";

const LoaderQrGenerator = () => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="h-72 w-72 bg-black/40 rounded-xl animate-pulse"></div>
    </div>
  );
};

const page = () => {
  return (
    <div className="pb-20">
      <Suspense fallback={<LoaderQrGenerator />}>
        <QrGenerator />
      </Suspense>
      <div className="flex justify-center w-full">
        <AddCollaboratorForm />
      </div>
    </div>
  );
};

export default page;
