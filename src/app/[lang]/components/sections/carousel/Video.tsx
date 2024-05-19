import { useRef, useEffect } from "react";

const Video = ({
  slide,
}: {
  slide: {
    url: string;
    alt: string;
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
  }, [videoRef]);

  return (
    <div className="flex-none h-[220px] md:h-[350px] w-full">
      <div className="rounded-xl h-full overflow-hidden shadow-gray-800 shadow-lg">
        <div className="flex justify-center items-center relative h-full w-full">
          <video
            ref={videoRef}
            muted={true}
            className="h-full w-full object-cover z-[200]"
            controls={false}
            loop
            width={slide.width}
            height={slide.height}
          >
            <source src={slide.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
