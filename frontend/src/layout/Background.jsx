import background from "../assets/background.png"

const Background = () => {
  return ( 
    <div className="w-full h-screen -z-50 absolute">
      <img src={background} className="w-full h-full"></img>
    </div>
  )
}

export default Background