import "./app.css";
import "../scss/custom.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Mountains from "./Mountains";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stays" element={<Home />}></Route>
        <Route path="/fights" element={<Home />}></Route>
        <Route path="/packages" element={<Home />}></Route>
        <Route path="/signUp" element={<Home />}></Route>
        <Route path="/mountains" element={<Mountains />}></Route>
        <Route path="/beaches" element={<Mountains />}></Route>
        <Route path="/camping" element={<Mountains />}></Route>
        <Route path="/cities" element={<Mountains />}></Route>
        <Route path="/country" element={<Mountains />}></Route>
        <Route path="/deserts" element={<Mountains />}></Route>
        <Route path="/houseboats" element={<Mountains />}></Route>
        <Route path="/skiing" element={<Mountains />}></Route>
        <Route path="/tropical" element={<Mountains />}></Route>
        <Route path="/castles" element={<Mountains />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
