import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import config from '../config'
import { Card, Loader } from '../components';

const RenderCards = ({ data, title}) => {
    if(data?.length > 0) {
        return data.map((post)=> {
            return <Card key={post._id} {...post} normalCard={true} />
        }) 
    }
 
    return (
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
    )
}

const Profile = () => {
    let { name } = useSelector(data=> data);
    const [posts, setPosts] = useState([]);
    const [size, setSize] = useState(0);

    useEffect(() => {
        fetchPost();
    }, [])

    const fetchPost = async () => {
        try {
            const token = localStorage.getItem('token') || '';
            let response = await axios.get(`${config.API_URL}/api/v1/post/profile-posts`,{
                headers: {
                    'authorization' : `Bearer ${token}`
                }
            })
            if(response.data.success){
                setPosts(response.data.data);
                setSize(response.data.data.length);
            }
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }
  return (
    <section className="max-w-7xl mx-auto ">
        <div className="flex items-center">
            <div className="w-40 h-40">
                <img className="w-full h-full rounded-full" src={posts[0]?.photo || "https://p.kindpng.com/picc/s/21-211456_user-icon-hd-png-download.png"} alt="profile pic"/>
            </div>
            <div className="mx-10">
                <h1 className="text-2xl ">{ name[0].toUpperCase() + name.substring(1) }</h1>
                <p className="text-md mt-2">{size} Posts</p>
            </div>
        </div>

        <div className="mt-20 ">
            <p className="flex items-center max-w-[100px] justify-center">
                <span className="material-symbols-outlined text-gray-500 mx-2"> grid_on </span>  Posts
            </p>
        </div>

        <div className="grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 mt-10">
            { <RenderCards data={ posts } title="No posts" />}
        </div>
        
    </section>
  )
}

export default Profile
