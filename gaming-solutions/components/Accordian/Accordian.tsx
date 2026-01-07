"use client";
import React, { useState } from "react";
import { AccordionProps } from "../../../../../constants/accordianItemData";
import AccordianItem from "./AccordianItem";

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  if (items.length === 0) {
    return (
      <div className="text-center p-10 bg-slate-800/20 rounded-xl border border-dashed border-slate-700">
        <p className="text-slate-500 italic">
          No content generated yet. Try a topic above!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-[96%] mx-auto lg:w-[50%] bg-[#0c000a] backdrop-blur-sm rounded-lg border border-[#ffffff]/20 shadow-2xl overflow-hidden ${className}`}
    >
      {items.map((item) => (
        <AccordianItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
