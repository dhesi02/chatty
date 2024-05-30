import React from 'react'
import useConversations from '../../zustand/useConversation'

const Conversation = ({conversation}) => {

    const{selectedConversations,setSelectedConversations} = useConversations();

    const isSelected = selectedConversations?._id === conversation._id;
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-slate-500 rounded p-3 py-2 cursor-pointer
     ${isSelected ? "bg-blue-500":""}`}
     onClick={()=> setSelectedConversations(conversation)}
     >

        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avator" />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-white'>{conversation.username}</p>
            </div>
        </div>

    </div>

    <div className='divider my-0 py-0 h-2'/>

    </>
  )
}

export default Conversation