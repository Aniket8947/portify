import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';
import Preloader from '../src/components/Preloader';
import Home from "./pages/Home"
import Landing from "./pages/Landing"

function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
        <BrowserRouter >
          <Routes >
            <Route path = '/' element = {
              <div>
              {!loaded && <Preloader onLoaded={() => setLoaded(true)} />}
              {loaded && <Landing />}
            </div>
            }> </Route>
            <Route path = '/home' element = {<Home />}> </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
