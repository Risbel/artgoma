import { useRef, useEffect } from "react";

const Video = ({
  historie,
}: {
  historie: {
    url: string;
    alt: string;
    format: string;
    key: string;
    width: number;
    height: number;
  };
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Umbral del 50%
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si el video está en el área visible
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          // Si el video sale del área visible
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="flex-none h-[420px] md:h-[580px] w-4/5 md:w-[45%] lg:w-[30%] px-2 md:px-4 lg:px-6 py-6">
      <div className="rounded-xl h-full overflow-hidden shadow-gray-800 shadow-lg">
        <div className="flex justify-center items-center relative h-full w-full">
          <video
            ref={videoRef}
            className="h-full w-full object-cover z-[200]"
            controls={false}
            loop
            width={historie.width}
            height={historie.height}
          >
            <source src={historie.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
