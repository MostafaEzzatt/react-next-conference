import Section from "./section";
import AgendaCell from "./agendaCell";
import Link from "next/link";

const Agenda = () => {
  return (
    <Section title="agenda" id="agenda">
      <div className="container mx-auto">
        <table className="table-auto w-full rounded-md overflow-hidden shadow-lg">
          <thead>
            <tr className="h-20">
              <th className="w-2/12 text-h4 capitalize font-medium text-white bg-brand-dark">
                time
              </th>
              <th className="w-2/12 text-h4 capitalize font-medium text-white bg-brand-dark">
                speaker
              </th>
              <th className="w-6/12 text-h4 capitalize font-medium text-white bg-brand-dark">
                talk about
              </th>
              <th className="w-2/12 text-h4 capitalize font-medium text-white bg-brand-dark"></th>
            </tr>
          </thead>
          <tbody className="bg-white text-brand-dark">
            <AgendaCell
              time="06:00 pm"
              name="Jane Cooper"
              image="https://i.pravatar.cc/38"
              job="Web Developer"
              description="Tellus est blandit vulputate viverra nulla. Semper massa ut leo viverra
        lectus mauris justo, eget."
            />

            <AgendaCell
              time="07:00 pm"
              name="Cameron Williamson"
              image="https://i.pravatar.cc/38"
              job="Web Developer"
              description="Est ullamcorper sed volutpat condimentum. Interdum habitant ultricies etiam pellentesque."
            />

            <AgendaCell
              time="08:00 pm"
              name="Kristin Watson"
              image="https://i.pravatar.cc/38"
              job="Web Developer"
              description="Dui ipsum velit hendrerit mauris lacus. Faucibus neque iaculis felis eu in."
            />

            <AgendaCell
              time="09:00 pm"
              name="Courtney Henry"
              image="https://i.pravatar.cc/38"
              job="Web Developer"
              description="Quis quis hendrerit adipiscing tincidunt augue diam commodo. Maecenas odio praesent at mauris, in tortor."
            />
          </tbody>
        </table>

        <div className="container flex justify-center mt-8">
          <Link href="/agenda">
            <a className="px-3 py-2 bg-brand-dark text-white inline-block rounded-md hover:bg-brand transition-colors">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Agenda;
