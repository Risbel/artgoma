import Circle from "../components/circle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden bg-[#1c1f24] h-screen w-screen">
      <Circle
        color="border-red-600"
        position="absolute"
        z="z-10"
        className={
          "h-32 w-32 md:h-44 md:w-44 border-[20px] md:border-[32px] border-red-600 -top-32 right-0 translate-x-16 translate-y-12"
        }
      />

      <Circle
        color="border-red-600"
        position="absolute"
        z="z-10"
        className={
          "h-32 w-32 md:h-44 md:w-44 border-[20px] md:border-[32px] border-red-600 bottom-0 -left-32 translate-x-16 translate-y-12"
        }
      />

      <Circle
        color="border-red-600"
        position="absolute"
        z="z-10"
        className={
          "h-12 w-12 md:h-28 md:w-28 border-[15px] md:border-[25px] border-red-600/70 bottom-40 left-40 -translate-x-16 md:translate-x-16 translate-y-32 md:translate-y-12"
        }
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
