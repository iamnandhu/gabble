const UserInfo = () => {
  return (
    <div className='userInfo p-[20px] flex items-center justify-between'>
        <div className='user flex items-center gap-[20px]'>
            <span className='p-2 rounded-[50px] bg-white'>
                <img src="./user.png" alt="" className='w-[25px] h-[25px] rounded-[50%] object-cover'/>
            </span>

            <h2>John Doe</h2>
        </div>
        <div className='icons flex gap-[20px]'>
            <span className='material-symbols-outlined text-[20px]'>more_horiz</span>
            <span className='material-symbols-outlined text-[20px]'>videocam</span>
            <span className='material-symbols-outlined text-[20px]'>edit_square</span>
        </div>
    </div>
  )
}

export default UserInfo