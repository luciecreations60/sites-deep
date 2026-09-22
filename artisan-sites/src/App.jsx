import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Demos from './pages/Demos.jsx';
import Contact from './pages/Contact.jsx';
import Essentiel from './pages/demos/Essentiel.jsx';
import Plus from './pages/demos/Plus.jsx';
import Pro from './pages/demos/Pro.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demos" element={<Demos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/demo/essentiel" element={<Essentiel />} />
      <Route path="/demo/plus" element={<Plus />} />
      <Route path="/demo/pro" element={<Pro />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
