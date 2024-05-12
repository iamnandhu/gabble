import "./details.css"

const Details = () => {
  return (
    <div className="detail flex-[1] flex flex-col overflow-scroll">
      <div className="user px-5 py-8 flex flex-col items-center gap-5 border-b-[1px] border-[#dddddd35]">
        <img src="./user.png" alt="" className="w-40 h-40 object-cover rounded-[50%]"/>
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>


      <div className="info p-5 flex flex-col gap-7 overflow-scroll">
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Chat Settings</span>
          
            <span className="material-symbols-outlined text-[24px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-[50%] cursor-pointer">keyboard_arrow_up</span>
          </div>
        </div>

        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Privacy & help</span>

            <span className="material-symbols-outlined text-[24px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-[50%] cursor-pointer ">keyboard_arrow_up</span>            
          </div>
        </div>

        <div className="option flex flex-col gap-5 overflow-scroll">
          <div className="title flex items-center justify-between">
            <span>Shared photos</span>

            <span className="material-symbols-outlined text-[24px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-[50%] cursor-pointer">keyboard_arrow_down</span>
          </div>

          <div className="photos overflow-scroll flex flex-col gap-5 py-5">
            <div className="photoItem flex items-center justify-between">
              <div className="photoDetails flex items-center gap-5">
                <img src="https://images.pexels.com/photos/23354638/pexels-photo-23354638/free-photo-of-young-woman-crouching-on-a-beach-with-her-black-poodle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""
                  className="w-10 h-10 rouned-[5px] object-cover rounded-[5px]"/>
                
                <span className="text-[14px] text-gray-400 font-light">photo_2023_2.png</span>
              </div>
              
              <span className="material-symbols-outlined text-[24px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-[50%] cursor-pointer">download</span>
            </div>

            <div className="photoItem flex items-center justify-between">
              <div className="photoDetails flex items-center gap-5">
                <img src="https://images.pexels.com/photos/23354638/pexels-photo-23354638/free-photo-of-young-woman-crouching-on-a-beach-with-her-black-poodle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""
                  className="w-10 h-10 rouned-[5px] object-cover rounded-[5px]"/>
                
                <span className="text-[14px] text-gray-400 font-light">photo_2023_2.png</span>
              </div>
              
              <span className="material-symbols-outlined text-[24px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-[50%] cursor-pointer">download</span>
            </div>

            <div className="photoItem flex items-center justify-between">
              <div className="photoDetails flex items-center gap-5">
                <img src="https://images.pexels.com/photos/23354638/pexels-photo-23354638/free-photo-of-young-woman-crouching-on-a-beach-with-her-black-poodle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""
                  className="w-10 h-10 rouned-[5px] object-cover rounded-[5px]"/>
                
                <span className="text-[14px] text-gray-400 font-light">photo_2023_2.png</span>
              </div>
              
              <span className="material-symbols-outlined text-[24px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-[50%] cursor-pointer">download</span>
            </div>

            <div className="photoItem flex items-center justify-between">
              <div className="photoDetails flex items-center gap-5">
                <img src="https://images.pexels.com/photos/23354638/pexels-photo-23354638/free-photo-of-young-woman-crouching-on-a-beach-with-her-black-poodle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""
                  className="w-10 h-10 rouned-[5px] object-cover rounded-[5px]"/>
                  
                <span className="text-[14px] text-gray-400 font-light">photo_2023_2.png</span>
              </div>

              <span className="material-symbols-outlined text-[24px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-[50%] cursor-pointer">download</span>
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Shared Files</span>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>
        </div>

        <button className="px-5 py-2.5 bg-red-800 hover:bg-red-600 flex items-center gap-1 justify-center rounded-[5px] border-none">
          Block

          <span className="material-symbols-outlined text-white text-[22px]">block</span>
        </button>
      </div>
    </div>
  )
}

export default Details