import styles from "../ImageAccordion.module.scss";

export interface AccordionIconProps extends React.HTMLAttributes<HTMLElement> {}
export function AccordionIcon(): JSX.Element {
  return (
    <span className={styles.accordionIcon}>
      <svg className={styles.accordionIconSvg} viewBox="0 0 17 8.85">
        <polyline
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          fillRule="evenodd"
          points="15 7.72 8.5 1.13 2 7.72"
        />
      </svg>
    </span>
  );
}
