import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-slate-500 rounded p-3 py-2 cursor-pointer'>

        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/girl" alt="user avator" />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-white'>Dhesigan</p>
            </div>
        </div>

    </div>

    <div className='divider my-0 py-0 h-1'/>

    </>
  )
}

export default Conversation