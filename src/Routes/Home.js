import styles from "./Home.module.scss";
import Post from "../Post";

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Feed</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Home;
