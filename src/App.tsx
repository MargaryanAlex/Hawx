import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import PagesLayout from "./layout/pagesLayout";
import { IRoute, pagesRouteList } from "./router";

function App() {
  return (
    <BrowserRouter>
      <h1>HAWX</h1>
      <div className="App">
        <PagesLayout>
          <Routes>
            {pagesRouteList.map((item: IRoute) => {
              return (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={item.path}
                />
              );
            })}
          </Routes>
        </PagesLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
