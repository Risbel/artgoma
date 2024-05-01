const Circle = ({
  h,
  w,
  border,
  borderColor,
  translateX,
  translateY,
  right = 0,
  left = 0,
}: {
  h: number;
  w: number;
  border: number;
  borderColor: string;
  translateX?: number;
  translateY?: number;
  right?: number;
  left?: number;
}) => {
  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`,
        border: `${border}px solid ${borderColor}`,
        transform: `translate(${translateX}px, ${translateY}px)`,
        right: `${right}`,
        left: `${left}`,
      }}
      className={`rounded-full relative`}
    ></div>
  );
};

export default Circle;
