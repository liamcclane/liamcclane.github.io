import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Fun from "./pages/Fun";
import PageNotFound from "./pages/PageNotFound";
import Crochet from "./pages/crochet/Crochet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="fun" element={<Fun />} />
          <Route path="crochet" element={<Crochet />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
