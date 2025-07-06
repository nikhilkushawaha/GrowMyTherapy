import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => (
  <AccordionItem
    value={`item-${index}`}
    className="border-b border-gray-200 last:border-b-0"
  >
    <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors font-semibold text-lg">
      {question}
    </AccordionTrigger>
    <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
      {answer}
    </AccordionContent>
  </AccordionItem>
);

export default FAQItem;
