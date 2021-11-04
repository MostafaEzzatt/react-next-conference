import Image from "next/image";

const AgendaCell = ({ time, name, image, job, description }) => {
  return (
    <tr className="h-20">
      <td className="text-center text-h4">{time}</td>
      <td className="w-2/12 p-2 overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="relative w-9 h-9 rounded-full overflow-hidden">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="name"
            />
          </div>
          <div className="flex-auto max-w-[185px]">
            <h4 className="text-[20px] font-medium text-brand-dark leading-[100%] truncate">
              {name}
            </h4>
            <span className="text-[13px] text-brand">{job}</span>
          </div>
        </div>
      </td>
      <td>{description}</td>
      <td className="text-center">
        <button className="text-xl text-brand-dark">Read more</button>
      </td>
    </tr>
  );
};

export default AgendaCell;
