import Image from "next/image";

const CertificationData = [
  {
    title: "AWS",
    icon: "",
    link: "https://www.credly.com/badges/dd0e02be-7f1a-4b2f-8117-38adb9d35d99/public_url",
    description: "AWS Certified Cloud Practitioner ",
  },
  {
    title: "AWS Educate Getting Started with Compute",
    icon: "",
    link: "https://www.credly.com/badges/052e6675-196c-4441-9ced-60deb3b149e7/public_url",
    description: "Amazon Elastic Compute Cloud (EC2)  ",
  },
  {
    title: "AWS Educate Getting Started with Storage",
    icon: "",
    link: "https://www.credly.com/badges/7968aa23-1e87-4323-939c-b03464818e2a/public_url",
    description: "AWS Storage services, S3, RDS, Aurora etc..",
  },
  {
    title: "How to design & develop REST microservices in Golang (Go)\n",
    icon: "",
    link: "https://www.udemy.com/certificate/UC-ab689f0e-c673-4db1-a9fa-77bd93c7b742/",
    description: "Backend development with Golang training ..",
  },
];
export default function Certification() {
  return (
    <>
      <ul className="container lg:w-6/12 p-10">
        {CertificationData.map((cert) => (
          <li className="pb-3 sm:pb-4" key={cert.title}>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  width={700}
                  height={700}
                  className="w-8 h-8 bg-green-600 rounded-b-full rounded-t-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt={cert.title}
                />
              </div>
              <div className="flex-1 min-w-0">
                <a href={cert.link} className="text-lg font-medium ">
                  {cert.title}
                </a>
                <p className="text-sm mt-3">
                  <a href={cert.link}>{cert.description}</a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
