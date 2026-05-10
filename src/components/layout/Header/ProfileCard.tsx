import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import type { ProfileCardProps } from "./header.types";

export default function ProfileCard({ userName, userId }: ProfileCardProps) {
  return (
    <Link className={styles.profileCard} to="/profile" aria-label="Open profile page">
      <div className={styles.profileText}>
        <span className={styles.profileName}>{userName}</span>
        <span className={styles.profileId}>ID: {userId}</span>
      </div>

      <div className={styles.profileIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
        </svg>
      </div>
    </Link>
  );
}
