import React from 'react'
import "./css/style.css";
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomeScreen from './screen/Home/HomeScreen';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              {/*Website Routes*/}
              <Route path='/' element={<Layout />}>
                  <Route index  element={<HomeScreen />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App