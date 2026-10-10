import Link from "next/link";
import { termsSections } from "@/lib/data";

export default function page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#12a555]">
            Legal
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            These terms explain the rules and conditions that apply when you use
            the Kaconex website and engage with our services.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last updated: October 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="space-y-12">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                {section.title}
              </h2>

              {/* Paragraphs */}
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-5 text-sm leading-7 text-gray-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {/* List */}
              {section.list && (
                <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-7 text-gray-600 sm:text-base">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Contact */}
              {section.contact && (
                <div className="mt-6 rounded-2xl bg-gray-50 p-6">
                  <p className="font-semibold text-gray-950">
                    {section.contact.company}
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    {section.contact.location}
                  </p>

                  <a
                    href={`mailto:${section.contact.email}`}
                    className="mt-2 inline-block text-sm font-medium text-[#12a555] hover:underline"
                  >
                    {section.contact.email}
                  </a>
                </div>
              )}
            </section>
          ))}

          {/* Back to home */}
          <div className="border-t border-gray-100 pt-8">
            <Link
              href="/"
              className="text-sm font-semibold text-[#12a555] transition hover:underline"
            >
              ← Back to Kaconex
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
