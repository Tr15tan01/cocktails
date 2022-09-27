import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
// import Home from './pages/Home';

// import About from './pages/About';
import Error from './pages/Error';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import MyerrorBoundary from './components/MyerrorBoundary';

const Home = React.lazy(() => import('./pages/Home'))
const SingleCocktail = React.lazy(() => import('./pages/SingleCocktail'))
const About = React.lazy(() => import('./pages/About'))

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />

        <Route path='about' element={<MyerrorBoundary><Suspense fallback={<Loading />}><About /></Suspense></MyerrorBoundary>} />

        <Route path='cocktail/:id' element={<Suspense fallback={<Loading />}><SingleCocktail /></Suspense>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router >

  );
}

export default App;
