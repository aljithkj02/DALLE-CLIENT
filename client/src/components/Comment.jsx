import React from 'react'

const Comment = ({ image , comment, name }) => {

  return (
    <div className="border-2 border-gray-300 px-5 py-4 rounded-md flex items-center shadow-md mt-2">
        <div className="w-11 h-11 rounded-full mr-5">
            <img className="object-cover rounded-full shadow-2xl " 
                src={image || 'https://p.kindpng.com/picc/s/21-211456_user-icon-hd-png-download.png'} 
                alt="Profile Image"
            />
        </div>  
        <div className="flex flex-col">
            <p className="text-sm font-bold">{ name } </p>
            <p className="text-[15px] text-gray-800 font-normal">{ comment }</p>
        </div>
    </div>
  )
}

export default Comment
