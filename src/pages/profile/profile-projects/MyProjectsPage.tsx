import { profileProjects, type ProfileProject } from "./myProjects.mock";
import "./MyProjectsPage.css";

const projectImages = import.meta.glob("../../../assets/developers/developers_projects/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getProjectImageUrl(imageLocation: string) {
  return projectImages[`../../../assets/developers/developers_projects/${imageLocation}`];
}

function BookmarkIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg className="my-projects_bookmark-icon" viewBox="0 0 18 22" aria-hidden="true">
      <path d="M3 2.5h12v16.2L9 15.4l-6 3.3V2.5Z" fill={filled ? "currentColor" : "none"} />
      <path d="M3 2.5h12v16.2L9 15.4l-6 3.3V2.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="my-projects_location-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 18s5.4-5.1 5.4-10a5.4 5.4 0 1 0-10.8 0C4.6 12.9 10 18 10 18Z" />
      <circle cx="10" cy="8" r="1.8" />
    </svg>
  );
}

function DetailsIcon() {
  return (
    <svg className="my-projects_details-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="1.8" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

function ProjectCard({ project }: { project: ProfileProject }) {
  const imageUrl = getProjectImageUrl(project.imageLocation);

  return (
    <article className="my-projects_card">
      <a className="my-projects_media" href={`/projects/${project.id}`} aria-label={project.name}>
        {imageUrl ? (
          <img src={imageUrl} alt={project.name} loading="lazy" />
        ) : (
          <span className="my-projects_placeholder" aria-hidden="true" />
        )}
        <span className="my-projects_details-button">
          <DetailsIcon />
        </span>
        {project.badge ? <span className="my-projects_badge">{project.badge}</span> : null}
      </a>

      <div className="my-projects_body">
        <div className="my-projects_heading">
          <a className="my-projects_title" href={`/projects/${project.id}`}>
            {project.name}
          </a>
          <button className="my-projects_bookmark" type="button" aria-label={`Save ${project.name}`}>
            <BookmarkIcon filled={project.saved} />
          </button>
        </div>

        {project.status ? (
          <p className="my-projects_status">
            <span aria-hidden="true" />
            {project.status}
          </p>
        ) : null}

        <p className="my-projects_location">
          <LocationIcon />
          {project.address}
        </p>
      </div>
    </article>
  );
}

function AddProjectCard() {
  return (
    <button className="my-projects_add-card" type="button" aria-label="Add project">
      <span />
    </button>
  );
}

export default function MyProjectsPage() {
  return (
    <div className="my-projects_grid">
      {profileProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <AddProjectCard />
    </div>
  );
}
