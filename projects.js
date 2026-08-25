/*
================================
프로젝트 카드 자동 생성
================================
*/

function createProjectCard(project, index) {
    const number = String(index + 1).padStart(2, "0");

    let imageContent;

    if (project.image) {
        imageContent = `
            <img
                src="${project.image}"
                alt="${project.imageAlt}"
            >
        `;
    } else {
        imageContent = `
            <span>PROJECT IMAGE ${number}</span>
        `;
    }

    const imageClass = project.image
        ? "project-image"
        : "project-image placeholder-image";

    return `
        <a
            class="project-card"
            href="${project.link}"
        >
            <div class="${imageClass}">
                ${imageContent}
            </div>

            <div class="project-info">

                <span class="project-number">
                    ${number}
                </span>

                <div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>

                <span class="project-arrow">
                    →
                </span>

            </div>
        </a>
    `;
}


function renderProjects() {
    const projectContainers =
        document.querySelectorAll("[data-project-list]");

    projectContainers.forEach((container) => {
        const displayMode =
            container.dataset.projectList;

        let visibleProjects = projects;

        if (displayMode === "featured") {
            visibleProjects = projects
                .filter((project) => project.featured)
                .slice(0, 4);
        }

        container.innerHTML = visibleProjects
            .map((project, index) =>
                createProjectCard(project, index)
            )
            .join("");
    });
}


document.addEventListener(
    "DOMContentLoaded",
    renderProjects
);
