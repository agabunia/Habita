import { historyItems, type HistoryItem } from "./profileHistory.mock";
import "./ProfileHistoryPage.css";

const historyImages = import.meta.glob("../../../assets/developers/developers_projects/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const logoImages = import.meta.glob("../../../assets/developers/developers_logos/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getHistoryImageUrl(imageLocation: string) {
  return historyImages[`../../../assets/developers/developers_projects/${imageLocation}`];
}

function getLogoImageUrl(imageLocation: string) {
  return logoImages[`../../../assets/developers/developers_logos/${imageLocation}`];
}

function HeartIcon() {
  return (
    <svg className="profile-history_action-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 5.7a5 5 0 0 0-7.1 0L12 7 10.7 5.7a5 5 0 0 0-7.1 7.1L12 21.2l8.4-8.4a5 5 0 0 0 0-7.1Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="profile-history_action-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5h14v11H8l-3 3V5Z" />
      <path d="M8 9h8M8 12h6" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg className="profile-history_action-icon profile-history_bookmark-icon" viewBox="0 0 18 22" aria-hidden="true">
      <path d="M3 2.5h12v16.2L9 15.4l-6 3.3V2.5Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <span className="profile-history_play" aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <path d="M18 13v22l17-11-17-11Z" />
      </svg>
    </span>
  );
}

function HistoryMeta({ item }: { item: HistoryItem }) {
  const logoUrl = getLogoImageUrl(item.logoLocation);

  return (
    <div className="profile-history_meta">
      <span>
        <strong>{item.developer}</strong>
        {item.category}
      </span>
      <span className="profile-history_meta-logo">
        {logoUrl ? <img src={logoUrl} alt="" loading="lazy" /> : item.developer}
      </span>
    </div>
  );
}

function HistoryActions({ item }: { item: HistoryItem }) {
  return (
    <div className="profile-history_actions">
      <div className="profile-history_action-list">
        <button type="button" aria-label={`Like ${item.title}`}>
          <HeartIcon />
        </button>
        <button type="button" aria-label={`Comment on ${item.title}`}>
          <MessageIcon />
        </button>
        <button type="button" aria-label={`Save ${item.title}`}>
          <BookmarkIcon />
        </button>
      </div>
      <time dateTime={item.dateTime}>{item.displayTime}</time>
    </div>
  );
}

function HistoryCard({ item }: { item: HistoryItem }) {
  const imageUrl = getHistoryImageUrl(item.imageLocation);

  return (
    <article className={`profile-history_card profile-history_card-${item.layout}`}>
      <HistoryMeta item={item} />

      <div className="profile-history_content">
        <a className="profile-history_media" href={`/projects/${item.projectId}`} aria-label={item.title}>
          {imageUrl ? <img src={imageUrl} alt={item.title} loading="lazy" /> : <span aria-hidden="true" />}
          {item.type === "video" ? <PlayIcon /> : null}
        </a>

        <div className="profile-history_copy">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>

      <div className="profile-history_footer">
        <HistoryActions item={item} />
        <a className="profile-history_more" href={`/projects/${item.projectId}`}>
          View details
          <span aria-hidden="true">&gt;</span>
        </a>
      </div>
    </article>
  );
}

export default function ProfileHistoryPage() {
  return (
    <div className="profile-history">
      <div className="profile-history_list">
        {historyItems.map((item) => (
          <HistoryCard key={item.id} item={item} />
        ))}
      </div>

      <nav className="profile-history_pagination" aria-label="History pages">
        <a className="profile-history_page profile-history_page-active" href="/profile/history?page=1" aria-current="page">
          1
        </a>
        <a className="profile-history_page" href="/profile/history?page=2">
          2
        </a>
        <a className="profile-history_page" href="/profile/history?page=3">
          3
        </a>
        <a className="profile-history_page" href="/profile/history?page=4">
          4
        </a>
        <span className="profile-history_page">...</span>
      </nav>
    </div>
  );
}
