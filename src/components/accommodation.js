import Image from "next/image";
import Section from "./section";

const Accommodation = () => {
  return (
    <Section title="Accommodation" id="accommodation" className="mb-10">
      <div className="container mx-auto  grid grid-cols-3 gap-5">
        {/* Start Main Block */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
          <div className="relative h-80">
            <Image
              src="https://i.pravatar.cc/500"
              alt="hotel"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="px-4 py-5">
            <h4 className="font-medium text-base text-brand-dark">
              Hotel Name
            </h4>
            <address className="text-sm text-brand not-italic mt-2">
              Hotel Address
            </address>
          </div>
        </div>
        {/* End Main Block */}

        {/* Start Fill Blocks */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
          <div className="relative h-80">
            <Image
              src="https://i.pravatar.cc/500"
              alt="hotel"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="px-4 py-5">
            <h4 className="font-medium text-base text-brand-dark">
              Hotel Name
            </h4>
            <address className="text-sm text-brand not-italic mt-2">
              Hotel Address
            </address>
          </div>
        </div>
        <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
          <div className="relative h-80">
            <Image
              src="https://i.pravatar.cc/500"
              alt="hotel"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="px-4 py-5">
            <h4 className="font-medium text-base text-brand-dark">
              Hotel Name
            </h4>
            <address className="text-sm text-brand not-italic mt-2">
              Hotel Address
            </address>
          </div>
        </div>
        {/* End Fill Blocks */}
      </div>
    </Section>
  );
};

export default Accommodation;
