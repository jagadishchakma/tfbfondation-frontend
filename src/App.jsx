// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/globals/Layout';
import Bodhidhara from './pages/Bodhidhara';
import TfbFoundation from './pages/TfbFoundation';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bodhidhara" element={<Bodhidhara />} />
        <Route path="/tfb" element={<TfbFoundation />} />
      </Routes>
    </Layout>
  );
}

export default App;