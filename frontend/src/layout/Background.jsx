import background from "../assets/background.png"

const Background = ({opacity}) => {
  return ( 
    <div className="w-full h-screen -z-50 absolute flex flex-col">
      <div className="h-[120px]"></div>
      <div className="bg-opacity-50"></div>
      <img src={background} className="w-full h-full"></img>
    </div>
  )
}

export default Background