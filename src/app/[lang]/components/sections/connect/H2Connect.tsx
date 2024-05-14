const H2Connect = ({ text }: { text: { span1: string; span2: string } }) => {
  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl shadow-black text-shadow-lg font-semibold text-white text-center">
      <span className="text-red-700">{text.span1}</span> <br /> {text.span2}
    </h2>
  );
};

export default H2Connect;
