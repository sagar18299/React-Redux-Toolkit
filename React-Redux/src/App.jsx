import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {
  

return (
  <>
    <Provider store={store}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
   
    </Provider>
    
    
  </>
);

}

export default App;
