import Link from "next/link";

const Hero = () => {
  return (
    <header className="w-full h-screen bg-hero bg-cover bg-center relative after:absolute after:w-full after:left-0 after:h-full after:top-0 after:bg-brand-dark after:opacity-80 after:z-0 flex items-center">
      <div className="container relative mx-auto z-[1]">
        <h1 className="text-white font-black font text-h1">
          {"<ReactNext />"}
        </h1>
        <h3 className="text-white font-medium text-h3 opacity-80">
          Purus duis gravida vitae at porttitor viverra adipiscing mauris,
          tortor.
        </h3>

        <h4 className="text-brand-light font-bold text-h4 mt-5 mb-[52px]">
          <span className="block">Barcelona Spain</span>
          <span className="block">28 February – 3 March 2022</span>
        </h4>

        <ul className="flex items-center">
          <li className="mr-44">
            <a
              href="#speakers"
              className="text-brand hover:text-brand-light text-[24px] transition-colors"
            >
              Speakers
            </a>
          </li>
          <li className="mr-44">
            <a
              href="#agenda"
              className="text-brand hover:text-brand-light text-[24px] transition-colors"
            >
              Agends
            </a>
          </li>
          <li>
            <a
              href="#accommodation"
              className="text-brand hover:text-brand-light text-[24px] transition-colors"
            >
              Accommodation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Hero;
