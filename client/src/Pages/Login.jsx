import React, { useState } from 'react'
import { Loader, FormField } from '../components';
import { Link } from 'react-router-dom'

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleUserDataChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = (e) => {
        e.preventDefault();
        console.log(userData)
    }
  return (
    <section className="max-w-7xl mx-auto">
        
        <div>
            <h1 className="font-extrabold text-[32px] text-[#222328]">Login</h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w-[600px]">Login and create images using your imaginary thoughts and share them with your friends</p>
        </div>

        <form className="mt-16 max-w-3xl" onSubmit={ loginUser }>
            <div className="flex flex-col gap-5">
                <FormField 
                    LabelName="Email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={userData.email}
                    handleChange={ handleUserDataChange }
                />

                <FormField 
                    LabelName="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={userData.password}
                    handleChange={handleUserDataChange}
                />
                <p>Don't have any account? <Link to='/register' className="text-[blue]">Register</Link></p>
                <div className="mt-5">
                    <button type="submit"
                        className="text-white bg-blue-700 font-medium  rounded-md text-sm w-full 
                        px-10 py-3 text-center"
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
            
    </section>
  )
}

export default Login
