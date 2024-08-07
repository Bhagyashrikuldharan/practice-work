import React from "react";
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import LoginPage from "./component/LoginPage";
import Register from "./component/Register"

function App() {

return(
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</BrowserRouter>
)

}

export default App;
