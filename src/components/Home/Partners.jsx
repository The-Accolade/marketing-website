import {
	faAlgolia,
	faGithub,
	faGoogle,
	faIntercom,
	faSlack,
	faUsps,
	faWix,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

const Partners = () => {
	const settings = {
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "200px",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	};

	return (
		<Slider
			{...settings}
			className="w-full flex justify-between  py-[50px] h-[30vh] max-md:h-full"
		>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faAlgolia}
			/>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faSlack}
			/>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faGoogle}
			/>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faGithub}
			/>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faIntercom}
			/>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faWix}
			/>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faUsps}
			/>
			<FontAwesomeIcon
				className="h-[35px] text-blackShade bg-shadeOne opacity-80 py-5"
				icon={faUsps}
			/>
		</Slider>
	);
};

export default Partners;
