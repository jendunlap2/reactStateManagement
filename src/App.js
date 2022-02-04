import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ClassList from './views/ClassList';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home'

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar />
          <div className='container'>
            <Routes>  
              <Route path="/" element={<Home />} />
              <Route path="/classlist" element={<ClassList />} />
            </Routes>

          </div>
      </>
    );
  }
}
