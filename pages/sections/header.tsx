import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Header() {
  const beginning = dayjs("2017-12-01");
  const experience = () => {
    return dayjs(beginning).toNow(true);
  };

  return (
    <div className="container p-3">
      <div className=" text-xl  my-6  bg-clip-text ">
        <p> Hi, My name is</p>
        <p>
          <span className="lg:text-5xl my-6 text-cyan-500  font-bold  bg-clip-text ">
            Titus M. Dishon
          </span>
        </p>
      </div>
      <h2> Experience Frontend engineer {experience()}</h2>
    </div>
  );
}
