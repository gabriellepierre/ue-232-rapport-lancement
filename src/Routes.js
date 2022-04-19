import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { lazy } from "react";
import { Layout } from "./shared/Layout";
import Home from "./home/Home";
import { Lancement } from "./lancement/Lancement";
import { Final } from "./final/Final";
import { Error } from "./shared/Error";
// const Lancement = lazy(() => import("./lancement/Lancement"));
// const Final = lazy(() => import("./final/Final"));
// const NotFoundScreen = lazy(() => import("./shared/NotFoundScreen"));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/lancement" component={<Lancement />} />
          <Route path="/final" component={<Final />} />
          <Route path="*" component={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
