import Link from "next/link";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const AppFooter = () => {
  return (
    <footer className="py-10 px-5 bg-brand-dark text-white mt-[1px]">
      <div className="container mx-auto grid grid-cols-3">
        <div>
          <h1 className="text-h3 font-bold">{"<ReactNext />"}</h1>
          <div>
            <ul className="flex gap-16">
              <li>
                <Link href="#">
                  <a>
                    <BsLinkedin className="w-9 h-9 hover:text-brand-light hover:fill-current transition-colors" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <BsTwitter className="w-9 h-9 hover:text-brand-light hover:fill-current transition-colors" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <FaFacebookSquare className="w-9 h-9 hover:text-brand-light hover:fill-current transition-colors" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h6 className="text-[24px] font-medium mb-3">Menu</h6>
          <ul className="space-y-3">
            <li>
              <Link href="/">
                <a className="flex items-center hover:text-brand-light transition-colors">
                  <FiChevronRight className="mr-2" />
                  Speakers
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex items-center hover:text-brand-light transition-colors">
                  <FiChevronRight className="mr-2" />
                  Agenda
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex items-center hover:text-brand-light transition-colors">
                  <FiChevronRight className="mr-2" />
                  Accommodation
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-end">
          <Link href="/code-of-conduct">
            <a>Code of Conduct</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
