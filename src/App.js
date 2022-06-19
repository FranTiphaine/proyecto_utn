import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutMePage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>

        <Footer/>
      </div>
  );
}

export default App;