import React from 'react'
import { IoSend } from "react-icons/io5";
const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input type="text" 
        placeholder='type a message...'
        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-900 text-white' />

        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>
          <IoSend />
        </button>

      </div>
      
    </form>
  )
}

export default MessageInput
