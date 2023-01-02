import {
  CurrencyBtc,
  ChartLine,
  ChartPieSlice,
  ClipboardText,
  DotsNine,
} from "phosphor-react";

import styles from "./Sidebar.module.scss";
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <a href="#" className={styles.btnSidebar}>
        <DotsNine size={20} />
        <p>Dashboard</p>
      </a>
      <a href="#" className={styles.btnSidebar}>
        <ChartPieSlice size={20} />
        <p>Reporting</p>
      </a>
      <a href="#" className={styles.btnSidebar}>
        <CurrencyBtc size={20} />
        <p>Enter Coins</p>
      </a>
      <a href="#" className={styles.btnSidebar}>
        <ChartLine size={20} />
        <p>Charts & Trends</p>
      </a>
      <a href="#" className={styles.btnSidebar}>
        <ClipboardText size={20} />
        <p>Tax Report</p>
      </a>
    </aside>
  );
};
