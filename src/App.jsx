
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import AvatarCard from './components/avatarCard/AvatarCard';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/projects/Projects';
import AboutMe from './pages/aboutMe/AboutMe';
import Settings from './components/settings/Settings';

function App() {


  return (
    <div className='main'>
      <Settings />
      <AvatarCard />
      <AboutMe />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>

      <Footer />
    </div>

  );
}

export default App;

import './index.css';
