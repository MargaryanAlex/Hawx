<<<<<<< HEAD
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import "./App.scss";
import PagesLayout from "./layout/pagesLayout";
import {boosterRouteList, IRoute, pagesRouteList, solutionsRouteList} from "./router";
import Header from "./components/header";
import React, {useContext} from "react";
import LanguageContext from "./context/language-context";
import NewsContext from "./context/news-context";
import {LoaderContext} from "./context/loader-context";
import Loader from "./components/loader";

function App() {
    const {loader} = useContext(LoaderContext)

    return (
        <BrowserRouter>
            <LanguageContext>
                <NewsContext>

                    {loader ? <Loader/> :
                        <div className="App">
                            <Header/>
                            <Routes>
                                {pagesRouteList.map((item: IRoute) => {
                                    return (
                                        <Route
                                            path={item.path}
                                            element={
                                                <PagesLayout>
                                                    <item.component/>
                                                </PagesLayout>
                                            }
                                            key={item.path}
                                        />
                                    );
                                })}
                                {solutionsRouteList.map((item: IRoute) => {
                                    return (
                                        <Route
                                            path={item.path}
                                            element={
                                                <item.component/>

                                            }
                                            key={item.path}
                                        />
                                    );
                                })}
                                {boosterRouteList.map((item: IRoute) => {
                                    return (
                                        <Route
                                            path={item.path}
                                            element={

                                                <item.component/>

                                            }
                                            key={item.path}
                                        />
                                    );
                                })}

                                {/*<Route*/}
                                {/*    path={"/loader"}*/}
                                {/*    element={<Loader/>}*/}
                                {/*/>*/}
                                <Route path="*" element={<Navigate to="/" replace/>}/>{" "}
                            </Routes>
                        </div>}
                </NewsContext>
            </LanguageContext>
        </BrowserRouter>
    );
=======
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import PagesLayout from "./layout/pagesLayout";
import SolutionsLayout from "./layout/solutionsLayout";
import { IRoute, pagesRouteList, solutionsRouteList } from "./router";

function App() {
  return (
    <BrowserRouter>
      <h1>HAWX</h1>
      <div className="App">
        <Routes>
          {pagesRouteList.map((item: IRoute) => {
            return (
              <Route
                path={item.path}
                element={
                  <PagesLayout>
                    <item.component />
                  </PagesLayout>
                }
                key={item.path}
              />
            );
          })}
          {solutionsRouteList.map((item: IRoute) => {
            return (
              <Route
                path={item.path}
                element={
                  <SolutionsLayout>
                    <item.component />
                  </SolutionsLayout>
                }
                key={item.path}
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" replace />} />{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
}

export default App;
