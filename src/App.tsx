import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import { routes as appRoutes } from "./routes";
import AppThemeProvider from "./provider/ThemeProvider";

function App() {
  return (
    <AppThemeProvider>
      <Router>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.key} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Layout>
      </Router>
    </AppThemeProvider>
  );
}

export default App;
