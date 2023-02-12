import React from 'react'
import axios from 'axios'

import { download } from '../assets';
import { downloadImage, getRelativeTime } from '../utils'
import config from '../config'

const Card = ({ _id, name, prompt, photo, normalCard, handler, createdAt}) => {
  return (normalCard) ? (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover">
      <img src={photo} alt={prompt}  
        className="w-full h-auto object-cover rounded-xl"
      />

      <div className="group-hover:flex justify-center max-h-[94.5%] flex-col
        hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md transform hover:-translate-y-1
        duration-300"
      >
          <p className="text-white text-sm overflow-y-auto w-[80%]">{ prompt }</p>

          <div className="flex items-center justify-between mt-4">
            <p className="text-white text-xs text-gray-200">{ getRelativeTime( createdAt ) }</p>
            <div className="flex items-center">
                <button type="button" onClick={()=> downloadImage(_id, photo)}
                  className="outline-none bg-transparent border-none mr-3"
                >
                    <img src={download}  className="w-6 h-6 object-contain invert " alt="Download Icon"/>
                </button>
                <button type="button" onClick={()=> handler(_id)}
                  className="outline-none bg-transparent border-none"
                >
                    <i className="fa-solid fa-trash text-white"></i>
                </button>
            </div>
          </div>

      </div>
    </div>
  ):
  (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card ">
      <img src={photo} alt={prompt}  
        className="w-full h-auto object-cover rounded-xl"
      />

      <div className="group-hover:flex flex-col max-h-[94.5%]
        hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md transform hover:-translate-y-1
        duration-300"
      >
        <p className="text-white text-md overflow-y-auto">{ prompt }</p>
        <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center
                text-white text-sm font-bold"
              >
                {name[0].toUpperCase()}
              </div>
              <p className="text-white text-sm">{name}</p>
              <p className="text-white text-xs text-gray-200">{ getRelativeTime( createdAt ) }</p>
            </div>

            <button type="button" onClick={()=> downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
                <img src={download}  className="w-6 h-6 object-contain invert " alt="Download Icon"/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Card
