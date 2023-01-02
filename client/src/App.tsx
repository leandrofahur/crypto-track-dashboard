import { Navigation } from "./components/Navigation/Navigation.component";
import { Sidebar } from "./components/Sidebar/Sidebar.component";

import "./styles/global.scss";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Navigation />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => (
            <p>{element}</p>
          ))}
        </main>
        <aside></aside>
      </div>
    </div>
  );
}

export default App;
