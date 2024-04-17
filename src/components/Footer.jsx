import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 px-10 sm:px:5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray-400 text-xs">
            More ways to shop:{" "}
            <span className="hover:underline cursor-pointer text-blue-400">
              Find and apple store
            </span>{" "}
            or {' '}
            <span className="hover:underline cursor-pointer text-blue-400">other retailer </span>
            near you.
          </p>
          <p className="font-semibold text-gray-400 text-xs">
            Or call {" "}
            <span className="hover:underline cursor-pointer text-blue-400">
              +(254)798014749
            </span>{" "}
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray-400 text-xs">
            Copyright @ 2024 Apple Inc. All right reserved
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p className="font-semibold text-gray-400 text-xs" key={i}>
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-1"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
