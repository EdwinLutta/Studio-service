"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheck,
  FaChevronRight,
  FaGlobe,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPlane,
  FaUsers,
  FaBriefcase,
  FaCode,
  FaChartBar,
  FaClipboardCheck,
  FaPalette,
} from "react-icons/fa";

import { trainingPrograms } from "@/lib/data";

const iconMap = {
  Code2: FaCode,
  ClipboardCheck: FaClipboardCheck,
  ChartNoAxesCombined: FaChartBar,
  BriefcaseBusiness: FaBriefcase,
  UsersRound: FaUsers,
  Palette: FaPalette,
};

export default function TrainingSection() {
  return (
    <main className="overflow-hidden text-gray-950">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),_transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
              <FaGraduationCap className="h-4 w-4" />
              Kaconex Training Programs
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Learn skills.
              <br />
              <span className="text-gray-500">Build your future.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Kaconex provides practical training programs designed to help
              aspiring professionals develop relevant technical, business,
              administrative, and digital skills for today's workplace.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Programs
                <FaArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="mailto:careers@kaconex.com"
                className="rounded-xl border border-gray-200 px-7 py-4 text-center text-sm font-semibold transition hover:border-black"
              >
                Contact Careers Team
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative aspect-[8/10] sm:aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85"
                alt="Students participating in professional training"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 90vw"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-2 left-5 right-5 sm:bottom-5  rounded-2xl border border-white/30 bg-white/90 p-2 sm:p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                    <FaGraduationCap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold">Practical learning</p>

                    <p className="mt-1 text-xs sm:text-sm leading-6 text-gray-600">
                      Develop skills through structured learning and practical
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Training designed around real-world skills.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-600">
                We believe effective training should go beyond theory. Kaconex
                programs are designed to give participants useful knowledge,
                practical understanding, and skills that can be applied in
                professional environments.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Practical",
                    text: "Learn concepts through practical applications and exercises.",
                  },
                  {
                    title: "Relevant",
                    text: "Develop skills aligned with modern professional environments.",
                  },
                  {
                    title: "Career-focused",
                    text: "Build knowledge that can support your professional journey.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <h3 className="font-bold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMS
      ===================================================== */}
      <section id="programs" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Training Programs
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
              Explore your area of interest.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Our training portfolio covers technology, business,
              administration, data, project management, and digital skills.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program) => {
              const Icon = iconMap[program.icon as keyof typeof iconMap];

              return (
                <div
                  key={program.title}
                  className="group rounded-2xl border border-gray-200 p-7 transition duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{program.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {program.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {program.programs.slice(0, 4).map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <FaCheck className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="mailto:careers@kaconex.com"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Request program details
                    <FaChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ONLINE TRAINING
      ===================================================== */}
      <section className="bg-black py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1400&q=85"
              alt="Online professional training"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute left-5 top-5 rounded-xl border border-white/20 bg-black/70 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <FaGlobe className="h-4 w-4" />
                <span className="text-sm font-medium">Learn from anywhere</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Online Training
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
              Learn without being in the classroom.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Our online training option gives participants the opportunity to
              develop professional skills remotely, making learning more
              accessible regardless of location.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Remote learning from your location",
                "Structured training sessions",
                "Access to learning resources",
                "Practical assignments and activities",
                "Professional guidance",
                "Flexible learning opportunities",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                    <FaCheck className="h-3.5 w-3.5" />
                  </div>

                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <p className="font-semibold">Interested in online training?</p>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Program availability, schedules, fees, requirements, and
                delivery arrangements vary. Contact our Careers Team for
                complete information before applying.
              </p>

              <a
                href="mailto:careers@kaconex.com"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4"
              >
                Contact Careers Team
                <FaArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IN-PERSON TRAINING
      ===================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                In-Person Training
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
                Learn in a practical, in-person environment.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                For participants who prefer classroom-based learning, Kaconex
                may offer in-person training opportunities depending on the
                program and available intake.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Participants interested in attending an in-person program must
                be able to travel to the country where the training is being
                delivered and meet the applicable entry and immigration
                requirements.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    title: "Attend in person",
                    text: "Participate in classroom-based training and practical activities.",
                  },
                  {
                    icon: FaPlane,
                    title: "Travel preparation",
                    text: "Receive guidance on the steps involved in preparing for your journey.",
                  },
                  {
                    icon: FaGlobe,
                    title: "Immigration guidance",
                    text: "Receive general guidance on relevant immigration and travel processes.",
                  },
                  {
                    icon: FaUsers,
                    title: "Professional environment",
                    text: "Learn alongside other participants in a structured environment.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200 p-5"
                    >
                      <Icon className="h-5 w-5" />

                      <h3 className="mt-4 font-bold">{item.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85"
                alt="Participants attending in-person training"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMMIGRATION / TRAVEL GUIDANCE
      ===================================================== */}
      <section className="bg-gray-50 py-4 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm sm:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                <FaPlane className="h-6 w-6" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Travel & Immigration Guidance
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                Preparing for an in-person training journey.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                For eligible in-person programs, Kaconex can provide information
                and general guidance to help participants understand the
                preparation involved in travelling for their training.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Program information",
                  text: "Understand the training program, location, schedule, and participation requirements.",
                },
                {
                  number: "02",
                  title: "Travel preparation",
                  text: "Receive guidance on the documentation and preparation steps relevant to your planned travel.",
                },
                {
                  number: "03",
                  title: "Immigration guidance",
                  text: "Understand the applicable immigration process and requirements relevant to your circumstances.",
                },
              ].map((item) => (
                <div key={item.number} className="rounded-2xl bg-gray-50 p-6">
                  <span className="text-sm font-bold text-gray-400">
                    {item.number}
                  </span>

                  <h3 className="mt-4 font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 p-6">
              <p className="text-sm leading-6 text-gray-600">
                Immigration requirements can differ depending on the
                participant's nationality, destination, purpose of travel, and
                individual circumstances. Guidance does not guarantee visa
                approval or entry into a country. Participants should follow the
                requirements of the relevant authorities and seek professional
                immigration advice where appropriate.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="mailto:careers@kaconex.com"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                Ask About In-Person Training
                <FaArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              How It Works
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
              Start your training journey.
            </h2>
          </div>

          <div className="mt-6 sm:mt-12 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Choose a program",
                text: "Explore the available training areas and identify the program that matches your goals.",
              },
              {
                number: "02",
                title: "Contact us",
                text: "Speak with our Careers Team to receive detailed information about the program.",
              },
              {
                number: "03",
                title: "Apply",
                text: "Complete the required application and registration process for your selected program.",
              },
              {
                number: "04",
                title: "Start learning",
                text: "Begin your training through the available online or in-person learning format.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-200 p-7"
              >
                <span className="text-sm font-bold text-gray-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEES
      ===================================================== */}
      <section className="bg-gray-50 py-4 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 text-left shadow-sm sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
              <FaGraduationCap className="h-6 w-6" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Training Fees
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
              Training programs are fee-based.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Training fees vary depending on the program, duration, learning
              format, resources, and other requirements. We provide detailed fee
              information to prospective participants during the application and
              enquiry process.
            </p>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-gray-50 p-6 text-left">
              <p className="font-semibold">Need complete information?</p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Contact our Careers Team for current program availability, fees,
                schedules, requirements, application information, online
                training options, and in-person training details.
              </p>

              <a
                href="mailto:careers@kaconex.com"
                className="mt-4 inline-block font-semibold underline underline-offset-4"
              >
                careers@kaconex.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-black px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Ready to take the next step?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your next skill could change your career.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            Get in touch with our Careers Team to learn more about available
            training programs and find the right option for you.
          </p>

          <a
            href="mailto:careers@kaconex.com"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Careers Team
            <FaArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
