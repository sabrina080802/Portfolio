import RootLayout from "./../layout";

import { MouseEventHandler } from "react";
import React, { useState } from "react";
import ProjectTest from "@/components/project-filter";
import Project, { ProjectInfo } from "@/components/project";
import projects from "@/public/projects.json";

type ProjectFilter = {
  tagName: string;
  projects: Array<ProjectInfo>;
  enabled: boolean;
};

export default function ProjetCNED() {
  const cnedProjects = projects.filter((x) => x.tags.includes("CNED"));
  const [projectList, setProjectList] = useState(cnedProjects);
  const [tagList, setTagList] = useState<ProjectFilter[]>([]);
  const [enabledTags, setEnabledTags] = useState<ProjectFilter[]>([]);

  React.useEffect(() => {
    const newTagList: ProjectFilter[] = [];

    cnedProjects.forEach((proj, index) => {
      proj.tags.forEach((tag) => {
        const existingTag = newTagList.find((t) => t.tagName === tag);

        if (existingTag) {
          existingTag.projects.push(proj);
        } else {
          newTagList.push({
            tagName: tag,
            projects: [proj],
            enabled: false,
          });
        }
      });
    });

    setTagList(newTagList);
    setProjectList(cnedProjects);
    setEnabledTags([
      {
        tagName: "CNED",
        enabled: true,
        projects: cnedProjects.filter((x) => x.tags.includes("CNED")),
      },
    ]);
  }, []);

  function filterByTag(event: React.MouseEvent<HTMLButtonElement>) {
    const tagName = event.currentTarget.innerText;
    const updatedTagList = tagList.map((t) =>
      t.tagName === tagName ? { ...t, enabled: !t.enabled } : t
    );

    setTagList(updatedTagList);

    const newEnabledTags = updatedTagList.filter(
      (t) => t.tagName == "CNED" || t.enabled
    );
    const filteredProjects = newEnabledTags.flatMap((t) => t.projects);
    for (let i = 0; i < filteredProjects.length; i++) {
      for (let j = i + 1; j < filteredProjects.length; j++) {
        if (filteredProjects[i] == filteredProjects[j]) {
          filteredProjects.splice(j--, 1);
        }
      }
    }
    setProjectList(filteredProjects);
    setEnabledTags(newEnabledTags);
  }
  function clearFilters() {
    const updatedTagList = tagList.map((t) => {
      return { ...t, enabled: false };
    });
    setTagList(updatedTagList);
    setProjectList(cnedProjects);
    setEnabledTags(
      updatedTagList.filter((t) => t.tagName == "CNED" || t.enabled)
    );
  }

  return (
    <>
      <RootLayout>
        <section>
          <h2>PROJETS CNED</h2>
          <div className="mosaic">
            {projectList.map((proj) => (
              <Project
                name={proj.name}
                tags={proj.tags}
                description={proj.description}
                image={proj.image}
                pageLink={proj.pageLink}
              />
            ))}
          </div>
        </section>
      </RootLayout>
    </>
  );
}
