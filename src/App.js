import './App.css';
import React from 'react';
import Home from './pages/HomeScreen'
import ExperienceScreen from './pages/ExperienceScreen';
import SkillsScreen from './pages/SkillsScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/experience" exact element={<ExperienceScreen />} />
        <Route path="/skills" exact element={<SkillsScreen />} />
        <Route path="/projects" exact element={<ProjectsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
