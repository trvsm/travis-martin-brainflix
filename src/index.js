import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Header from "./components/header/Header";
import Upload from "./pages/upload/Upload";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="videos/:videoId" element={<App />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);