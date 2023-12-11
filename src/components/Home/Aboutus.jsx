import {AboutUsDetails} from "../../helpers/AboutUsDetails";
import Accordion from "../Accordion";
const Aboutus = () => {
  return (
		<section className="h-[800px] py-[100px] px-[70px] bg-whiteShade flex items-center justify-between max-lg:gap-4 max-md:flex-col-reverse relative overflow-hidden font-poppins">
			<div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] max-md:h-[400px] max-md:w-[400px] rounded-full bg-primary z-10"></div>
			<div className="w-2/4 relative max-md:w-full max-md:opacity-0">
				<div className="bg-primary h-[150px] w-[100px] max-md:h-[100px] max-md:w-[50px] absolute -top-[15px] left-28 -z-0"></div>
				<div className="bg-primary h-[150px] w-[100px] max-md:h-[100px] max-md:w-[50px] absolute -bottom-[15px] right-28"></div>
				<div className="border-[40px] border-primary h-[145px] w-[85px] absolute right-24 -rotate-45 -top-14 rounded-tl-full rounded-bl-full border-r-0"></div>
				<img
					className="h-[450px] max-md:opacity-0 max-md:h-[20px] mx-auto relative shadow-md border border-secondary border-opacity-30"
					src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D"
					alt="Photo by Muhammad Faiz Zulkeflee on Unsplash"
				/>
			</div>
			<div className="w-2/4 relative bg-whiteShade h-full overflow-hidden max-md:w-full">
				<h3 className="font-bold uppercase text-primary">About Us</h3>
				<h4 className="font-black text-[32px] leading-9 font-bricolage">
					We craft bespoke business templates to suit your business needs
				</h4>
				<p className="py-5 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
					eget mi proin sed libero enim. Tortor condimentum lacinia quis vel
					eros donec.
				</p>
				<Accordion details={AboutUsDetails} />
			</div>
		</section>
	);
}

export default Aboutus
