
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

import './index.scss';
import './App.scss';

import { useTheme } from './hooks/useTheme';
import Home from './pages/Home';
import About from './pages/About';

function App(): JSX.Element {

  const { theme, setTheme, getPreferredScheme } = useTheme();

  function setDefaultThemeBtnClickHandler() {
    const defaultTheme = getPreferredScheme();
    setTheme(defaultTheme);
  }

  function changeThemeBtnClickHandler() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <div id="main">
      <Header changeTheme={changeThemeBtnClickHandler}
        setDefaultTheme={setDefaultThemeBtnClickHandler} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
};

export default App;
