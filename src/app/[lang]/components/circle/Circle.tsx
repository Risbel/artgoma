import { cn } from "@/lib/utils";

const Circle = ({
  color = "border-red-600",
  position,
  z,
  translateX,
  translateY,
  shadow = "shadow-md",
  className,
}: {
  color?: "border-red-700" | "border-white" | "border-red-600";
  position?: "relative" | "fixed" | "absolute" | "sticky";
  z?: string;
  translateX?: string;
  translateY?: string;
  shadow?: "shadow-sm" | "shadow-md" | "shadow-lg" | "shadow-xl" | "shadow-2xl";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-full st`,
        `${color}`,
        `${z}`,
        `${position}`,
        `${shadow} shadow-black`,
        `${translateX} ${translateY}`,
        className
      )}
    ></div>
  );
};

export default Circle;
