import "./DevelopersPage.css";
import DevelopersList from "./sections/developers/DevelopersList";
import DevelopersFeed from "./sections/feed/DevelopersFeed";

export default function DevelopersPage() {
  return (
    <main className="developers-page">
      <DevelopersFeed />
      <DevelopersList />
    </main>
  );
}
