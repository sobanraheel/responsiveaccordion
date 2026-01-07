import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const SingleIndustriesBanner = () => {
  return (
    <div className="relative w-full h-[380px] lg:h-[380px] bg-black bg-[url('/images/inner-pages-banner-overlay-image.webp')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full">
        <div className="relative z-4 flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <div className="flex justify-center flex-col w-full h-full items-center gap-3">
              <p className="flex items-center gap-3 font-light">
                <Link href="/">
                  <span className="text-[#ef41de]">Home </span>
                </Link>{" "}
                <ArrowRightIcon className="w-3 h-3 text-white" />{" "}
                <Link href="/industries">
                  <span className="text-[#ef41de]">Industries </span>
                </Link>
                <ArrowRightIcon className="w-3 h-3 text-white" />{" "}
                <span className="text-white">Gaming Solutions </span>
              </p>
              <h1 className="text-[32px] text-center lg:text-[50px] leading-[1.1em] text-white">
                Gaming Solutions
              </h1>
              <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] text-center w-full md:w-[800px]">
                Unlock the future of gaming with our innovative solutions in
                AR/VR and the metaverse—crafted to captivate, engage, and
                inspire action.
              </p>
              <Link href="/contact">
                <FillPrimaryButton>Let's Talk</FillPrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleIndustriesBanner;
