import Title from "./Title"
import Navigation from "./Navigation"
import Search from "./Search"

const Header = () => {
  return (
    <div>
      <div className="w-full fixed h-[120px]"></div>
      <div className="w-full fixed flex items-center justify-between pl-4 h-[120px]">
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