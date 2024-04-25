import { Route, Routes } from "react-router-dom";

import { Home, NotFound } from "./pages";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
