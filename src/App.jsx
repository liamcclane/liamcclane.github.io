import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyLayout from './pages/MyLayout';
import AboutMe from './pages/AboutMe';
import Crochet from './pages/crochet/Crochet';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="crochet" element={<Crochet />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;