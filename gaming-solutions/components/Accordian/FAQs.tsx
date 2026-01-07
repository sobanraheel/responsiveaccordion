"use client";
import React from "react";
import Accordian from "./Accordian";
import { AccordianItemData } from "../../../../../constants/accordianItemData";
import { DEFAULT_ACCORDIAN_ITEMS } from "../../../../../constants/acoordianConstants";
import { useState } from "react";

const FAQs: React.FC = () => {
  const [items, setItems] = useState<AccordianItemData[]>(
    DEFAULT_ACCORDIAN_ITEMS
  );
  const [allowMultiple, setAllowMultiple] = useState(false);

  return (
    <div className="pt-16 pb-16 bg-[#170012]">
      <Accordian items={items} allowMultiple={allowMultiple} />
    </div>
  );
};

export default FAQs;
