import React from 'react';
import { render } from 'react-dom';

import './style.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';


const App = () => (
  <>
    <div className='container'>
      <Header title="Móda"/>
      <Dresses/>
      <Shoes/>
      <Accessories/>
      <Footer year={2022} name="Czechitas"/>
    </div>
    
  </>
);


render(<App />, document.querySelector('#app'));
