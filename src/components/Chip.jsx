import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
const Chip = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A-17 Pro Chip.
            <br />A monster win for gaming
          </h2>

          <p className="hiw-subtitle">It's here. The biggest redesign in the future of iPhone GPUs</p>
        </div>
        <div className="my-10 mb-14 md:mt-20">
          <div className="relative h-full flex flex-center">
            <div className="overflow-hidden">
              <img
                className="bg-transparent relative z-10"
                src={frameImg}
                alt="frame"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                preload="none"
                autoPlay
                playsInline
                muted
                ref={videoRef}
                src={frameVideo}
              ></video>
            </div>
          </div>
          <p className="text-gray-300 text-center mt-3">Honkai: Star Rail</p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iphone chip that delivers our{" "}
              <span className="text-white">best graphic perfomance by far</span>
            </p>
          </div>

          <div className="flex-1 flex-center">
            <p className="feature-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive{" "}
              </span>
              with incredibly detailed environments and chareacters.
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-text">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chip;