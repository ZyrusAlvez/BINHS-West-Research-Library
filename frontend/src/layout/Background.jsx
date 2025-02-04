import background from "../assets/background.png"

const Background = ({opacity}) => {
  return ( 
    <div className="w-full h-screen -z-50 absolute flex flex-col bg-[url(assets/background.png)]">
      <div className={`h-[140px] ${opacity ? "" : "bg-white opacity-50"}`}></div>
      <div className={`${opacity ? "bg-white opacity-50" : ""} h-full`}></div>
    </div>
  )
}

export default Background