const H2Location = ({
  text,
}: {
  text: {
    span1: string;
    span2: string;
  };
}) => {
  return (
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
      <span className="text-white">{text.span1}</span>
      <span className="text-red-600"> {text.span2}</span>
    </h2>
  );
};

export default H2Location;
