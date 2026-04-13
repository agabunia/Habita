import styles from "./Header.module.css";
import type { ProfileCardProps } from "./header.types";

export default function ProfileCard({
  userName,
  userId,
}: ProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileText}>
        <span className={styles.profileName}>{userName}</span>
        <span className={styles.profileId}>ID: {userId}</span>
      </div>

      <div className={styles.profileIcon} aria-hidden="true">
        <span>👤</span>
      </div>
    </div>
  );
}