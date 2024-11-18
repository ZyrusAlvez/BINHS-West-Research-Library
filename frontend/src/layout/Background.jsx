import background from "../assets/background.png"

const Background = () => {
  return (
    <div>
      <img src={background} className="w-full h-screen absolute"></img>
    </div>
  )
}

export default Background