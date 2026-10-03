"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Location",
    value: "United States",
    description: "Our team is based in the United States.",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+1 209 434 3799",
    description: "Call us during our business hours.",
    href: "tel:+12094343799",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "careers@kaconex.com",
    description: "Send us an email and we'll get back to you.",
    href: "mailto:careers@kaconex.com",
  },
  {
    icon: FaClock,
    title: "Business Hours",
    value: "Mon – Fri",
    description: "09:00 – 17:00 ET",
  },
];

const reasons = [
  "Start a website or web application project",
  "Discuss a mobile application idea",
  "Ask about our digital solutions",
  "Enquire about our training programs",
  "Discuss a custom software solution",
  "Partner with Kaconex",
];

export default function ContactSection() {
  return (
    <main className="overflow-hidden text-gray-950 dark:text-white">
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-12">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#A8D03C] dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-[#A8D03C]">
              Get in touch
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Let&apos;s build something{" "}
              <span className="text-[#A8D03C] dark:text-[#A8D03C]">
                remarkable.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">
              Have an idea, a business challenge, or a project you want to bring
              to life? Talk to the Kaconex team and let&apos;s explore how
              technology can help you move forward.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <div className="group h-full rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#A8D03C] transition group-hover:bg-[#6b8a1789] group-hover:text-white dark:bg-[#6b8a1720] dark:text-[#A8D03C] dark:group-hover:bg-[#6b8a1789] dark:group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <h2 className="mt-5 font-semibold">{item.title}</h2>

                  <p className="mt-2 break-words font-medium text-gray-900 dark:text-gray-100">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                  }}
                >
                  {item.href ? <a href={item.href}>{content}</a> : content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20 sm:px-8 lg:px-12 dark:border-gray-900 dark:bg-gray-900/40">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A8D03C]">
              Start a conversation
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us what you&apos;re building.
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              Whether you need a website, mobile application, custom software,
              digital product, or want to learn more about our training
              programs, we&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#A8D03C]" />
                  <span className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            {/* United States box */}
            <div className="mt-10 rounded-3xl bg-gray-950 p-6 text-white dark:bg-black">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#A8D03C]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Kaconex LLC — United States</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Our United States office serves as a point of contact for
                    clients, partners, and individuals interested in working
                    with Kaconex.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl shadow-black/[0.03] sm:p-8 dark:border-gray-800 dark:bg-gray-950"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Send us a message</h2>

              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Fill out the form below and our team will get back to you.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#12a555] focus:ring-4 focus:ring-[#12a55415] dark:border-gray-800 dark:bg-gray-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#12a555] focus:ring-4 focus:ring-[#12a55415] dark:border-gray-800 dark:bg-gray-900"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  placeholder="+1 ..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#12a555] focus:ring-4 focus:ring-[#12a55415] dark:border-gray-800 dark:bg-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  What can we help with?
                </label>

                <select
                  id="subject"
                  name="subject"
                  className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#12a555] focus:ring-4 focus:ring-[#12a55415] dark:border-gray-800 dark:bg-gray-900"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="website">Website Development</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="software">Custom Software</option>
                  <option value="training">Training Programs</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us a little about your project or enquiry..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#12a555] focus:ring-4 focus:ring-[#12a55415]"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gray-950 px-6 py-4 font-semibold text-white transition hover:bg-[#12a555] dark:bg-white dark:text-gray-950 dark:hover:bg-[#12a55495] dark:hover:text-white"
              >
                Send message
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gray-950 px-6 py-16 text-center text-white sm:px-12 dark:bg-black"
        >
          <div className="mx-auto max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A8D03C]">
              Ready when you are
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have an idea? Let&apos;s turn it into reality.
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Tell us what you have in mind and let&apos;s discuss the best
              digital solution for your goals.
            </p>

            <Link
              href="mailto:careers@kaconex.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-gray-950 transition hover:bg-[#12a55495] hover:text-white"
            >
              Connect with us
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
