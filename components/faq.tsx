import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  Clock,
  LucideIcon,
  Package,
  PackageX,
  Plane,
  ShieldPlus,
  Users,
  Waypoints,
} from "lucide-react";

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

const faqs: FrequentlyAskedQuestion[] = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all unused products. Please ensure the item is in original packaging when returning.",
    icon: Package,
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-7 business days depending on your location.",
    icon: Clock,
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by destination.",
    icon: Plane,
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you'll receive an email with a tracking link. You can also track your order in your account dashboard.",
    icon: Waypoints,
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, UPI, and net banking.",
    icon: CircleDollarSign,
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "Yes, you can cancel or modify your order within 2 hours of placing it. After that, the order may already be processed for shipment.",
    icon: PackageX,
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use industry-standard encryption to ensure your personal and payment information is secure.",
    icon: ShieldPlus,
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Absolutely. Our support team is available 24/7 via email and chat to help with any issues or questions.",
    icon: Users,
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, UPI, and net banking.",
    icon: CircleDollarSign,
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "Yes, you can cancel or modify your order within 2 hours of placing it. After that, the order may already be processed for shipment.",
    icon: PackageX,
  },
];

export function FAQ() {
  return (
    <div id="faq" className="bg-muted">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24">
        <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
          Frequently Asked Questions
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Find answers to common questions about our products and services.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "relative p-6 border bg-card -ms-px -mt-px text-start overflow-hidden",
                "first:rounded-t-lg md:first:rounded-tr-none md:nth-[2]:rounded-tr-lg md:nth-last-[2]:rounded-bl-lg last:rounded-b-lg md:last:rounded-bl-none"
              )}
            >
              <div
                className="absolute inset-0 -ms-px -mt-0.5 z-0"
                style={{
                  backgroundImage: `
        linear-gradient(to right, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px)
      `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 0",
                  maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                  WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />

              <div className="isolate">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <faq.icon className="text-primary mr-2.5 size-5 shrink-0" />
                  {faq.question}
                </div>
                <div className="mt-2 pl-10 text-base text-start text-foreground/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
