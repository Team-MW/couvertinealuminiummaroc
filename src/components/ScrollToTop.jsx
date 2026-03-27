import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0);
    // Fallback for some browsers or delayed rendering
    const timer = setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
        document.body.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
}
