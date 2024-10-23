import React, { Suspense } from "react";
import "./css/style.css";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularSearchData from "./screen/Search";
import Restaurant from "./screen/Restaurant";
import IndianRest from "./screen/Indian";
const Layout = React.lazy(() => import("./layout/Layout"));
const HomeScreen = React.lazy(() => import("./screen/Home/HomeScreen"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
          <Routes>
            {/*Website Routes*/}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeScreen />}></Route>
              <Route path="/popularSearch" element={<PopularSearchData />} />
              <Route path="/Restaurant-Collections" element={<Restaurant />} />
              <Route path="/Indian-Restaurant" element={<IndianRest />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
