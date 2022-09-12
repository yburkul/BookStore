import React from 'react'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../../dashboard/dashboard'
import Lander from '../../pages/lander'
import Login from '../login/login'
import MyCart from '../myCart/myCart'
import Signup from '../signup/signup'

function Router1() {
    return (
      <div>
          <Router>
              <Routes>
                  {/* <Route exact path='/' element={<Login/>}/> */}
                  {/* <Route path='/signup' element={<Signup/>}/> */}
                  <Route exact path='/' element={<Lander/>}/>
                  <Route path='/dashboard' element={<Dashboard/>}/>
                  <Route path='mycart' element={<MyCart/>}/>
              </Routes>
          </Router>
      </div>
    )
  }
  export default Router1