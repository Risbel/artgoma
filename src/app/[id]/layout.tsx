import Circle from "../components/circle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden bg-[#1c1f24] h-screen w-screen">
      <div className="absolute -translate-x-16 -translate-y-16">
        <Circle h={200} w={200} border={30} borderColor="#bd0000" />
      </div>
      <div className="absolute translate-x-16 translate-y-40">
        <Circle h={80} w={80} border={20} borderColor="#bd0000" />
      </div>
      <div className="absolute -translate-y-4 -translate-x-40 bottom-0 right-0">
        <Circle h={80} w={80} border={20} borderColor="#bd0000" />
      </div>
      <div className="absolute translate-x-16 translate-y-16 bottom-0 right-0">
        <Circle h={200} w={200} border={30} borderColor="#bd0000" />
      </div>

      <div className="relative h-full">{children}</div>
    </div>
  );
}
