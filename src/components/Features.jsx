import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from 'gsap'
const Features = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    animateWithGsap("#title_features", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(".g_grow", {
      scale: 1,
      opacity: 1,
      ease: "power1",
      duration: 1,
      //   scrub: 5.5,
    });

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.in",
      duration: 1,
    });
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        
      },
      onComplete:()=>{
        videoRef.current.play()
      }
    });
  }, []);

  return (
    <section className="h-full common-padding relative overflow-hidden bg-zinc-900">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="title_features" className="section-heading">
            Explore the full story
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in Titanium.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                muted
                autoPlay
                preload="none"
                ref={videoRef}
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace grade titanium
                      design 
                    </span>
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength to weight ratio of
                    any metals making these our{" "}
                    <span className="text-white">lightest pro models ever. </span>
                    You'll notice the difference once you pick it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
