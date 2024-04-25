interface IVideo {
  videoSrc?: string;
  controller?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

function VideoBg({
  videoSrc = "/assets/1110176_Oriental_Plan_Concentrated_1280x720.mp4",
  controller = false,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: IVideo) {
  return (
    <div className="mx-auto max-w-[76rem] w-full container">
      <div className=" rounded-md h-screen overflow-hidden">
        <video
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          controls={controller}
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoBg;
