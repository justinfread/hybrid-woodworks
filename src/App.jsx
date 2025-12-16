import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home.jsx';  // Homepage

const App = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      {/* Auto-added by plugin for other pages */}
    </Route>
  </Routes>
);

export default App;