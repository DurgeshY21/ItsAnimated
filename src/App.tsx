import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Icons from './pages/Icons';
import IconDetails from './pages/IconDetails';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import Inputs from './pages/Inputs';
import Interactions from './pages/Interactions';
import InteractionDetail from './pages/InteractionDetail';
import ButtonDetail from './pages/ButtonDetail';
import CardDetail from './pages/CardDetail';
import Showcase from './pages/Showcase';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-primary-100 selection:text-primary-900 flex flex-col bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/icons/:id" element={<IconDetails />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/buttons/:id" element={<ButtonDetail />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/cards/:id" element={<CardDetail />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/interactions" element={<Interactions />} />
            <Route path="/interactions/:id" element={<InteractionDetail />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
