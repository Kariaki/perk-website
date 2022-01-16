import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Modal1, Modal2 } from "./components/Modal";
import AdminPanel from './pages/AdminPanel';
import Auth from "./pages/Auth";
import HomePage from './pages/HomePage';
import MealsPage from "./pages/MealsPage";
import ProfilePage from "./pages/ProfilePage";
import VendorInfo from "./pages/VendorInfo";
import VendorsPage from "./pages/VendorsPage";


function App() {
  
  return (
    <div className="App">
    <Modal1/>
    <Modal2/>
    <Router>
      <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/meals" element={<MealsPage/>} />
          <Route exact path="/vendors" element={<VendorsPage/>} />
          <Route exact path="/vendorinfo" element={<VendorInfo/>} />
          <Route exact path="/admin" element={<AdminPanel/>} />
          <Route exact path="/auth" element={<Auth/>} />
          <Route exact path="/profile" element={<ProfilePage/>} />
      </Routes> 
    </Router> 
    </div>
  );
}

export default App;
