import { useMemo, useState } from "react";
import SearchBar from "../../../../components/ui/search-bar";
import "./DevelopersFeed.css";
import { developersFeed } from "./developerFeed.mock";

const feedImages = import.meta.glob("../../../../assets/developers/developers_feed/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getFeedImageUrl(imageLocation: string) {
  return feedImages[`../../../../assets/developers/developers_feed/${imageLocation}`];
}

export default function DevelopersFeed() {
  const [activeSlide, setActiveSlide] = useState(0);
  const visibleFeedItem = useMemo(
    () => developersFeed[activeSlide] ?? developersFeed[0],
    [activeSlide],
  );
  const imageUrl = visibleFeedItem ? getFeedImageUrl(visibleFeedItem.logo_location) : "";

  return (
    <section className="developers-feed" aria-label="Developers search and feed">
      <SearchBar
        className="developers-feed_search"
        placeholder="Find your developer"
        aria-label="Find your developer"
      />

      <div className="developers-feed_carousel">
        {imageUrl ? (
          <img className="developers-feed_image" src={imageUrl} alt="" loading="eager" />
        ) : (
          <div className="developers-feed_placeholder" />
        )}
      </div>

      <div className="developers-feed_dots" aria-label="Developer feed pages">
        {developersFeed.map((item, index) => (
          <button
            key={item.id}
            className={
              index === activeSlide
                ? "developers-feed_dot developers-feed_dot-active"
                : "developers-feed_dot"
            }
            type="button"
            aria-label={`Show feed slide ${index + 1}`}
            aria-pressed={index === activeSlide}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
