import React from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { Home, CreatePost, Login, Signup, Profile } from '../Pages';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/create-post' element={ <CreatePost /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <Signup />} />
            <Route path='/profile' element={ <PrivateRoute> <Profile /> </PrivateRoute> } />
        </Routes>
  )
}

export default AllRoutes
