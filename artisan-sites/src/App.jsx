import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import BackToTop from './components/BackToTop.jsx';
import Home from './pages/Home.jsx';
import Demos from './pages/Demos.jsx';
import Contact from './pages/Contact.jsx';
import Essentiel from './pages/demos/Essentiel.jsx';
import PlusLayout from './pages/demos/Plus/PlusLayout.jsx';
import PlusAccueil from './pages/demos/Plus/PlusAccueil.jsx';
import PlusServices from './pages/demos/Plus/PlusServices.jsx';
import PlusRealisations from './pages/demos/Plus/PlusRealisations.jsx';
import PlusAtelier from './pages/demos/Plus/PlusAtelier.jsx';
import PlusContact from './pages/demos/Plus/PlusContact.jsx';
import Pro from './pages/demos/Pro.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo/essentiel" element={<Essentiel />} />

        <Route path="/demo/plus" element={<PlusLayout />}>
          <Route index element={<PlusAccueil />} />
          <Route path="services" element={<PlusServices />} />
          <Route path="realisations" element={<PlusRealisations />} />
          <Route path="atelier" element={<PlusAtelier />} />
          <Route path="contact" element={<PlusContact />} />
        </Route>

        <Route path="/demo/pro" element={<Pro />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
