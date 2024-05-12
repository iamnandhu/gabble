import "./login.css"
import  {toast} from "react-toastify"

import { useState } from "react"

const Login = () => {
  const [avatar, setAvatar] = useState({
    file:null,
    url:""
  })

  const handleAvatar = e => {
    if(e.target.files[0]) {
        setAvatar({
            file:e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }
  }

  const handleLogin = e => {
    e.preventDefault()
    toast.dark("Hello")
  }


  return (
    <div className="login w-full h-full flex items-center gap-[100px]">
        <div className="login-item flex-1 flex flex-col items-center gap-5">
            <h2>Welcome back</h2>
            
            <form action="" onSubmit={handleLogin} className="w-[70%] flex flex-col items-center justify-center gap-5">
                <input type="text" placeholder="Email" name="email" className="px-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <input type="password" placeholder="Password" name="password" className="p-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <button type="submit" className="w-full px-5 py-2.5 text-[14px] border-none bg-[#1f8ef1] text-white rounded-[5px]">Login</button>
            </form>
        </div>

        <div className="seperator h-[80%] w-[2px] bg-[#dddddd35]"></div>

        <div className="signup-item flex-1 flex flex-col items-center gap-5">
            <h2>Create an account</h2>

            <form action="" className="w-[70%] flex flex-col items-center justify-center gap-5">
                <label htmlFor="file" className="w-full flex items-center gap-[12px] cursor-pointer">
                    <img src={avatar.url || "./user.png"} alt="" className="bg-white rounded-[10px] w-12 h-12 object-cover opacity-60"/>
                    
                    <button className="bg-[#3e71e7ce] hover:bg-[#4a69b2de] px-5 py-2.5 rounded-[10px] text-[14px]">Upload Image</button>
                </label>

                <input type="file" id="file" className="hidden" onChange={handleAvatar}/>

                <input type="text" placeholder="Username" name="username" className="px-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <input type="text" placeholder="Email" name="email" className="px-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <input type="password" placeholder="Password" name="password" className="px-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <button className="w-full px-5 py-2.5 text-[14px] border-none bg-[#1f8ef1] text-white rounded-[5px]">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login