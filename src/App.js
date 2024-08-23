import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontLayout from './components/layout/frontLayout/Index';
import Home from './components/front/Home';
import Login from './components/layout/authLayout/Login';
import ProtectedRoute from './components/utils/ProtectedRoute';
import Blogs from './components/front/Blogs';
import BlogDetails from './components/front/BlogDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute redirectTo={"/login"} />}>
          <Route element={<FrontLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
