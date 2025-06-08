import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes/routes";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { Suspense } from "react";

function App() {
  const token = false;

  return (
    <Suspense fallback={"loading"}>
      <BrowserRouter>
        <Routes>
          {/* <Route element={token ? <PrivateLayout /> : <PublicLayout />}> */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPublic ? (
                  <PublicRoute component={route.component} />
                ) : (
                  <PrivateRoute component={route.component} />
                )
              }
            />
          ))}
          <Route
            path="*"
            element={<Navigate replace to={token ? "/" : "/login"} />}
          />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
