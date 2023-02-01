import  dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function Header() {
    const beginning =  dayjs('2017-12-01')
    const experience =()=>{
          return dayjs(beginning).toNow(true)
    }

    return (
    <div className="container p-3">
      <div className=" text-xl  my-6  bg-clip-text ">
       <p> Hi, My name is</p>
          <p> <span  className="lg:text-5xl my-6 text-cyan-500  font-bold  bg-clip-text ">Titus M. Dishon</span> </p>
      </div>
        <p>I like to craft <strong>solid</strong> and <strong>scalable</strong> Software products that are well <strong>tested</strong> and <strong>documented</strong>.</p>
        <p>I have  <span className=" text-lg my-6   font-bold  bg-clip-text ">{experience()}</span> working In different sectors and roles as a software engineer. </p>
        <p>I am also a certified and experienced cloud practitioner on AWS  </p>
    </div>
  );
}
