import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import styled from 'styled-components';

import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationPage from './pages/LocationPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SocialIcons from './components/SocialIcons';
import ToggleMenu from './components/ToggleMenu';
import CardDetails from './components/CardDetails';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    } else {
      setTheme('light-theme');
      setChecked(true);
    }
  };

  return (
    <div className='App'>
      <NavBar navToggle={navToggle} setNavToggle={setNavToggle} />
      <div className='theme'>
        <div className='light-dark-mode'>
          <div className='left-content'>
            <Brightness4Icon />
          </div>
          <div className='right-content'>
            <Switch
              value=''
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              onClick={toggleTheme}
            />
          </div>
          <SocialIcons />
        </div>
      </div>

      <ToggleMenu />

      <MainContentStyled>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='characters/:id' element={<CardDetails />} />

          <Route path='/episodes' element={<EpisodesPage />} />
          <Route path='/locations' element={<LocationPage />} />
        </Routes>
      </MainContentStyled>
      <Footer />
    </div>
  );
}

const MainContentStyled = styled.main`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export default App;
