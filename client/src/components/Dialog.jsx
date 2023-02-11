import React from 'react'

const Dialog = ({ message, handlerNo, handlerYes }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 rght-0 w-full z-10 bg-black bg-opacity-40  flex justify-center items-center">
        <div className="flex flex-col justify-center w-96 h-52 items-center bg-[#d9d9d9] rounded-lg">
            <h3 className="text-lg font-medium">{ message }</h3>
            <div className="flex items-center mt-4">
                <button className="px-8 py-2 mx-3 bg-red-500 border-none rounded-md hover:bg-red-600 font-normal
                    text-white"
                    onClick={ handlerNo }
                >No</button>
                <button className="px-8 py-2 mx-3 bg-green-500 border-none rounded-md hover:bg-green-600 font-normal
                    text-white"
                    onClick={ handlerYes }
                >Yes</button>
            </div>
        </div>
    </div>
  )
}

export default Dialog
