import { faAlgolia, faGithub, faGoogle, faIntercom, faSlack, faUsps, faWix } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";



const Partners = () => {

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <Slider {...settings} className="w-full flex justify-between bg-shadeOne py-[30px]">
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faAlgolia} />
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faSlack}/>
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faGoogle}/>
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faGithub}/>
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faIntercom}/>
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faWix}/>
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faUsps}/>
      <FontAwesomeIcon className='h-[30px] text-blackShade' icon={faUsps}/>
    </Slider>
  );
}

export default Partners;
