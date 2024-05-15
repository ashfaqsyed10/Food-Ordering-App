import { Outlet } from "react-router-dom";
import './App.css'
import { Provider } from "react-redux";

import Header from "./components/Header";
import appStore from "./utils/appStore";
//import Cart from "./components/Cart";


function App() {
  
  return (
    <>
    <Provider store={appStore}>
      <div>
        <Header/>
        <Outlet />
        </div>
        </Provider>
    </>
  )
}

export default App
