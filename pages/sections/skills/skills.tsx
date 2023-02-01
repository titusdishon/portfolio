import Image from "next/image";

export const CodingSkills=[
    {
        title:"Backend development ",
        icon:'',
        description:' Golang, Nodejs , PostgresSQL, Test Driven development, Graphql and  Rest APIS.'
    },
    {
        title:"Frontend ",
        icon:'',
        description:'React js, unit testing with Jest, end-to-end testing with Cypress, Micro-frontends , Webpack , Consuming rest api and state management'
    },
    {
        title:"Cloud computing & CICD ",
        icon:'',
        description:' Certified AWS Cloud practitioner,AWS, Docker,  Infrastructure as code, Jenkins, Sonar cloud analysis, Github Actions and pipeline optimization  '
    },
    {
        title:"Agile methodologies  ",
        icon:'',
        description:''
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
                            <p className="text-sm mt-3">
                                {skill.description}
                            </p>
                        </div>

                    </div>
                </li>
            )}
        </ul></>

    );
}
