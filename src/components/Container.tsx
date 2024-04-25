import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

function Container({ children }: { children: React.ReactNode }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setInView(currentPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <NavBar inView={inView} />
      {children}
      <Footer />
    </main>
  );
}

export default Container;
