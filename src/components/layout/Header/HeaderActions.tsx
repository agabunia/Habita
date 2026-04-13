import styles from "./Header.module.css";
import type { HeaderActionsProps } from "./header.types";
import { socialLinks } from "./header.config";

export default function HeaderActions({ phone }: HeaderActionsProps) {
  const normalizedPhone = phone.replace(/\s+/g, "");

  return (
    <div className={styles.actions}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={styles.iconLink}
          aria-label={link.label}
          target="_blank"
          rel="noreferrer"
        >
          <span>{link.content}</span>
        </a>
      ))}

      <a href={`tel:${normalizedPhone}`} className={styles.phoneLink}>
        <span className={styles.phoneIcon}>📞</span>
        <span>{phone}</span>
      </a>
    </div>
  );
}