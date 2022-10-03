import styles from "./App.scss";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Feed</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
