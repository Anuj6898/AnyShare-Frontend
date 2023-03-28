import * as React from 'react';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Ships from './Components/Ships/Ships';
    
export default function App(){
  return (<>
    <Navbar></Navbar>
    <Landing></Landing>
    <Ships></Ships>
  </>)
}
