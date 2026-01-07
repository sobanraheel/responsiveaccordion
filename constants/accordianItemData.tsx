export interface AccordianItemData {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export interface AccordionProps {
  items: AccordianItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export interface AIResponse {
  topic: string;
  items: {
    title: string;
    content: string;
  }[];
}
