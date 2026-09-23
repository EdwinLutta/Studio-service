import { servicesData } from "@/lib/data";

export default function AboutSection() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b py-20 md:py-24 md:-mt-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-base font-semibold uppercase tracking-wider dark:text-gray-50 text-gray-600">
            About Kaconex Systems
          </p>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight md:text-6xl">
            Building the future through technology and creativity.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400 text-left">
            We help businesses, entrepreneurs, and creators turn ideas into
            powerful digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
              Our Mission
            </p>

            <h2 className="mt-4 text-lg sm:text-2xl md:text-4xl font-bold">
              To turn ambitious ideas into powerful digital solutions.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            <p>
              At Kaconex Systems, we believe technology should create
              opportunities, solve meaningful problems, and help businesses
              grow.
            </p>

            <p>
              Businesses and entrepreneurs have ideas capable of changing
              industries, improving lives, and creating entirely new
              opportunities. However, turning those ideas into reliable digital
              products can be challenging.
            </p>

            <p>That is where we come in.</p>

            <p>
              We combine technology, creativity, and strategic thinking to help
              transform ideas into websites, applications, software, and digital
              experiences built for real people and real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="border-y bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
            What We Believe
          </p>

          <h2 className="text-xl mt-4 font-bold md:text-5xl text-gray-600">
            Technology has the power to change how people build, connect, and
            grow.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              We believe businesses should have access to high-quality digital
              tools and experiences, regardless of their size.
            </p>

            <p>
              We believe great ideas deserve more than just an idea. They
              deserve the right technology, design, and strategy to bring them
              to life.
            </p>

            <p>
              And we believe that creativity and technology are most powerful
              when they work together.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#A8D03C]">
              What We Do
            </p>

            <h2 className="mt-4 text-2xl md:text-4xl font-bold">
              Digital solutions built around your ideas.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              From a simple business website to a complex web platform or mobile
              application, we help bring digital ideas to life.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border bg-white p-3 md:p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="md:text-xl text-sm font-bold text-gray-600">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-5xl">
            Your idea deserves to become something real.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you are launching a new business, building a digital
            product, improving an existing platform, or exploring a new idea,
            Kaconex Systems is here to help you build what comes next.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-black px-7 py-3 font-medium text-[#A8D03C] transition hover:opacity-90"
          >
            Let's Build Something
          </a>
        </div>
      </section>
    </main>
  );
}
