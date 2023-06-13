import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories';
import Home from './pages/Home/Home';
import Business from './pages/Business/Business';
import Machine from './pages/Machine-learning/Machine-learning';
import Mobile from './pages/Mobile-development/Mobile';
import Web from './pages/Web-development/Web';
import Footer from './components/Footer/Footer';
import Newsletters from './pages/Newslettres/Newslettres';
import Post from './components/Post/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Categories />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/machine-learning" element={<Machine />} />
            <Route path="/mobile-development" element={<Mobile />} />
            <Route path="/web-development" element={<Web />} />
            <Route path="/newsletters" element={<Newsletters />} />
            <Route path="/posts/:postId" element={<Post />} />
          </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
