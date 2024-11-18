import logo from "../../assets/logo.png"

const Title = () => {
  return (
    <div className="flex items-center h-full">
      <img src={logo} alt="Westerne Logo" className="w-20"/>
      <div className="text-xl font-extrabold tracking-wider font-garet">
        <h1 className="text-c_orange text-shadow-blue">BINAN CITY SENIOR HIGH</h1>
        <h1 className="text-c_blue">SCHOOL - WEST CAMPUS</h1>
      </div>
    </div>
  )
}

export default Title