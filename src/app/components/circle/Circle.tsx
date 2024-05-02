import { cn } from "@/lib/utils";

const Circle = ({
  h,
  w,
  border,
  borderColor,
  translateX,
  translateY,
  right = 0,
  left = 0,
  shadow = "md",
}: {
  h: number;
  w: number;
  border: number;
  borderColor: string;
  translateX?: number;
  translateY?: number;
  right?: number;
  left?: number;
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl";
}) => {
  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`,
        border: `${border}px solid ${borderColor}`,
        transform: `translate(${translateX}px, ${translateY}px)`,
        right: `${right}px`,
        left: `${left}px`,
      }}
      className={cn(`rounded-full relative`, `shadow-${shadow} shadow-black`)}
    ></div>
  );
};

export default Circle;
