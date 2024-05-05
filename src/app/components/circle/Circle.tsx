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
  translateX?: string;
  translateY?: string;
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
        right: `${right}px`,
        left: `${left}px`,
      }}
      className={cn(`rounded-full relative`, `shadow-${shadow} shadow-black`, `${translateX} ${translateY}`)}
    ></div>
  );
};

export default Circle;
