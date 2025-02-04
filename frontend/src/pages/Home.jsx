import Background from "../layout/Background"
import Header from "../layout/Header/Header"
import Calendar from "../componets/Calendar/Calendar"

const Home = () => {
  return (
    <div className="h-screen">
      <Background opacity={false}/>
      <Header opacity={true}/>
      <div className="h-full flex justify-end mr-4 items-end pb-20">
        <Calendar />
      </div>
    </div>
  )
} 

export default Home