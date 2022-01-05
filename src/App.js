import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css'

import MainNavigation from './components/layout/MainNavigation';
import Page01 from './pages/SampleDataGeneratorPage';
import Page02 from './pages/page02';
import Page03 from './pages/page03';
import HeaderLine from './components/layout/HeaderLine';
import Page from './components/uiContainer/Page'

function App() {
  return (
    <div className={classes.mainStyle}>
      <div className={classes.sideArea}>
        <MainNavigation />
      </div>
      <div className={classes.pageArea}>
        <HeaderLine />
          <Page>
            <Routes>
              <Route path='/' element={<Page01 />} />
              <Route path='/page02' element={<Page02 />} />
              <Route path='/page03' element={<Page03 />} />
            </Routes>
          </Page>
      </div>
    </div>
  );
}

export default App;