import Skills from "./skills/skills";
import Education from "./education/education";
import Certification from "./certification/certification";

export default function Summary() {
  return (
    <div className="container mb-32 p-3">
      <h5 className="text-3xl  w-1/2 my-6  bg-clip-text text-sm uppercase font-bold leading-snug hover:opacity-75">Skills</h5>
        <Skills/>
      <h5 className="text-3xl  w-1/2 my-6  bg-clip-text text-sm uppercase font-bold leading-snug hover:opacity-75">Education</h5>
       <Education/>
      <h5 className="text-3xl  w-1/2 my-6 bg-clip-text text-sm uppercase font-bold leading-snug hover:opacity-75">Certifications</h5>
        <Certification/>
    </div>
  );
}
