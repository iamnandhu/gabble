import "./login.css"
import  {toast} from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../libs/firebase/firebase"
import { signUp, userSignUpResponseModel } from "../../dto/dto"
import { ColorRing } from 'react-loader-spinner'

let userCredential: userSignUpResponseModel | undefined;

const Login = () => {
  const [spinnerVisible, setSpinnerState] = useState(false)
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
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.dark("Hello")
  }

  const useCreateUserWithEmailAndPassword = async (email: string, password: string): Promise<userSignUpResponseModel | undefined> => {
    try {
      setSpinnerState(true)
      userCredential = await createUserWithEmailAndPassword(auth, email, password); 
      setSpinnerState(false)
    } 
    catch (error: any) {
      setSpinnerState(false)
      toast.error(error.message);
    }

    return userCredential
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let userName: string | null = formData.get('userName') as string | null;
    let email: string | null = formData.get('email') as string | null;
    let password: string | null = formData.get('password') as string | null;

    if (!userName ||!email ||!password) {
      console.error('Missing required field(s)');
      return;
    }

    const signUpData: signUp = {
      userName: userName!,
      email: email!,
      password: password!
    };

    useCreateUserWithEmailAndPassword(signUpData.email, signUpData.password)
  }

  return (
    <div className="login w-full h-full flex items-center gap-[100px] relative">
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

            <form onSubmit={handleRegister} action="" className="w-[70%] flex flex-col items-center justify-center gap-5">
                
                <div className="profile-image w-full flex items-center gap-[12px]">
                    <label htmlFor="file" className="cursor-pointer">
                        <img src={avatar.url || "./user.png"} alt="" className="bg-white rounded-[10px] w-12 h-12 object-cover opacity-60"/>
                    </label>

                    <button type="button" onClick={() => document?.getElementById('file')?.click()} className="bg-[#3e71e7ce] hover:bg-[#4a69b2de] px-5 py-2.5 
                     rounded-[10px] text-[14px]">Upload Image</button>
                </div>

                <input type="file" id="file" className="hidden" onChange={handleAvatar}/>

                <input type="text" placeholder="Username" name="userName" className="px-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <input type="text" placeholder="Email" name="email" className="px-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <input type="password" placeholder="Password" name="password" className="px-5 py-4 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"/>

                <button className="w-full px-5 py-2.5 text-[14px] border-none bg-[#1f8ef1] text-white rounded-[5px]">Sign Up</button>
            </form>
        </div>

        { spinnerVisible &&<ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper loader"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
    </div>
  )
}

export default Login