import styles from './SectionCard.module.css';
export default function SectionCard({ title, children, eyebrow }) {
  return <section className={styles.card}>{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}<h2>{title}</h2>{children}</section>;
}
