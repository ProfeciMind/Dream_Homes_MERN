import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import Profiel1 from "./pages/Profiel1";
import Signup from "./pages/Signup";
import Signinpage from "./pages/Signinpage";
import Aboutpage from "./pages/Aboutpage";
import PrivateRoute from "./Components/PrivateRoute";



export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
       <Route path="/" element={<HomePage/> }/>
       <Route path="/Profiel1" element={<Profiel1 />}/>
       <Route path="/Signup" element={<Signup />}/>
       <Route path="/Signinpage" element={<Signinpage/> }/>
       <Route element={<PrivateRoute/>} >
       <Route path="/Aboutpage" element={<Aboutpage/> }/>
       </Route>
      </Routes>
    </BrowserRouter>
  );
}
