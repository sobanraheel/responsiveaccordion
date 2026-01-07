import React from "react";
import { AccordianItemData } from "../../../../../constants/accordianItemData";

interface AccordionItemProps {
  item: AccordianItemData;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordianItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`border-b border-[#ffffff]/20 last:border-0 transition-all duration-300 ${
        isOpen ? "bg-[#4b1c3e]" : "hover:bg-[#ef41de]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center cursor-pointer justify-between p-5 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg tracking-[0.17px] transition-colors duration-200 ${
            isOpen ? "text-white" : "text-white group-hover:text-white"
          }`}
        >
          {item.title}
        </span>
        <span
          className={`shrink-0 ml-4 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isOpen ? "text-white" : "text-white"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Smooth height transition using grid trick */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-white leading-relaxed text-base font-light">
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
