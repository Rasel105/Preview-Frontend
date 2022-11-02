import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/NavMenu";
import { publicRoutes } from './routes/publicRoutes'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes  */}
        {
          publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component></Component>}></Route>)
        }
      </Routes>
    </>
  );
}

export default App;
