import React, { Suspense } from 'react'
import "./css/style.css";
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Layout = React.lazy(() => import('./layout/Layout'));
const HomeScreen = React.lazy(() => import('./screen/Home/HomeScreen'));

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>
        
        <Spinner />
      </div>}>
          <Routes>
              {/*Website Routes*/}
              <Route path='/' element={<Layout />}>
                  <Route index  element={<HomeScreen />}></Route>
              </Route>
          </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App