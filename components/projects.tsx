"use client";

import { Fragment } from "react";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
