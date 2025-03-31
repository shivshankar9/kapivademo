import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What are the benefits of this product?",
    answer:
      "This product helps improve overall wellness by supporting digestion, boosting immunity, and providing essential nutrients.",
  },
  {
    question: "Is this product natural and free of chemicals?",
    answer:
      "Yes, this product is made from 100% natural ingredients and contains no harmful chemicals, preservatives, or additives.",
  },
  {
    question: "How should I use this product?",
    answer:
      "Follow the recommended dosage mentioned on the packaging or consult a healthcare professional for personalized advice.",
  },
  {
    question: "Are there any side effects of using this product?",
    answer:
      "This product is safe for most users when consumed as directed. However, if you experience any adverse reactions, discontinue use and consult a doctor.",
  },
  {
    question: "Is this product suitable for vegetarians or vegans?",
    answer:
      "Yes, this product is vegan-friendly and does not contain any animal-derived ingredients.",
  },
  {
    question: "What is the shelf life of this product?",
    answer:
      "The shelf life of this product is 12 months from the date of manufacture. Please store it in a cool, dry place away from direct sunlight.",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently Asked Questions
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left font-medium text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-black/70">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;