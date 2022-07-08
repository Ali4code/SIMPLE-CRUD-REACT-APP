import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import { routes as appRoutes } from "./routes";

function App() {
  return (
   
      <Router>
        <Layout>
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.key} path={route.path} element={<route.component />} />
          ))}
        </Routes>
        </Layout>
      </Router>
 
  );
}

export default App;
