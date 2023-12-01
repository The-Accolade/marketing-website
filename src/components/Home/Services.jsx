import { faBullseye, faBusinessTime, faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
  return (
    <section className="py-[100px] px-[70px]">
        <h2 className="text-center uppercase font-bold text-primary text-[18px] font-poppins">Our Services</h2>
        <h3 className="text-secondary font-bricolage text-center font-bold text-[32px] w-3/5 mx-auto leading-9 mt-5">We have remained in the world&apos;s top 1% Marketing Agencies</h3>
        <p className="text-secondary text-center py-5 font-medium text-[20px] font-bricolage">and here&apos;s why:</p>
        <div className="flex gap-5 mx-auto w-4/5 mt-5">
            <div className="home-cards bg-primary">
                <FontAwesomeIcon className='icons text-whiteShade' icon={faPersonDigging} />
                <h4 className=' text-whiteShade'>Training Services</h4>
                <p className=' text-whiteShade'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim. Tortor condimentum lacinia quis vel eros donec.</p>
            </div>
            <div className="home-cards">
                <FontAwesomeIcon className='icons text-primary' icon={faBusinessTime} />
                <h4 className='text-primary'>Consultancy</h4>
                <p className='text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim. Tortor condimentum lacinia quis vel eros donec.</p>
            </div>
            <div className="home-cards bg-primary">
                <FontAwesomeIcon className='icons text-whiteShade' icon={faBullseye} />
                <h4 className='text-whiteShade'>Professionalism</h4>
                <p className='text-whiteShade'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim. Tortor condimentum lacinia quis vel eros donec.</p>
            </div>
        </div>
    </section>
  )
}

export default Services
