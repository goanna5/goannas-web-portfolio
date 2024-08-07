import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import TreasureHunt from "./pages/TreasureHunt";
import SecretPage from "./pages/SecretPage";

export default function App() {
  const secretPath = localStorage.getItem("randomString");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="treasure-hunt" element={<TreasureHunt />} />
          {secretPath && (
            <Route path={localStorage.getItem("randomString")} element={<SecretPage />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
