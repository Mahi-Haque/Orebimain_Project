import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="about" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>{" "}
    </>
  );
}

export default App;
