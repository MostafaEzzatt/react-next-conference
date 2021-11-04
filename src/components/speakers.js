import Link from "next/link";
import Seaction from "./section";
import Speaker from "./speaker";

const Speakers = () => {
  return (
    <Seaction title="Speakers" id="speakers">
      <div className="container mx-auto grid grid-cols-3 gap-5">
        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />

        <Speaker
          name="albert koka"
          avatar="https://i.pravatar.cc/90"
          job="web developer"
          logo="https://i.pravatar.cc/30"
          github="#"
          twitter="#"
          linkedin="#"
        />
      </div>

      <div className="container mx-auto flex justify-center mt-8">
        <Link href="/speakers">
          <a className="px-3 py-2 bg-brand-dark text-white inline-block rounded-md hover:bg-brand transition-colors">
            Meet The Rest
          </a>
        </Link>
      </div>
    </Seaction>
  );
};

export default Speakers;
