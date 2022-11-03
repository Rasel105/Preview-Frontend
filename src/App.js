import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/NavMenu";
import { publicRoutes } from './routes/publicRoutes'

export const PopupContext = createContext();

function App() {
  const [allValues, setAllValues] = useState()
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data =>
        setAllValues(data)
      )
  }, [])
  return (
    <PopupContext.Provider value={[allValues, setAllValues]}>
      <Navbar />
      <Routes>
        {/* Public Routes  */}
        {
          publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component></Component>}></Route>)
        }
      </Routes>
    </PopupContext.Provider>
  );
}

export default App;
