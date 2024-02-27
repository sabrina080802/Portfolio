import RootLayout from "./../layout";

import Footer from "@/components/footer";
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
  const [projectList, setProjectList] = useState(projects);
  const [tagList, setTagList] = useState<ProjectFilter[]>([]);
  const [enabledTags, setEnabledTags] = useState<ProjectFilter[]>([]);
  const pTest = new ProjectTest();
  console.log(pTest);

  React.useEffect(() => {
    const newTagList: ProjectFilter[] = [];
    const cnedProjects: ProjectInfo[] = [];

    projects.forEach((proj) => {
      const isCnedProject = proj.tags.includes("CNED");
      if (isCnedProject) {
        cnedProjects.push(proj);
      }
      proj.tags.forEach((tag) => {
        const existingTag = newTagList.find((t) => t.tagName === tag);

        if (existingTag) {
          if (isCnedProject) existingTag.projects.push(proj);
        } else {
          newTagList.push({
            tagName: tag,
            projects: isCnedProject ? [proj] : [],
            enabled: false,
          });
        }
      });
    });
    setProjectList(cnedProjects);
    setTagList(newTagList.filter((t) => t.tagName === "CNED"));
    setEnabledTags(newTagList.filter((t) => t.tagName === "CNED" && t.enabled));
  }, []);

  function filterByTag(event: React.MouseEvent<HTMLButtonElement>) {
    const tagName = event.currentTarget.innerText;
    const updatedTagList = tagList.map((t) =>
      t.tagName === tagName ? { ...t, enabled: !t.enabled } : t
    );

    setTagList(updatedTagList);

    const newEnabledTags = updatedTagList.filter((t) => t.enabled);
    if (newEnabledTags.length === 0) {
      setProjectList(projects);
    } else {
      const filteredProjects = newEnabledTags.flatMap((t) => t.projects);
      setProjectList(filteredProjects);
    }

    setEnabledTags(newEnabledTags);
  }
  function clearFilters() {
    setProjectList(projects.filter((proj) => proj.tags.includes("CNED")));
    const updatedTagList = tagList.map((t) => ({ ...t, enabled: false }));
    setTagList(updatedTagList);
    setEnabledTags(updatedTagList.filter((t) => t.enabled));
  }

  return (
    <>
      <RootLayout>
        <section>
          <h2>PROJETS CNED</h2>
          <div className="mosaic">
            <div className="tag-list">
              <button
                onClick={clearFilters}
                aria-active={enabledTags.length == 0}
              >
                Tous
              </button>
              {tagList.map((tag) => (
                <button
                  onClick={filterByTag}
                  aria-active={enabledTags.indexOf(tag) !== -1}
                >
                  {tag.tagName}
                </button>
              ))}
            </div>
            {projectList.map((proj) => (
              <Project
                name={proj.name}
                tags={proj.tags}
                description={proj.description}
                image={proj.image}
              />
            ))}
          </div>
          <Footer />
        </section>
      </RootLayout>
    </>
  );
}
