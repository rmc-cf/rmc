
import './App.css'

import {  Route  } from "wouter";
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import { getUrl } from './lib/utils';
import News from './views/News';
import Blog from './views/Blog';
import Project from './views/Project';
import SingleNews from './views/SingleNews';
function App() {

  return (
    <>
    <Route path={getUrl('')}><Home/></Route>
    <Route path={getUrl('news')}><News/></Route>
    <Route path={getUrl('blog')}><Blog/></Route>
    <Route path={getUrl('project')}><Project/></Route>
    <Route path={getUrl('news/:id')}><SingleNews/></Route>
    <Route path={getUrl('login')}><Login/></Route>
    <Route path={getUrl('register')}><Register/></Route>
    </>
  )
}

export default App
