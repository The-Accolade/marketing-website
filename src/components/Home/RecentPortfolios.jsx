import Slider from "react-slick";
import {recentPortfolios} from "../../helpers/AboutUsDetails"
// console.log(recentPortfolios);'

const RecentPortfolios = () => {
    const settings = {  
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

  return (
    <section className="py-[70px]">
        <div className="px-[200px]">
            <h3 className="uppercase text-primary font-semibold">projects</h3>
            <div className="flex justify-between items-center py-5">
                <h4 className="font-bricolage font-semibold text-[36px]">Recent Portfolios</h4>
                <button className="py-[10px] px-[20px] bg-shadeTwo text-whiteShade text-sm font-semibold transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-primary">View Projects</button>
            </div>
        </div>
        <div className="px-[100px] pt-[50px] h-[400px]">
            <Slider {...settings} className="h-full flex gap-5">
                {
                    recentPortfolios.map((item, index) => (
                        <div key={index} className='relative h-[300px] w-[250px] overflow-hidden cursor-pointer group'>
                            <div className="absolute z-10 h-full w-full bg-black group-hover:bg-primary group-hover:bg-opacity-80 bg-opacity-50 transition-all duration-500 ease-in-out"></div>
                            <img className="absolute z-0 h-full min-w-full group-hover:scale-110 transition-all duration-1000 ease-in-out" src={item.image} />
                            <div className="z-20 absolute text-whiteShade bottom-[10px] left-[10px]">
                                <p className="font-medium text-[12px]">{item.category}</p>
                                <h5 className="font-bricolage font-semibold">{item.label}</h5>
                                <p className="text-[14px] font-light h-0 overflow-hidden group-hover:h-[140px] transition-all duration-500 ease-in-out">{item.paragraph}</p>
                                <button className="bg-none text-primary text-[12px] font-medium bg-whiteShade py-[5px] px-[10px] rounded-sm">View Portfolio</button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </section>
  )
}

export default RecentPortfolios
