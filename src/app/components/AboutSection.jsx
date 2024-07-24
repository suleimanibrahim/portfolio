"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>Django</li>
        <li>SpringBoot</li>
        <li>PostgreSQL</li>
        <li>Mysql</li>
        <li>Nexjs</li>
        <li>Angular</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git/Github</li>
        <li>Docker</li>
        <li>Kubernates</li>
        <li>Kafka</li>
        <li>Redis</li>
        <li>Microservices</li>
        <li>CI/CD</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Abubakar Tafawa Balewa University Bauchi, Nigeria</li>
        <li>The Federal Polytechnic Damaturu, Nigeria </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Experienced Full Stack Developer and Startup Catalyst
         I am a versatile and skilled Full Stack Developer specialising in Java, Python, React, and Angular, with a focus on building scalable web applications. 
         I excel in both front-end and back-end development, delivering projects from concept to deployment with intuitive user interface design and robust server-side logic.

       <p className="font-bold mt-4">What Sets Me Apart?</p> 
       <ul className="list-disc mt-3">
        <li>
          <span className="font-bold">Versatility & Expertise:</span> Proficient in multiple programming languages and web frameworks, 
          I excel at Full Stack Development, allowing me to create robust and seamless applications. 
          My deep understanding of Java, Python, React, Nexjs, and more enables me to adapt swiftly to new technologies and frameworks.  
        </li> 
        <li><span className="font-bold">Startup Catalyst:</span> My extensive experience with early-stage startups and major organisations has given me the expertise to help businesses raise seed rounds.</li> 
        I play a crucial role in driving growth and success by building impactful products.
        <li><span className="font-bold">Commitment to Quality:</span> I believe great software is a result of a thoughtful process. I practice Test-Driven Development (TDD) and write organised, high-quality test code that is integral to the source code itself.</li>
        </ul>
       <p className="font-bold mt-3">Why Choose Me?</p> 
        I am dedicated to delivering top-notch solutions tailored to your unique requirements. My expertise in Full Stack Development allows me to craft intelligent and efficient applications. 
        By combining technical skills with a deep understanding of development best practices, I ensure a seamless collaboration for success.
        Let work together to transform your ideas into reality. Contact me today, and let elevate your projects with intelligent solutions and impeccable software engineering.
        <p className="font-bold mb-2">
          <br/>
           Key Skills and Expertise:
          <br/>
        </p>
          ✅Web Frameworks: Spring Boot, Django
          ✅Databases: PostgreSQL, MySQL, MongoDB, DynamoDB, Google Cloud Datastore, BigQuery
          ✅APIs: Google Ads API, Facebook Business API
          ✅DevOps: Kubernetes, Docker, AWS Services
          ✅Message Queues: Kafka, RabbitMQ, ActiveMQ, Artemis, AWS SQS
          ✅Authentication: Keycloak, Apache Camel
          ✅Architecture: Microservices, API Gateway, Service Discovery (Kubernetes), Configuration Management
          ✅Search Technologies: Elastic Search, Apache Solr
          ✅UI Frameworks: Angular, ReactJS, NexJs
          ✅Others: Spring, Spring Boot, Spring Cloud, Spring Security, Hibernate, JPA, JDBC, REST API, SOAP, gRPC, GraphQL, Apache POI
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
