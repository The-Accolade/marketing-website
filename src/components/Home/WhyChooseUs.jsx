import ProgressBar from "@ramonak/react-progress-bar";

const WhyChooseUs = () => {
  return (
    <section className='py-[100px] px-[200px] bg-whiteShade flex items-center  justify-between'>
        <div>
            <iframe className="h-[300px]" src="https://www.youtube.com/embed/XZ5NaZ2Ucdo?si=-N-pcfHuurcMQ9rs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="w-2/4">
            <h4 className="text-primary font-semibold text-[14px] uppercase">Why choose us</h4>
            <h3 className="text-blackShade font-bold font-bricolage text-[32px] leading-9">A right choice that makes the difference to others</h3>
            <p className="py-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim. Tortor condimentum lacinia quis vel eros donec.</p>
            <div>
                <h5>Business Planning</h5>
                <ProgressBar 
                    className="wrapper"
                    barContainerClassName="container"
                    completedClassName="barCompleted"
                    labelClassName="label"
                    transitionDuration="1s"
                    transitionTimingFunction="linear" 
                    completed="60" />
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
