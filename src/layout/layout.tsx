import styles from "./layout.module.scss";
import { Outlet, useLocation } from "react-router-dom";
// import "@/react-i18n/i18n";
import { useEffect } from "react";
function AppLayout() {

  useEffect(() => {
    console.log('layout',import.meta.env)
   
  }, []);

  return (
    <div className={styles.AppLayout}>
   
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
