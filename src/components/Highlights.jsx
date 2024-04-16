import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg, rightImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", {
      opacity: 1,
      delay: 1.2,
      stagger: "0.25",
      y: 0,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-900"
    >
      <div className="screen-max-width ">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img className="ml-2" src={watchImg} alt="play" />{" "}
            </p>
            <p className="link">
              Watch the event
              <img className="ml-2" src={rightImg} alt="right" />{" "}
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
