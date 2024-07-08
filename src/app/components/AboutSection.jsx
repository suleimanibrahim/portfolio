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
        <li>SpringBoot</li>
        <li>PostgreSQL</li>
        <li>Nexjs</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Docker</li>
        <li>Kubernates</li>
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
          <p className="text-base lg:text-lg text-justify">
          Experienced Full Stack Developer skilled in Java, React, Nexjs and Angular, with a focus on building scalable web applications. Proficient in front-end and back-end development, I deliver projects from concept to deployment, employing intuitive user interface design and robust server-side logic.
          Key skills: Java, Microservices architecture, Python, Angular, Nexjs, HTML5, CSS3, JavaScript, RESTful APIs. I excel in problem-solving and collaborate effectively with cross-functional teams, ensuring high-quality code within project timelines.
          <p>
          <br/>
          Highlights:
          <br/>
          </p>
          Optimize performance and enhance user experience
          Embrace continuous integration and test-driven development
          Stay updated with industry trends and best practices
          Passionate about delivering innovative solutions that exceed expectations. Open to new challenges and opportunities for growth.
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
