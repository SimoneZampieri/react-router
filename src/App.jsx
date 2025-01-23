import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefLayout from "./layouts/DefLayout";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/posts" Component={PostListPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
