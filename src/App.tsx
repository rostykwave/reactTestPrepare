import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './layout/SharedLayout';
import GalleryPage from './pages/GalleryPage';
import VotingPage from './pages/VotingPage';
import { GlobalStyle } from './styleConfig/GlobalStyle';

const HomePage = lazy(() => import('./pages/HomePage'));
const BreedsPage = lazy(() => import('./pages/BreedsPage'));

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/breeds" element={<BreedsPage />}></Route>
          <Route path="/voting" element={<VotingPage />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;

//Redux createSlice
//API full
//Grid
//Dark theme
//All layout
//modern normalise(box-sizing: border-box)//done
//Card component//done
