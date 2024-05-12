import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"

const App = () => {

  const user = false

  return (
    <div className='container flex w-[90vw] h-[90vh] bg-[rgba(192,190,186,0.16)] rounded-[12px]'>
      {
        user ? (
          <>
            <List/>
            <Chat/>
            <Details/>
          </>
        ) : (
          <Login/>
        )
      }
      <Notification/>
    </div>
  )
}

export default App