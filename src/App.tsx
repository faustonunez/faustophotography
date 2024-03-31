import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ScrollToTop } from "./components/scrolltotop";

// Component Imports
import { Nav } from "./components/nav";

import { Footer } from "./components/footer";
import { MenuModal } from "./components/menu-modal";

import LeftStrip from "./assets/film-strip-left.svg?react";
import RightStrip from "./assets/film-strip-right.svg?react";

// Page Components - Note the capitalization
import { Homepage } from "./homepage";
import { People } from "./pages/people/people-categories";
import { Places } from "./pages/places/places-categories";
import { Events } from "./pages/events/events-gallery";
import { Motion } from "./pages/motion/motion";
import { Contact } from "./contact";
import { About } from "./about";
import { Peopleportraits } from "./pages/people/people-portraits";
import { Peoplecouples } from "./pages/people/people-couples";
import { NewyorkPlaces } from "./pages/places/newyork-places";
import { DominicanrepublicPlaces } from "./pages/places/dominicanrepublic-places";

function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const toggleMenuModal = () => setIsMenuModalOpen(!isMenuModalOpen);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="bg-light-background dark:bg-dark-background flex flex-col min-h-screen grain-effect">
        <LeftStrip className="  hidden lg:block lg:fixed left-0 " />
        <RightStrip className="   hidden lg:block lg:fixed right-0" />
        <Nav onBurgerMenuClick={toggleMenuModal} />
        {isMenuModalOpen && <MenuModal onClose={closeMenuModal} />}
        {/* Routes for the pages */}

        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          {/* Set Homepage as default */}
          <Route path="/people" element={<People />} />
          <Route path="/people/portraits" element={<Peopleportraits />} />
          <Route path="/people/couples" element={<Peoplecouples />} />
          <Route path="/places" element={<Places />} />
          <Route path="/place/newyork" element={<NewyorkPlaces />} />
          <Route
            path="/place/dominicanrepublic"
            element={<DominicanrepublicPlaces />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Redirect to Homepage if no match is found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
