import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function StartFromTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly moves to the top (no smooth effect)
  }, [pathname]);

  return null;
}

export default StartFromTop;
