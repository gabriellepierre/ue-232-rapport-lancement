import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Lancement } from "../lancement/Lancement";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Lancement />
      <Footer />
    </>
  );
};
