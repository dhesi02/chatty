import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'

const Messages = () => {

  const {loading,messages} = useGetMessages();

  console.log(messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && <span className='loading loading-bars loading-sm'></span>}
        <Message/>
        

      
    </div>
  )
}

export default Messages
