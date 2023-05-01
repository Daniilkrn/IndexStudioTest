import React, { useState , useEffect, } from 'react';
import styled from 'styled-components';
import './styles/app.scss'
import './styles/error.scss'
import './styles/media.scss'
import { HashRouter } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Layout from './layout';
import CardAbout from './components/CardAbout/CardAbout';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
`

function App() {
  return (
    <AppWrapper className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              
              {/* <Route path='*' element={<NFP/>}></Route> */}
            </Route>
            <Route path=":id" element={<CardAbout/>}></Route>
          </Routes>
        </HashRouter>
    </AppWrapper>
  );
}

export default App;
