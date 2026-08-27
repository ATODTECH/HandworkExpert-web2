import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is Prohandy?",
    answer:
      "is a platform that connects users with skilled artisans for various services, including plumbing, electrical work, painting, carpentry, and more",
  },
  {
    question: "How does it work?",
    answer: "Just signup and join the platform.",
  },
  {
    question: "How do i book an artisan?",
    answer:
      "Browse the service category, view artisan profiles, and schedule a booking that suits your availability.",
  },
  {
    question: "Are the artisans verified?",
    answer:
      "Yes, all artisans on our platform go through a strict verification process to ensure reliability and quality.",
  },
  {
    question: "What if I’m not satisfied with the service?",
    answer:
      "You can contact our customer support team, and we’ll assist you in resolving any issues.",
  },
  {
    question: "How do i sign up as an artisan?",
    answer:
      "Download the app, complete your profile, and submit the necessary verification documents to get started.",
  },
  {
    question: "How do i receive payment as an artisan?",
    answer:
      "Payments are transferred directly to your registered bank account after the job is completed and approved.",
  },
  {
    question: "Can i set my service rate?",
    answer:
      "Yes, artisans can set competitive rates for their services within the platform.",
  },
  {
    question: "What payment method are supported?",
    answer:
      "We accept major credit/debit cards, mobile payment systems, and other secure options.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use advanced encryption technology to protect your data.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-bold text-slate-900">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex-shrink-0 text-slate-900"
        >
          <Plus size={18} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-slate-500">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-2xl bg-white px-6">
      {FAQS.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}