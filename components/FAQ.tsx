'use client';

import FAQItem from "./FAQItem";
import { faqs } from "@/data/mockData";
import {
  Accordion,
} from "@/components/ui/accordion";

const FAQ = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-gray-600">
              Common questions about therapy and my practice
            </p>
          </div>

          {/* FAQ List */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? I'm here to help.
            </p>
            <button
              onClick={scrollToContact}
              className="text-primary hover:text-primary/80 font-semibold underline transition-colors"
            >
              Get in touch for personalized answers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
