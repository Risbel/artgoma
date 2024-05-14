const H1Text = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <h1 className="text-center text-4xl lg:text-6xl font-semibold">
      <span className="pb-4 inline-flex animate-background-shine bg-[linear-gradient(110deg,#f7ff62,45%,#ffffff,55%,#f7ff62)] bg-[length:250%_100%] bg-clip-text text-transparent font-extrabold">
        {text1}
      </span>
      <br /> <span className=" text-white text-shadow shadow-slate-500">{text2}</span>
    </h1>
  );
};

export default H1Text;
