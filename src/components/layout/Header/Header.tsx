import styles from "./Header.module.css";
import type { HeaderProps } from "./header.types";
import ProfileCard from "./ProfileCard";
import HeaderNav from "./HeaderNav";
import HeaderActions from "./HeaderActions";

export default function Header({
  userName = "Gigi Nikoleishvili",
  userId = "487594563",
  phone = "+995 591 99 32 10",
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoGroup}>
          <div className={styles.logoBox}>LOGO</div>
          <div className={styles.logoBox}>LOGO</div>
        </div>

        <ProfileCard userName={userName} userId={userId} />
      </div>

      <div className={styles.bottomRow}>
        <HeaderNav />
        <HeaderActions phone={phone} />
      </div>
    </header>
  );
}