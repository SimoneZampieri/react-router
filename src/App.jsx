import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefLayout from "./layouts/DefLayout";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import AboutPage from "./pages/AboutPage";
import PostDetail from "./pages/PostDetailPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/posts" Component={PostListPage} />
          <Route path="/dettaglio-post/:id" Component={PostDetail} />
          <Route path="*" Component={ErrorPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
