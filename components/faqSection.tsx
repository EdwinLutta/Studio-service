"use client";

import { useState } from "react";
import { faqData } from "@/lib/data";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
            FAQ
          </p>

          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Find answers to some of the most common questions about our
            services, projects, pricing, and process.
          </p>
        </div>

        {/* Questions */}
        <div className="divide-y rounded-2xl border">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="px-6 md:px-8">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold md:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center  justify-center rounded-full border text-[#A8D03C] text-xl transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 pr-12 sm:px-6 sm:pb-6 sm:pr-16">
                      <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">Still have questions?</p>

          <Link
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Contact Kaconex
          </Link>
        </div>
      </div>
    </section>
  );
}
