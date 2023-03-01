import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logo } from '../assets';
import { logout } from '../redux/auth/authAction';
import { Dialog } from '../components';

const Navbar = ({ isOpen, handleIsOpen }) => {
    const [dialog, setDialog] = useState(false);
    let { isAuth, name } = useSelector(data=> data); 
    const dispatch = useDispatch();
  
    const logoutUser = () => {
        setDialog(false);
        dispatch(logout());
    }
  
    const handleProfile = () => {
        setIsOpen(false);
    }
  return (
    <header className="w-full flex justify-between items-center bg-white
        sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] fixed z-10">
          { 
            dialog && <Dialog message="Logout from openAi?" handlerNo={ ()=> setDialog(false) }
              handlerYes={ logoutUser }
            /> 
          }
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
                  onClick={ handleIsOpen }
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
                        onClick={ () => setDialog(true) }
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
  )
}

export default Navbar
