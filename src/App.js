import './App.css';
import {Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Service"
import Contact from "./routes/Contact"

import { useEffect, useRef } from 'react';

function ScrollToTop() {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevPathname.current = location.pathname;
    }
  }, [location.pathname]);

  return null;
}


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><ScrollToTop /><Home /></>} />
        <Route path='/about' element={<><ScrollToTop /><About /></>} />
        <Route path='/service' element={<><ScrollToTop /><Service /></>} />
        <Route path='/contact' element={<><ScrollToTop /><Contact /></>} />
      </Routes>
    </div>
  );
};

export default App;
