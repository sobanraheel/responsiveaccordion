import React from "react";
import FAQs from "./components/Accordian/FAQs";
import SingleIndustriesBanner from "./components/banner/SingleIndustriesBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Gaming Solutions | Live Ops, Manotization & Porting",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <SingleIndustriesBanner />
      <FAQs />
    </div>
  );
};

export default page;
