import Image from "next/image";

export const CodingSkills=[
    {
        title:"Golang",
        icon:'',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime explicabo commodi, consectetur aperiam sed esse possimus porro consequatur ratione asperiores? Reprehenderit accusamus maxime dolor amet eos cupiditate impedit illum.\n'
    },
    {
        title:"Golang",
        icon:'',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime explicabo commodi, consectetur aperiam sed esse possimus porro consequatur ratione asperiores? Reprehenderit accusamus maxime dolor amet eos cupiditate impedit illum.\n'
    }
]
export default function Skills() {
    return (
        <>
            <ul className="mb-8 space-y-4 text-left ">
            {CodingSkills.map((skill)=>
                <li className="pb-3 sm:pb-4" key={skill.title}>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <Image
                                width={700}
                                height={700}
                                className="w-8 h-8 bg-green-600 rounded-b-full rounded-t-full" src="/docs/images/people/profile-picture-1.jpg"
                                alt={skill.title}/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-lg font-medium ">
                                {skill.title}
                            </p>
                            <p className="text-sm  ">
                                {skill.description}
                            </p>
                        </div>

                    </div>
                </li>
            )}
        </ul></>

    );
}
