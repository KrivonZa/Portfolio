import { router } from "./router";
import { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <div className="flex-grow">
        {useRoutes(router)}
      </div>
    </div>
  );
}

export default App;
