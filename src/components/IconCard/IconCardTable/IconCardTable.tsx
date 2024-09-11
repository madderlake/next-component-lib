import classNames from "classnames";

import styles from "./IconCardTable.module.scss";

export interface IconCardTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  columnALabel: string;
  columnBLabel: string;
  items: IconCardTableItem[];
}

interface IconCardTableItem {
  columnA: string;
  columnB: string;
}

export function IconCardTable({
  columnALabel,
  columnBLabel,
  items,
  className,
}: IconCardTableProps): JSX.Element {
  return (
    <div className={className}>
      <div className={styles.grid}>
        <p className={styles.columnLabel}>{columnALabel}</p>
        <p className={styles.columnLabel}>{columnBLabel}</p>
      </div>

      <div>
        {items.map((columnContent, i) => {
          return (
            <div key={i} className={classNames(styles.row, styles.grid)}>
              <p className={styles.columnItem}>{columnContent.columnA}</p>
              <p className={styles.columnItem}>{columnContent.columnB}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
