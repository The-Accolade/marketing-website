import Logo from '../assets/logo-ex.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='absolute top-0 left-0 z-10 h-[70px] w-full overflow-hidden'>
      <div className='w-full h-full flex justify-between items-center '>
        <div className='w-[200px] hover:cursor-pointer hover:shadow-lg hover:opacity-90 hover:scale-95 transition-all duration-300 ease-linear'>
            <Link to='/'>
                <img className='w-[100px] lg:w-[200px]' src={Logo} alt='Logo' />
            </Link>
        </div>
        <div className='lg:mr-[50px] mr-[20px]'>
            <Link to='/login' className='bg-whiteShade  px-[10px] lg:px-[30px] py-[8px] text-[12px] lg:text-[14px] lg:rounded-lg rounded-md uppercase font-semibold text-secondary hover:shadow-lg hover:bg-primary hover:text-whiteShade transition-all duration-300 ease-in-out'>Log in</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
