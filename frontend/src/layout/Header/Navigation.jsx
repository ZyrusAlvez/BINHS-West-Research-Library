import React from 'react'
import {useNavigate} from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className='flex text-white font-bold text-xl bg-c_blue gap-4 p-4 rounded-bl-2xl'>
      <h1 className="hover:text-c_orange cursor-pointer" onClick={() => navigate("/")}>Home</h1>
      <h1 className="hover:text-c_orange cursor-pointer" onClick={() => navigate("/announcement")}>Announcement</h1>
      <h1 className="hover:text-c_orange cursor-pointer" onClick={() => navigate("/news")}>News</h1>
      <h1 className="hover:text-c_orange cursor-pointer" onClick={() => navigate("/research")}>Research</h1>
      <h1 className="hover:text-c_orange cursor-pointer" onClick={() => navigate("/academics")}>Academics</h1>
      <h1 className="hover:text-c_orange cursor-pointer" onClick={() => navigate("/about")}>About</h1>
    </div>
  )
}

export default Navigation