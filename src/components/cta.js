import Link from "next/link";
import Section from "./section";
import AppCountdown from "./countdown";

const Cta = () => {
  return (
    <Section className="bg-brand-dark pb-16">
      <div className="container mx-auto mt-5">
        <h2 className="text-h3 font-bold text-center text-white">
          Buy now your ticket for $249
        </h2>
        <p className="text-[56px] text-brand-light font-bold text-center mt-4">
          <AppCountdown eventDate="Jan 5, 2022 14:37:25" />
        </p>

        <div className="container flex justify-center mt-4">
          <Link href="/agenda">
            <a className="px-3 py-2 bg-white text-brand-dark inline-block rounded-md hover:bg-brand transition-colors font-medium">
              Book Your Tickets
            </a>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Cta;
