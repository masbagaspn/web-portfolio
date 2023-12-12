import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Portfolio from "./Portfolio";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Pages;
