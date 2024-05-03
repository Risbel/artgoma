import ButtonConfirm from "../components/ButtonConfirm";
import H1Text from "./components/H1Text";
import H2Text from "./components/H2Text";
import VipDescription from "./components/VipDescription";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-6">
      <H1Text />
      <H2Text />
      <div className="m-5">
        <ButtonConfirm />
      </div>
      <VipDescription />
    </div>
  );
};

export default page;
