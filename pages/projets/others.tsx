import RootLayout from "./../layout";
import Footer from "@/components/footer";
import Identity from "@/components/identity";
import { MouseEventHandler, useEffect } from "react";
import React, { useState } from "react";

import ProjectTest from "@/components/project-filter";
import Project, { ProjectInfo } from "@/components/project";

import projects from "@/public/projects.json";

type ProjectFilter = {
  tagName: string;
  projects: Array<ProjectInfo>;
  enabled: boolean;
};

export default function OtherProjects() {
  const [projectList, setProjectList] = useState(projects);
  const [tagList, setTagList] = useState<ProjectFilter[]>([]);
  const [enabledTags, setEnabledTags] = useState<ProjectFilter[]>([]);
  const pTest = new ProjectTest();
  console.log(pTest);

  useEffect(() => {
    const newTagList: ProjectFilter[] = [];
    const excludedTag = "CNED";

    projects.forEach((proj) => {
      const filteredTags = proj.tags.filter((tag) => tag !== excludedTag);

      filteredTags.forEach((tag) => {
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
    setTagList(newTagList.filter((tag) => tag.tagName !== excludedTag));
  }, []);

  function filterByTag(event: React.MouseEvent<HTMLButtonElement>) {
    const tagName = event.currentTarget.innerText;
    const updatedTagList = tagList.map((t) =>
      t.tagName === tagName ? { ...t, enabled: !t.enabled } : t
    );

    setTagList(updatedTagList);

    const newEnabledTags = updatedTagList.filter((t) => t.enabled);
    if (newEnabledTags.length === 0) {
      setProjectList(projects.filter((proj) => !proj.tags.includes("CNED")));
    } else {
      let filteredProjects = newEnabledTags.flatMap((t) => t.projects);
      filteredProjects = filteredProjects.filter(
        (project, index, self) =>
          index === self.findIndex((p) => p.name === project.name)
      );
      setProjectList(filteredProjects);
    }
    setEnabledTags(newEnabledTags);
  }

  function clearFilters() {
    const updatedTagList = tagList.map((t) => ({ ...t, enabled: false }));
    setTagList(updatedTagList);
    let resetProjectList = projects.filter(
      (proj) => !proj.tags.includes("CNED")
    );
    resetProjectList = resetProjectList.filter(
      (project, index, self) =>
        index === self.findIndex((p) => p.name === project.name)
    );
    setProjectList(resetProjectList);
    setEnabledTags([]);
  }

  return (
    <>
      <RootLayout>
        <section>
          <h2>Autres projets</h2>
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
                  aria-active={enabledTags.includes(tag)}
                >
                  {tag.tagName}
                </button>
              ))}
            </div>
            {projectList.map((proj) => (
              <Project
                key={proj.name}
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
