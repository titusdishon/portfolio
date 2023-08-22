import BulletIcon from "../../components/icons/BulletPoint";

export default function ProtoEnergy() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Proto Energy Limited</h2>
      <ul className="list-inside list-disc space-y-3 text-gray-500 dark:text-gray-400">
        <li className="flex items-center">
          <BulletIcon />
          Created the Pro gas mini-app on Safaricom M-Pesa supper application
          using javascript and xml.
        </li>
        <li className="flex items-center">
          <BulletIcon /> Created a modern dashboard for supply chain management
          increasing the efficiency of the sales and logistics team by more than
          70% using React js, Typescript and Redux.{" "}
        </li>
        <li className="flex items-center">
          <BulletIcon /> Implemented Backend services with Nodejs and MySQL and
          REST APIS. Implemented e2e and unit tests with React testing library
          and jest.
        </li>
        <li className="flex items-center">
          <BulletIcon /> Provided mentorship to junior developers . Task
          refinement and complexity estimation with Product owner and Scrum
          master.
        </li>
        <li className="flex items-center">
          <BulletIcon /> High level effort estimation. Sprint reviews and
          presentations to business stake-holders. Feature documentations.
        </li>
      </ul>
    </section>
  );
}
