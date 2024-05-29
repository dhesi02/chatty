import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className={`chat-bubble text-white bg-gray-900`}> Hey bro </div>
        <div className={`chat-footer opacity-60 text-xs flex gap-1 items-center`}>10:12</div>
      
    </div>
  )
}

export default Message
