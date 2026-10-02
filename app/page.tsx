import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FAQSection from "@/components/faqSection";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { projectsData, servicesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* ================= HERO ================= */}
      <section className="relative isolate">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),_transparent_40%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Building digital solutions that matter
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              We turn ideas into
              <span className="text-gray-500">digital experiences.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
              Kaconex builds modern websites, web applications, mobile apps,
              digital products, and custom technology solutions that help
              businesses grow and operate better.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-[#12a555] px-7 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-[#A8D03C] px-7 py-4 text-center text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-[#6c8a17]"
              >
                Learn About Kaconex
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
              <span>Web Development</span> <span>Mobile Apps</span>
              <span>Digital Products</span> <span>Training</span>
            </div>
          </div>
          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gray-100">
              <Image
                src="/TeamworkingTogether.jpg"
                alt="Kaconex team working on digital solutions"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10" />
              {/* Floating card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#A8D03C] bg-white/90 p-5 shadow-2xl backdrop-blur-md sm:left-7 sm:right-auto sm:max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  What we do
                </p>
                <p className="mt-2 text-lg text-gray-600 font-semibold">
                  Technology, creativity & practical solutions.
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We help turn ideas into products people can actually use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= INTRO ================= */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                About Kaconex
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl text-gray-600">
                More than just technology.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-gray-600">
                Kaconex combines technology, creativity, and practical thinking
                to create digital solutions for businesses, entrepreneurs,
                organizations, and individuals.
              </p>
              <p className="mt-5 text-base leading-7 text-gray-600">
                From a simple business website to a complete web application,
                mobile product, or custom digital system, we focus on building
                solutions that solve real problems and create measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SERVICES ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Our Services
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
                Digital solutions built around your needs.
              </h2>
            </div>
            <Link
              href="/aboutUs"
              className="text-sm font-semibold underline underline-offset-4"
            >
              Explore what we do →
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-[#A8D03C] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#6c8a17] hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-7 text-xl font-bold"> {service.title} </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6 text-sm font-semibold opacity-0 transition duration-300 group-hover:opacity-100">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WORK ================= */}
      <section className="bg-black py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
              Our Work
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
              Ideas we've turned into products.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
              We build practical digital experiences across web, mobile, and
              business technology.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-1">
            {projectsData.slice(0, 4).map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl bg-gray-900 ${index === 0 ? "md:row-span-2" : ""}`}
              >
                <div
                  className={`relative ${index === 0 ? "aspect-[4/3] md:h-full" : "aspect-[16/10]"}`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#A8D03C]">
                      Project
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#A8D03C]">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="mt-2 max-w-lg text-sm leading-6 text-gray-300">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="mailto:careers@kaconex.com"
              className="inline-flex rounded-xl border border-[#A8D03C] px-6 py-3 text-sm font-semibold transition hover:border-white"
            >
              Book a live session →
            </Link>
          </div>
        </div>
      </section>
      {/* ================= TRAINING ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Image */}
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
              alt="Students learning technology skills"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
              Kaconex Training Programs
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
              We don't just build talent. <br />
              <span className="text-gray-500">We develop it.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">
              Kaconex also provides practical training programs designed to
              equip aspiring professionals with relevant digital and technology
              skills.
            </p>
            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-500">
              Our training focuses on practical learning, real-world projects,
              problem solving, professional development, and the skills
              participants need to confidently transition into professional
              environments.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Practical learning",
                "Real-world projects",
                "Professional guidance",
                "Career development",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-600 text-sm font-medium"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
            <Link
              href="/training-program"
              className="mt-8 inline-flex rounded-xl bg-[#12a555] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Training Programs
            </Link>
          </div>
        </div>
      </section>
      {/* ================= TRAINING FEE ================= */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Training Information
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl text-gray-600">
              Invest in practical skills for your future.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Our training programs are fee-based. Program fees may vary
              depending on the training, duration, learning structure, and
              resources included.
            </p>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-gray-50 shadow-md p-6 text-left">
              <p className="font-semibold text-gray-600">
                Looking for detailed training information?
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                For information about available programs, fees, schedules,
                requirements, registration, and guidance for prospective
                participants or guardians, please contact our Careers Team.
              </p>
              <p className="mt-4 text-sm font-medium text-gray-900">
                Careers Team
              </p>
              <a
                href="mailto:careers@kaconex.com"
                className="mt-1 inline-block text-[#12a555] text-sm font-semibold underline underline-offset-4"
              >
                careers@kaconex.com
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY KACONEX ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
                Why Kaconex
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
                Built with purpose.
              </h2>
              <p className="mt-5 leading-7 text-gray-600 dark:text-gray-500">
                Whether you're building a business, launching a product, or
                developing your career, we believe technology should create
                opportunities and solve meaningful problems.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Practical",
                  text: "We focus on solutions that work in real-world environments.",
                },
                {
                  title: "Creative",
                  text: "We combine technology with thoughtful design and fresh ideas.",
                },
                {
                  title: "Scalable",
                  text: "We build with the future of your product or business in mind.",
                },
                {
                  title: "People-focused",
                  text: "We care about the people using the products we create and train.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#A8D03C] p-7"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-black px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
            Let's build something
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Have an idea? Let's turn it into something real.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Tell us what you're building, what you're trying to solve, or where
            you want to go. We'll help you figure out the next step.
          </p>
          <div className="mt-9 justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#12a555] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
      <FAQSection />
    </main>
  );
}
