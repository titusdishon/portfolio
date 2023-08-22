import BulletIcon from "../../components/icons/BulletPoint";

export default function Jibutel() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold">Jibutel Limited</h2>
      <ul className="list-inside list-disc space-y-3 text-gray-500 dark:text-gray-400">
        <li className="flex items-center">
          <BulletIcon />
          Gained training on Linux server configurations and software
          deployment.
        </li>
        <li className="flex items-center">
          <BulletIcon />
          Used Node.js, TypeScript, React JS, and MySQL to develop a record
          tracking system.
        </li>
        <li className="flex items-center">
          <BulletIcon />
          Presentation and meetings with stakeholders to draw the project road
          map.
        </li>
      </ul>
    </section>
  );
}
