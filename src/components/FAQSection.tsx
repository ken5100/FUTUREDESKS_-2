"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  interface FAQ {
    question: string;
    answer: string;
  }

  const faqs: FAQ[] = [
    {
      question: "Is Creatordesks Meta Verified?",
      answer:
        "No, Creatordesks is not Meta Verified, but we ensure that all features comply with Meta's policies.",
    },
    {
      question: "Is Creatordesks free?",
      answer:
        "We offer both free and premium plans, depending on the features you need.",
    },
    {
      question: "Is there a risk of insta ban while using automation?",
      answer:
        "We use safe automation methods, but misuse or excessive activity can lead to account restrictions.",
    },
    {
      question: "Do I get referral income on renewals as well?",
      answer:
        "Yes, our referral program rewards you for renewals and new sign-ups.",
    },
    {
      question: "Can I get a GST invoice?",
      answer:
        "Absolutely! We provide GST-compliant invoices for all Indian customers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg_footer.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 text-lg font-medium text-gray-800 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t"
                  >
                    <div className="px-4 py-3 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
