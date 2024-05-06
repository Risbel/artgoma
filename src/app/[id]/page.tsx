import ButtonConfirm from "../components/ButtonConfirm";
import H1Text from "./components/H1Text";
import H2Text from "./components/H2Text";
import VipDescription from "./components/VipDescription";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-3 lg:gap-6 relative z-20">
      <H1Text />
      <H2Text />
      <div className="mt-4 md:m-5">
        <ButtonConfirm />
      </div>
      <VipDescription />
    </div>
  );
};

export default page;
