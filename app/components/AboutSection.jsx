"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>TypeScript</li>
        <li>Go ({"golang"})</li>
        <li>C</li>
        <li>SQL</li>
        <li>Visual Basic</li>
        <li>MATLAB</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Django</li>
        <li>Flask</li>
        <li>PyTorch</li>
        <li>Pandas</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>SQLite3</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Redis</li>
        <li>Google Cloud Platform ({"GCP"})</li>
        <li>Amazon Web Services ({"AWS"})</li>
      </ul>
    ),
  },
  {
    title: "Architecture",
    id: "arch",
    content: (
      <ul className="list-disc pl-2">
        <li>RESTful APIs</li>
        <li>Node.js/Express</li>
        <li>FastAPI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Engineering, McGill Univeristy, Montreal</li>
        <li>Masters of Engineering, McGill University, Montreal</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a software developer who crafts interactive and responsive web
            applications. Proficient in Python, JavaScript, and SQL. I leverage
            technologies like React, Node.js, Express, PostgreSQL, MongoDB,
            Redis and Git to deliver impactful solutions. My track record
            includes successfully solving real-world problems through multiple
            project deliveries. I continuously enhance my skills by embracing
            new challenges. I&apos;m always excited to contribute to dynamic
            teams in developing innovative and impactful applications.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("arch")}
              active={tab === "arch"}
            >
              {" "}
              Architecture{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
