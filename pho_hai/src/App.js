import Nav from './components/navbar';
import Home from './components/home';
import NotFound from './components/notfound';
import Contact from './components/contact';
import About from './components/about';
import Menu from './components/menu';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/menu' element={<Menu />} />=
          <Route path ='/contact' element={<Contact />} />
          <Route path ='/about' element={<About />} />
          <Route path ='*' element={<Navigate replace to ='/404-not-found'/>} />
          <Route path ='/404-not-found' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
