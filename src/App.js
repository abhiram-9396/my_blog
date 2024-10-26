import './App.css';
import React from 'react';
import Home from './pages/HomeScreen';
import ExperienceScreen from './pages/ExperienceScreen';
import SkillsScreen from './pages/SkillsScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" exact element={<ExperienceScreen />} />
        <Route path="/skills" element={<SkillsScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
