
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';

import './index.scss';
import './App.scss';

import { useTheme } from './hooks/useTheme';
import Home from './pages/Home';
import MLS from './pages/MLS';
import About from './pages/About';

function App(): JSX.Element {

  const { theme, setTheme } = useTheme();

  function changeThemeBtnClickHandler() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <div id="main">
      {/* <Header changeTheme={changeThemeBtnClickHandler} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mls' element={<MLS changeTheme={changeThemeBtnClickHandler} />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
};

export default App;
