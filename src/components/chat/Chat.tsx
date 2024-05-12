import EmojiPicker from "emoji-picker-react"
import { useState } from "react"
import "./chat.css"

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")

  const handleEmoji = e => {
    setText(prev => prev + e.emoji)
  }

  return (
    <div className="flex-[2] flex flex-col border-x-[1px] border-[#dddddd35] h-full">
      <div className="top p-5 flex items-center justify-between border-b-[1px] border-[#dddddd35]">
        
        <div className="user flex items-center gap-[20px]">
          <img src="./user.png" alt="" className="w-12 h-12 rounded-[50%] object-cover"/>
          
          <div className="texts flex flex-col gap-1.5">
            <span className="text-[18px] font-bold">Jane Doe</span>
            <p className="text-[14px] font-[300] text-[#a5a5a5]">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="icons flex gap-[20px] items-center">
          <span className="material-symbols-outlined text-[22px] cursor-pointer">call</span>
          <span className="material-symbols-outlined text-[22px] cursor-pointer">videocam</span>
          <span className="material-symbols-outlined text-[22px] cursor-pointer">info</span>
        </div>
      </div>

      <div className="center p-4 flex-[1] overflow-scroll flex flex-col gap-4">

        <div className="message max-w-[70%] flex gap-4 items-start">  
          <div className="message-img-container rounded-[50%] bg-[rgba(163,163,163,0.6)] p-2">
            <img src="./user.png" alt="" className="w-6 h-6 object-cover"/>
          </div>

          <div className="message-texts flex-[1] flex flex-col gap-[5px]">
            <p className="p-5 bg-[rgba(17,25,40,0.3)] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iusto voluptate 
              sunt iure fugiat perspiciatis ratione id dignissimos, praesentium nulla.
            </p>

            <span className="text-[12px] text-gray-400">1 min ago</span>
          </div>
        </div>

        <div className="message own self-end  max-w-[70%]">
          <div className="message-texts flex-[1] flex flex-col gap-[5px]">
            <p className="bg-[#5183ef] p-5 rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iusto voluptate 
              sunt iure fugiat perspiciatis ratione id dignissimos, praesentium nulla.
            </p>
            
            <span className="text-[12px] text-gray-400">1 min ago</span>
          </div>
        </div>

        <div className="message max-w-[70%] flex gap-4 items-start">  
          <div className="message-img-container rounded-[50%] bg-[rgba(163,163,163,0.6)] p-2">
            <img src="./user.png" alt="" className="w-6 h-6 object-cover"/>
          </div>

          <div className="message-texts flex-[1] flex flex-col gap-[5px]">
            <p className="p-5 bg-[rgba(17,25,40,0.3)] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iusto voluptate 
              sunt iure fugiat perspiciatis ratione id dignissimos, praesentium nulla.
            </p>

            <span className="text-[12px] text-gray-400">1 min ago</span>
          </div>
        </div>

        <div className="message own self-end  max-w-[70%]">
          <div className="message-texts flex-[1] flex flex-col gap-[5px]">
            <p className="bg-[#5183ef] p-5 rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iusto voluptate 
              sunt iure fugiat perspiciatis ratione id dignissimos, praesentium nulla.
            </p>
            
            <span className="text-[12px] text-gray-400">1 min ago</span>
          </div>
        </div>

        <div className="message max-w-[70%] flex gap-4 items-start">  
          <div className="message-img-container rounded-[50%] bg-[rgba(163,163,163,0.6)] p-2">
            <img src="./user.png" alt="" className="w-6 h-6 object-cover"/>
          </div>

          <div className="message-texts flex-[1] flex flex-col gap-[5px]">
            <p className="p-5 bg-[rgba(17,25,40,0.3)] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iusto voluptate 
              sunt iure fugiat perspiciatis ratione id dignissimos, praesentium nulla.
            </p>

            <span className="text-[12px] text-gray-400">1 min ago</span>
          </div>
        </div>

        <div className="message own self-end  max-w-[70%]">
          <div className="message-texts flex-[1] flex flex-col gap-[5px]">
            <img src="https://images.pexels.com/photos/23354638/pexels-photo-23354638/free-photo-of-young-woman-crouching-on-a-beach-with-her-black-poodle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" className="w-full h-[300px] object-cover rounded-[10px]" alt="" />
            <p className="bg-[#5183ef] p-5 rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iusto voluptate 
              sunt iure fugiat perspiciatis ratione id dignissimos, praesentium nulla.
            </p>
            
            <span className="text-[12px] text-gray-400">1 min ago</span>
          </div>
        </div>

        <div className="message max-w-[70%] flex gap-4 items-start">  
          <div className="message-img-container rounded-[50%] bg-[rgba(163,163,163,0.6)] p-2">
            <img src="./user.png" alt="" className="w-6 h-6 object-cover"/>
          </div>

          <div className="message-texts flex-[1] flex flex-col gap-[5px]">
            <p className="p-5 bg-[rgba(17,25,40,0.3)] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iusto voluptate 
              sunt iure fugiat perspiciatis ratione id dignissimos, praesentium nulla.
            </p>

            <span className="text-[12px] text-gray-400">1 min ago</span>
          </div>
        </div>

      </div>

      <div className="bottom mt-auto p-5 flex items-center justify-between gap-5 border-t-[1px] border-[#dddddd35]">
        <div className="bottom-icons flex gap-5">
          <span className="material-symbols-outlined font-[300] cursor-pointer">image</span>
          <span className="material-symbols-outlined font-[300] cursor-pointer">photo_camera</span>
          <span className="material-symbols-outlined font-[300] cursor-pointer">mic</span>
        </div>

        <input type="text" placeholder="Type a message" value={text} className="flex-[1] bg-[rgba(17,25,40,0.5)] border-none 
        outline-none text-white rounded-[10px] p-4 text-[18px] placeholder:text-[16px]" onFocus={() => setOpen(false)} onChange={(e) => setText(e.target.value)}/>

        <div className="emoji relative">
          <span className="material-symbols-outlined font-[300] cursor-pointer" onClick={()=> setOpen(prev => !prev)}>mood</span>

          <div className="emojiPicker absolute bottom-[50px] left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>

        <button className="sendButton flex items-center gap-[4px] bg-[#3961c7] hover:bg-[#5183ef] text-white px-5 py-2.5 border-none rounded-[5px] cursor-pointer text-[16px]">
          Send
          <span className="material-symbols-outlined text-[22px]">send</span>
        </button>
      </div>
    </div>
  )
}

export default Chat