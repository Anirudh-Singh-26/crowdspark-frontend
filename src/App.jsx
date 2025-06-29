import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import CampaignDetails from "./pages/CampaignDetails";
import Explore from "./pages/Explore";
import CreateCampaign from "./pages/CreateCampaign";

import Login from "./pages/Login";
import SupportPage from "./pages/SupportPage";
import Register from "./pages/Register";
import UserDashboard from './pages/Dashboard/UserDashboard';
import AdminDashboard from './pages/Dashboard/AdminDashboard';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<CreateCampaign />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/support/:id" element={<SupportPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}