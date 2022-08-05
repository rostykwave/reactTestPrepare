import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './layout/SharedLayout';
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
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;

//modern normalise(box-sizing: border-box)
//Card component
//Grid
//All layout
