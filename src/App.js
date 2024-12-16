import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Signup from './Components/Signup';
import Dashboard from './Components/Modules/Dashboard';
import Notfound from './Components/Notfound';
import Reporting from './Components/Modules/Reporting';
import Usestate from './Components/Hooks/Usestate';
import Fetching from './Components/Hooks/Fetching';
import Earbuds from './Components/Modules/Earbuds';
import Budsdetails from './Components/Modules/Details/Budsdetails';
import CompA from './Components/Hooks/Props/CompA';
import One from './Components/Hooks/Context/One';
import Click from './Components/Hooks/Click';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/react9445' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/reporting' element={<Reporting />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/hooks' element={<Usestate />} />
          <Route path='/fetching' element={<Fetching />} />
          <Route path='/earbuds' element={<Earbuds />} />
          <Route path='/earbuds/:id' element={<Budsdetails />} />
          <Route path='/props' element={<CompA />} />
          <Route path='/context' element={<One />} />
        </Routes>
      </Router>
      <Click />
    </div>
  )
}

export default App