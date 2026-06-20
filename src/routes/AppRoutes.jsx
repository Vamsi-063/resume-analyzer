import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Resumes from "../pages/Resumes";
import AddResume from "../pages/AddResume";
import ResumeDetails from "../pages/ResumeDetails";
import EditResume from "../pages/EditResume";
import UploadResume from "../pages/UploadResume";
import ResumeList from "../pages/ResumeList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Favorites from "../pages/Favorites";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/resumelist" element={<ResumeList />} />

      <Route path="/resume/:id" element={<ResumeDetails />} />

      <Route path="/edit-resume/:id" element={<EditResume />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/resumes"element={<ProtectedRoute><Resumes /></ProtectedRoute>}/>

      <Route path="/add-resume"element={<ProtectedRoute><AddResume /></ProtectedRoute>}/>

      <Route path="/upload-resume"element={<ProtectedRoute><UploadResume /></ProtectedRoute>}/>

      <Route path="/favorites"element={<ProtectedRoute><Favorites /></ProtectedRoute>}/>
    </Routes>
  );
}

export default AppRoutes;