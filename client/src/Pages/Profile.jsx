import React from 'react'

const Profile = () => {
  return (
    <section className="max-w-7xl mx-auto ">
        <div className="flex items-center">
            <div className="w-40 h-40">
                <img className="w-full h-full rounded-full" src="https://images.wsj.net/im-345146/square" alt="profile pic"/>
            </div>
            <div className="mx-10">
                <h1 className="text-2xl ">Neymar JR</h1>
                <p className="text-md mt-2">20 Posts</p>
            </div>
        </div>

        <div className="mt-20 ">
            <p className="flex items-center max-w-[100px] justify-center">
                <span className="material-symbols-outlined text-gray-500 mx-2"> grid_on </span>  Posts
            </p>
        </div>
        
    </section>
  )
}

export default Profile
