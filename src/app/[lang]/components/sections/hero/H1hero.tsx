const H1hero = ({ text }: { text: string }) => {
  return (
    <h1 className="text-center text-3xl md:text-4xl lg:text-6xl text-white text-shadow-lg shadow-gray-500">{text}</h1>
  );
};

export default H1hero;
