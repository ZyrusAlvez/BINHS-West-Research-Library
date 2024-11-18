import Title from "./Title"
import Navigation from "./Navigation"
import Search from "./Search"

const Header = () => {
  return (
    <div>
      <div className="h-[120px] w-full fixed bg-white opacity-50 rounded-b-lg"></div>
      <div className='h-[120px] w-full fixed flex items-center justify-between pl-4'>
        <Title />
        <div className="h-full flex flex-col justify-between">
          <Navigation />
          <Search />
        </div>
      </div>
    </div>

  )
}

export default Header