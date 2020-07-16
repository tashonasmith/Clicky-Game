import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import images from "./data/images.json"

const App = () => {
  return (
    <>
      <Wrapper list={images}/>
    </>
  )
}

export default App;
