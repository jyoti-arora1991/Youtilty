import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import First from "./pages/First";
import QuestionPage from "./pages/QuestionPage";
import Home from "./pages/Home";
import { useEffect } from "react";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/3question-page":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/questionPage" element={<QuestionPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
