import { Routes, Route } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import Page01 from './pages/page01';
import Page02 from './pages/page02';
import Page03 from './pages/page03';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Page01 />} />
        <Route path='/page02' element={<Page02 />} />
        <Route path='/page03' element={<Page03 />} />
      </Routes>
    </div>
  );
}

export default App;