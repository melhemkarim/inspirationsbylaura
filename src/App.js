import React from 'react';

import { AboutUs, Arrivals, Footer,  Header,} from './container';
import { Navbar , Navbarr, Products } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Navbarr />
    <Header />
    <AboutUs />
    <Products />
    <Arrivals/>
    <Footer />
  </div>
);

export default App;
