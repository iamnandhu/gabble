import { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList flex-[1] flex flex-col overflow-scroll">
      <div className="search flex items-center gap-[20px] p-[20px]">
        <div className="searchBar flex items-center gap-[20px] p-2.5 flex-[1] bg-[rgba(17,25,40,0.5)] rounded-[10px]">
          <span className="material-symbols-outlined text-[18px] cursor-pointer">
            search
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-white flex-1"
          />
        </div>

        <span
          className="material-symbols-outlined text-[18px] bg-[rgba(17,25,40,0.5)] p-2.5 rounded-[10px] cursor-pointer"
          onClick={() => setAddMode((prev) => !prev)}
        >
          {addMode ? "remove" : "add"}
        </span>
      </div>

      <div className="item-container flex-[1] overflow-scroll">
        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./user.png" alt="" className="w-[25px] h-[25px]" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
      </div>

      {addMode && <AddUser/>}
    </div>
  );
};

export default ChatList;
