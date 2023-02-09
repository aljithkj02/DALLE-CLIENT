
import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logo } from './assets';
import { Home, CreatePost, Login, Signup, Profile } from './Pages';
import { logout } from './redux/auth/authAction';
 
const App = () => { 
  const [isOpen, setIsOpen] = useState(false);
  let { isAuth, name } = useSelector(data=> data); 
  const dispatch = useDispatch();

  const logoutUser = () => {
      dispatch(logout());
  }

  const handleProfile = () => {
      setIsOpen(false);
  }
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white
        sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to='/'>
              <img src={ logo } alt="Logo" className="w-28 object-contain" />
          </Link>

          <div className="flex justify-center align-center">
            <Link to='/create-post' className="font-inter font-medium bg-[#6469ff] text-white
                px-4 py-2 rounded-md mx-5"
              >
                Create
            </Link>

            {(isAuth)? (
              <div>
                <button className="inline-flex justify-center w-full rounded-full border-gray-300
                  shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                  onClick={ ()=> setIsOpen(!isOpen)}
                > 
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIvfnFlzfqYihZRcEq_MhJefvOXKJA4xWpBM_Dysx&s" alt="User profile"
                    className="w-10 rounded-full cursor-pointer"
                  />
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-3 w-[120px] rounded-md shadow-lg
                    bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                  >
                    <div className="py-1">
                      <Link to="/profile"
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 duration-300
                        hover:bg-indigo-500 hover:text-white"
                        onClick={ handleProfile }
                      >
                        <span className="material-symbols-outlined mr-1"> person </span>
                        Profile</Link>

                      <Link to="/"
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 duration-300
                        hover:bg-indigo-500 hover:text-white"
                        onClick={ logoutUser }
                      >
                        <span className="material-symbols-outlined mr-1"> logout </span>
                        Logout</Link>
                    </div>
                  </div>
                )}
              </div>
            ): (
              <Link to='/login' className="font-inter font-medium bg-green-700 text-white
                px-4 py-2 rounded-md"
              >
                  Login
              </Link>
            )}
          </div>
          
      </header>

      <main onClick={()=> setIsOpen(false)} className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/create-post' element={ <CreatePost /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/signup' element={ <Signup />} />
              <Route path='/profile' element={ <Profile />} />
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
