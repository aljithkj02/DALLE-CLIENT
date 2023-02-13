import React from 'react'

const Comment = () => {
  return (
    <div className="border-2 border-gray-300 px-5 py-4 rounded-md flex items-center shadow-md mt-2">
        <div className="w-11 h-11 rounded-full mr-5">
            <img className="object-cover rounded-full shadow-2xl " 
                src="http://res.cloudinary.com/dhxlb4dbm/image/upload/v1675852037/yxmeuw6ylxtcske9jq0j.png" 
                alt="Profile Image"
            />
        </div>  
        <div className="flex flex-col">
            <p className="text-sm font-bold">ahkshy <span className="text-[15px] text-gray-800 ml-2 font-normal">Love from chalakudy</span></p>
            <p className="text-sm ">1 min ago</p>
        </div>
    </div>
  )
}

export default Comment
