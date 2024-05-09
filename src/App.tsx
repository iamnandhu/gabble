import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Details from "./components/details/Details"

const App = () => {
  return (
    <div className='container flex w-[90vw] h-[90vh] bg-[rgba(192,190,186,0.16)] rounded-[12px]'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App