import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Flashback from './pages/Flashback';
import Gallery from './pages/Gallery';
import Wall from './pages/Wall';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="flashback" element={<Flashback />} />
          <Route path="wall" element={<Wall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;