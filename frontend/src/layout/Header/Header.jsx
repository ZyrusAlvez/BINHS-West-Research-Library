import Title from "./Title"

const Header = () => {
  return (
    <div>
      <div className="h-[120px] w-full fixed bg-white opacity-50 rounded-b-lg"></div>
      <div className='h-[120px] w-full fixed'>
        <Title />
      </div>
    </div>

  )
}

export default Header