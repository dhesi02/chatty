import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { SiGooglemessages } from "react-icons/si";

const MessageContainer = () => {
    const nochatSelected=true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>

        {nochatSelected ? <NochatSelected/> :(
            <>
            <div className='bg-slate-800 px-5 py-3 mb-5'>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img src="https://avatar.iran.liara.run/public/girl" alt="user avator" />
                    </div>
                    <span className='text-white font-bold py-2 px-3'>Jeevi</span>
                </div>
        
            </div>

            <Messages/>
            <MessageInput/>
            </>
        )}
      
    </div>
  )
}

export default MessageContainer


const NochatSelected = () => {
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
                <p>Welcome Dhesigan!!</p>
                <p>Select chat to start messaging..</p>
                <SiGooglemessages  className='text-3xl md:text-6xl text-center'/>

            </div>

        </div>
    )
}
