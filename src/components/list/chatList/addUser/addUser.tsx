import React from 'react'

const addUser = () => {
  return (
    <div className="addUser w-max h-max p-7 bg-[rgba(0,0,0,0.84)] rounded-[10px] absolute inset-0 m-auto">
        <form className='flex gap-5'>
            <input type='text' placeholder='Username' name='username' className='p-5 border-none outline-none rounded-[10px]'/>
            <button type='button' className='p-5 rounded-[10px] bg-[#1a73e8] text-white border-none'>Search</button>
        </form>

        <div className="user mt-12 flex item-center justify-between">
            <div className="details flex items-center gap-5">
                <img src="./user.png" alt="" className='w-8 h-8 rounded-[50%] object-cover'/>
                
                <span>Jane Doe</span>
            </div>

            <button className='p-5 rounded-[10px] bg-[#1a73e8] text-white border-none'>Add user</button>
        </div>
    </div>
  )
}

export default addUser