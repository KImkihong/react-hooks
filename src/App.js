import React from 'react';
import logo from './logo.svg';
import './App.css';
import Connter from './Connter';
import Info from './info';
import MeteEx1 from './MeteEx1';
import ArrayFunc from './ArrayFunc';
import SimpleMenu from './SimpleMenu';

function App() {
  return (
    <div className="App">
      <h3>hooks예제1</h3>
      <Connter/>
      <h3>hooks예제2</h3>
      <Info/>
      <h3>material ui test 예제1</h3>
      <MeteEx1/>
      <h3>material ui test 예제2</h3>
      <ArrayFunc/>
      <h3>심플메뉴</h3>
      <SimpleMenu/>
    </div>
  );
}

export default App;
