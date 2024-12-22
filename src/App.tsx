
import './App.css'

import {  Route  } from "wouter";
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import { getUrl } from './lib/utils';
function App() {

  return (
    <>
    <Route path={getUrl('')}><Home/></Route>
    <Route path={getUrl('login')}><Login/></Route>
    <Route path={getUrl('register')}><Register/></Route>
    </>
  )
}

export default App
