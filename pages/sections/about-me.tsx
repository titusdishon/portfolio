import Skills from "./skills/skills";
import Education from "./education/education";
import Certification from "./certification/certification";

export default function Summary() {
  return (
    <div className="container mb-32 p-3">
      <h5 className="text-4xl  w-1/2 my-6  bg-clip-text text-sm font-bold leading-snug hover:opacity-75">My Journey</h5>
        <p>
            After high school, I wanted to be construction engineer. Well, that did not happen, my former maths teacher introduced me to computing.
            He suggested I pursue a degree in Computer science. I was not convinced at first, though I liked the basic things I could do with excel and Notepad, the basic HTML and CSS.
            Finally, I chose to try the course after joining Moi University.
        </p>
        <p>
            My first few years in Uny, I learned about Algorithms, the c & c++ programming language and statistics.
            After my third year I gave a shot at backend development with Node js and Mysql . Now that I had the APIs I need a way to expose them in
            a human friendly manner and that is how I learned about Reactjs. Since then I have been working with the two technologies as a fullstack software engineer.
        </p>
        <h5 className="text-4xl  w-1/2 my-6  bg-clip-text text-sm font-bold leading-snug hover:opacity-75">The Failed Startup</h5>
        <p>
            A friend approached me and said we could build a startup. He had a team of other five developers all working with different stacks.
            He wanted me to be part of the team and I could not refuse the opportunity
            to build something new. I took up backend development roles with Nodejs, Python and Postgres. Being a startup with limited workforce, I also took part
            in deployments to AWS, cloud monitoring configurations and some frontend development. That was my introduction to cloud computing especially with AWS EC2, S3 and RDS.
            Our startup failed to get enough funding to move to the market so we sought out for employment.
        </p>
      <h5 className="text-4xl  w-1/2 my-6  bg-clip-text text-sm font-bold leading-snug hover:opacity-75">Skills</h5>
        <Skills/>
      <h5 className="text-4xl  w-1/2 my-6  bg-clip-text text-sm font-bold leading-snug hover:opacity-75">Education</h5>
       <Education/>
      <h5 className="text-4xl  w-1/2 my-6 bg-clip-text text-sm font-bold leading-snug hover:opacity-75">Professional Certifications</h5>
        <Certification/>
    </div>
  );
}
