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
}

export default App;
