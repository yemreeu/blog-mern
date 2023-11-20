import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <main>
              <Post />
              <Post />
              <Post />
            </main>
          }
        />
        <Route path={"/login"} element={<div>login page</div>} />

        <Route
          path={"/register"}
          element={
              <div>register page</div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
