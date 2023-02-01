import Image from "next/image";

const CertificationData=[
    {
        title:"AWS ",
        icon:'',
        description:'AWS Cloud Practitioner '
    },
    {
        title:"S3",
        icon:'',
        description:"AWS Storage Badge  "
    },
    {
        title:"Compute",
        icon:'',
        description:"AWS compute training   "
    }
]
export default function Certification() {
    return (
        <>
            <ul className="mb-8 space-y-4 text-left ">
            {CertificationData.map((cert)=>
                <li className="pb-3 sm:pb-4" key={cert.title}>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <Image
                                width={700}
                                height={700}
                                className="w-8 h-8 bg-green-600 rounded-b-full rounded-t-full" src="/docs/images/people/profile-picture-1.jpg"
                                alt={cert.title}/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-lg font-medium ">
                                {cert.title}
                            </p>
                            <p className="text-sm  ">
                                {cert.description}
                            </p>
                        </div>

                    </div>
                </li>
            )}
        </ul></>

    );
}
