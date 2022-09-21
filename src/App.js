import React from 'react';

import { AboutUs, Arrivals, Footer,  Header,} from './container';
import { Navbarrr , Navbarr, Products } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbarrr />
    <Navbarr />
    <Header />
    <AboutUs />
    <Products />
    <Arrivals/>
    <Footer />
  </div>
);

export default App;
