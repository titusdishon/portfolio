import Image from "next/image";

export const EducationData=[
    {
        title:"University",
        icon:'',
        description:'Moi University'
    },
    {
        title:"High School",
        icon:'',
        description:"ST.Mary's Viwandani Sec School "
    }
]
export default function Education() {
    return (
        <>
            <ul className="mb-8 space-y-4 text-left ">
            {EducationData.map((education)=>
                <li className="pb-3 sm:pb-4" key={education.title}>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <Image
                                width={700}
                                height={700}
                                className="w-8 h-8 bg-green-600 rounded-b-full rounded-t-full" src="/docs/images/people/profile-picture-1.jpg"
                                alt={education.title}/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-lg font-medium ">
                                {education.title}
                            </p>
                            <p className="text-sm  ">
                                {education.description}
                            </p>
                        </div>

                    </div>
                </li>
            )}
        </ul></>

    );
}
