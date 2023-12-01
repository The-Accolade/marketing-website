//16px - 32 - 48 - 56 => 48 - 40, 32, 24
import {useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
    const element = useRef(null);

    useEffect(() => {
        const typed = new Typed(element.current, {
          strings: ['connect your products to prospective users.', 'have amazing communities in over 200 countries!', 'have affordable plans just for you.'],
          typeSpeed: 50,
          loop: true
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);


  return (
    <section className='h-screen w-full bg-[url("src/assets/hero-bg.jpg")] bg-cover bg-no-repeat relative'>
        <div className='absolute bg-gradient-to-r from-blackShade to-blackShade opacity-80 h-full w-full -z-0'>          
        </div>
        <div className='text-white cursor-pointer h-full w-full absolute py-[200px] px-[20px] text-center'>
            <p className='text-primary uppercase font-medium lg:font-semibold text-[12px] lg:text-[24px]'>Welcome to the</p>
            <h1 className='text-white text-[18px] lg:text-[48px] font-medium lg:font-semibold font-bricolage uppercase py-[10px]'>Top #1 Marketing Agency in the world</h1>
            <p className='font-semibold text-[12px] lg:text-[24px]'>We <span ref={element}></span></p>
        </div>
    </section>
  )
}

export default Hero
