import RootLayout from "./layout";
import { MouseEventHandler } from "react";
import React, { useState } from 'react';

import Footer from "@/components/footer";
import Identity from "@/components/identity";
import ProjectTest from "@/components/project-filter";
import Project, {ProjectInfo} from "@/components/project";

import projects from "@/public/projects.json";

type ProjectFilter = {
  tagName: string;
  projects: Array<ProjectInfo>;
  enabled: boolean;
};

export default function Projets() {
  const [projectList, setProjectList] = useState(projects);
  const [tagList, setTagList] = useState<ProjectFilter[]>([]);
  const [enabledTags, setEnabledTags] = useState<ProjectFilter[]>([]);
  const pTest = new ProjectTest();
  console.log(pTest);

  React.useEffect(() => {
    const newTagList: ProjectFilter[] = [];

    projects.forEach((proj) => {
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
  function clearFilters(){
    const updatedTagList = tagList.map((t) => {
      return { ...t, enabled: false };
    });
    setTagList(updatedTagList);
    setProjectList(projects);
    setEnabledTags(updatedTagList.filter((t) => t.enabled));
  }


  return (
    <>
      <RootLayout>
        <section>
          <h2>Tous les projet</h2>
          <div className="mosaic">
            <div className="tag-list">
              <button
                onClick={clearFilters}
                aria-active={enabledTags.length == 0}
              >Tous</button>
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
