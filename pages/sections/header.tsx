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
      <h3 className=" text-xl  my-6  bg-clip-text ">
        Hi, Am<span className=" text-xl my-6 text-blue-700  font-extrabold  bg-clip-text "> Titus </span>
      </h3>
        <p>I like to craft <strong>solid</strong> and <strong>scalable</strong> Software products that are well <strong>tested</strong> and <strong>documented</strong>.</p>
        <p>I have  <span className=" text-lg my-6   font-bold  bg-clip-text ">{experience()}</span> working In different sectors and roles. </p>
    </div>
  );
}
