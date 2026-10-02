import { pricingData } from "@/lib/data";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>

          <p className="mt-4 text-gray-400 text-base">
            Choose the package that best fits your business and digital goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 shadow-sm ${
                plan.popular
                  ? "border-black ring-1 ring-black"
                  : "border-gray-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-4 min-h-[72px] text-gray-600 dark:text-gray-300">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-2xl sm:text-4xl font-bold">
                  {plan.price}
                </span>

                <span className="ml-2 text-sm text-gray-500">
                  {plan.period}
                </span>
              </div>

              <Link
                href={plan.buttonLink}
                className="mt-8 block rounded-lg bg-[#12a555] px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                {plan.buttonText}
              </Link>

              <div className="mt-8 border-t pt-6">
                <p className="mb-4 font-semibold">What's included:</p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          All prices are starting estimates. Final pricing may vary depending on
          project requirements, features, integrations, and complexity.
        </p>
      </div>
    </section>
  );
}
