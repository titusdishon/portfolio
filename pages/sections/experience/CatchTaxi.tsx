import BulletIcon from "../../components/icons/BulletPoint";

export default function CatchTaxi() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Catch Taxi Limited</h2>
      <ul className="list-inside list-disc space-y-3 text-gray-500 dark:text-gray-400">
        <li className="flex items-center">
          <BulletIcon />
          Created a registration system that allowed for registration of 70% of
          all Catch taxi drivers using React js, Material ui, Typescript and
          redux.
        </li>
        <li className="flex items-center">
          <BulletIcon /> Implemented unit tests using React testing library and
          Jest.
        </li>
        <li className="flex items-center">
          <BulletIcon />
          Implemented e2e tests using cypress. Backend development with Nodejs ,
          PostgreSQL and Graphql.
        </li>
        <li className="flex items-center">
          <BulletIcon /> Integrate google maps increasing fleet visibility by
          80% Trained and assigned tasks to junior engineers.
        </li>
        <li className="flex items-center">
          <BulletIcon />
          Task refinement and complexity estimation with Product owner and Scrum
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
