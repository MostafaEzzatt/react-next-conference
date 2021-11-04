import Image from "next/image";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const Speaker = ({ name, avatar, job, logo, github, twitter, linkedin }) => {
  return (
    <div className="w-full p-3 rounded-md shadow-md bg-white flex text-brand-dark items-center gap-5 hover:shadow-lg transition-shadow">
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={avatar}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={name}
        />
        ;
      </div>
      <div className="flex-auto">
        <div className="flex items-end gap-1">
          <h4 className="capitalize text-h4 leading-7">{name}</h4>
          <span className="capitalize text-[9.89px] text-brand">{job}</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="relative w-8 h-8">
            <Image
              src={logo}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="logo"
            />
          </div>
          <ul className="flex gap-1">
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                <AiFillGithub className="w-6 h-auto text text-social-github fill-current" />
              </a>
            </li>
            <li>
              <a href={twitter} target="_blank" rel="noreferrer">
                <AiOutlineTwitter className="w-6 h-auto text-social-twitter fill-current" />
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <AiFillLinkedin className="w-6 h-auto text-social-linkedin fill-current" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
