import React from 'react';
import Header from './Header.js'
import Header2 from './Header2.js'
import './App.css';
import Firstpagesearchbar from './first-page-search-bar.js';
import Secondpagecourse from './second_page_course.js';
import AboutPage from './aboutpage.js';

function App() {
  return (<div>
    <Header />
    <Header2 />
    <Firstpagesearchbar />
    <Secondpagecourse />
    <AboutPage />
  </div>
  );
}

export default App;
