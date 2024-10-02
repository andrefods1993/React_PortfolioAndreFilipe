import { CustomCarousel } from "./styles";
import ServiceCard from "../ServiceCard";
import serviceData from "../../assets/data/serviceData";

const CarouselCustom = () => {
	const settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		infinite: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<CustomCarousel {...settings}>
			{serviceData.map((service, index) => (
				<ServiceCard
					key={index}
					icon={service.icon}
					title={service.title}
					description={service.description}
				/>
			))}
		</CustomCarousel>
	);
};

export default CarouselCustom;
