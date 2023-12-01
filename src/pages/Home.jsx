import Nav from '../components/Nav'
import Hero from '../components/Home/Hero'
// import Partners from '../components/Home/Partners'
import Services from '../components/Home/Services'
import Aboutus from '../components/Home/Aboutus'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import RecentPortfolios from '../components/Home/RecentPortfolios'

const Home = () => {
  return (
    <div className=''>
        <Nav />
        <Hero />
        <Services />
        <Aboutus />
        <RecentPortfolios />
        <WhyChooseUs />
        {/*<Partners />*/}
    </div>
  )
}

export default Home