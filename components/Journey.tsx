import { Timeline } from "./ui/timeline";
import Image from "next/image";

export default function Journey(){
      const data = [
    {
      title: "2024",
      content: (
        <div>
            <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
                Microsoft & Telco-IoT CoE
            </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
            Launched new Centers of Excellence focused on Microsoft technologies and Telco-IoT (Internet of Things) solutions. This step diversified the company’s technology stack and positioned it for leadership in smart solutions, cloud computing, and next-gen telecom innovations.
          </p>
          <div className="grid grid-cols-2 gap-4 text-white">
            <Image
              src="https://www.eetimes.com/wp-content/uploads/2019/01/iot-city.jpg"
              alt="2024"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
            India Offshore Center
          </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
            A full-fledged offshore delivery center was set up in India to support global clients with 24/7 services. This marked a significant upgrade in operational capacity and reinforced India’s role as a strategic technology hub for the company.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.gqindia.com/photos/683805eb76a12e05cf217b1b/16:9/w_2560%2Cc_limit/Bengaluru-tech-powerhouse.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
            SAP & Zoho CoE (Center of Excellence)
          </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
                Established dedicated Centers of Excellence for SAP and Zoho solutions, offering enterprise clients specialized implementation, integration, and support services. These CoEs positioned the company as a trusted partner in ERP and business software ecosystems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://architecture.live/wp-content/uploads/2022/08/architectureRED_Centre_of_Excellence_2.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div key={Math.random()*100}>
          <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
            USA & Germany Operations
          </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
                The company expanded its footprint into Western markets by launching operations in the USA and Germany. This broadened the client base, allowed closer proximity to key customers, and enhanced its global delivery capabilities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-statue-of-liberty-in-front-the-manhattan-skyline-new-york-city-image_15937338.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div key={2020}>
          <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
            India Sourcing Operations
          </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
                India operations were initiated to leverage cost-effective talent and robust IT capabilities. This move enabled global sourcing, strengthened backend operations, and created a scalable offshore delivery model.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://t3.ftcdn.net/jpg/14/43/23/64/360_F_1443236493_ssuTacW5oM52YFiv9x3ZkIyroA1AXeUu.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div key={2019}>
          <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
            Digital Platform Launched
          </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
                A major product milestone: the launch of the company’s digital platform. This enabled automation, scalability, and enhanced digital services, forming the core infrastructure to support global operations and digital transformation initiatives for clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169860.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div key={2018}>
          <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
            IT Corridors in China
          </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
                Expansion began into mainland China with the establishment of IT corridors, enabling the company to tap into the region&apos;s vast tech talent pool and strengthen its delivery capabilities in the Asian market.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://archello.s3.eu-central-1.amazonaws.com/images/2022/02/25/saltans-architects-nanfang-university-technology-park-universities-archello.1645795080.4214.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div key={2017}>
          <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">
            Founded in HONG KONG
          </h1>
          <p className="mb-8 text-md font-normal  md:text-lg ">
                The company was established in Hong Kong, marking its official entry into the global market. This foundational year laid the groundwork for future growth and innovation, focusing on international business strategy and service offerings.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://as1.ftcdn.net/jpg/03/18/55/70/1000_F_318557063_SXxMKJv5DirygrbpgDAMBInlkxspOtng.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }
  ];
  
    return (
    <div className="w-screen">
        <Timeline data={data}/>
    </div>
                  
    )
}