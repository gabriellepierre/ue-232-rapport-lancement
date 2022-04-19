import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
// import { Lancement } from "../lancement/Lancement";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
