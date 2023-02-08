import React, { useState } from 'react'
import axios from 'axios'
import { Loader, FormField } from '../components';
import { Link, useNavigate } from 'react-router-dom'
import config from '../config'

const Signup = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleUserDataChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const signupUser = async (e) => { 
        e.preventDefault();
        if(userData.name && userData.email && userData.password){ 
            try {
                let response = await axios.post(`${config.API_URL}/auth/signup`, {...userData});
                if(response.data.success){
                    alert(response.data.message);
                    navigate('/')
                }
            } catch (err) {
                console.log(err);
                alert(err.response.data.message);
            }
        }
    }
  return (
    <section className="max-w-7xl mx-auto">
        <div>
            <h1 className="font-extrabold text-[32px] text-[#222328]">Signup</h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w-[600px]">Signup and create images using your imaginary thoughts and share them with your friends</p>
        </div>

        <form className="mt-12 max-w-3xl" onSubmit={ signupUser }>
            <div className="flex flex-col gap-5">
                <FormField 
                    LabelName="Name"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={userData.name}
                    handleChange={ handleUserDataChange }
                />
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
                    handleChange={ handleUserDataChange }
                />
                <p>Already have an account? <Link to='/login' className="text-[blue]">Login</Link></p>
                <div className="mt-5">
                    <button type="submit"
                        className="text-white bg-blue-700 font-medium  rounded-md text-sm w-full 
                        px-10 py-3 text-center"
                    >
                        Signup
                    </button>
                </div>
            </div>
        </form>
    </section>
  )
}

export default Signup
