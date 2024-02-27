import RootLayout from "./../layout";

import Footer from "@/components/footer";
import Identity from "@/components/identity";

export default function OtherProjects() {
  return (
    <>
      <RootLayout>
        <section>
          <h2>AUTRES PROJETS</h2>
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
