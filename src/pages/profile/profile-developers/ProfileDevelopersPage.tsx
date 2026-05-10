import { savedDevelopers, type SavedDeveloper } from "./profileDevelopers.mock";
import "./ProfileDevelopersPage.css";

const logoImages = import.meta.glob("../../../assets/developers/developers_logos/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getLogoImageUrl(imageLocation: string) {
  return logoImages[`../../../assets/developers/developers_logos/${imageLocation}`];
}

function getDeveloperLabel(developer: SavedDeveloper) {
  return [developer.nameEng, developer.nameGeo].filter(Boolean).join(" | ");
}

function DeveloperCard({ developer }: { developer: SavedDeveloper }) {
  const logoUrl = getLogoImageUrl(developer.logoLocation);
  const label = getDeveloperLabel(developer);

  return (
    <a className="profile-developers_card" href={`/developers/${developer.id}`}>
      <span className="profile-developers_logo-wrap">
        {logoUrl ? (
          <img src={logoUrl} alt={label} loading="lazy" />
        ) : (
          <span className="profile-developers_logo-fallback">{developer.nameEng}</span>
        )}
      </span>
      <span className="profile-developers_name">{label}</span>
    </a>
  );
}

function AddDeveloperCard() {
  return (
    <button className="profile-developers_add" type="button" aria-label="Add developer">
      <span />
    </button>
  );
}

export default function ProfileDevelopersPage() {
  return (
    <div className="profile-developers_grid">
      {savedDevelopers.map((developer) => (
        <DeveloperCard key={developer.id} developer={developer} />
      ))}
      <AddDeveloperCard />
    </div>
  );
}
