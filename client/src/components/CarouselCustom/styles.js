import { Carousel } from "antd";
import styled from "styled-components";

export const CustomCarousel = styled(Carousel)`
	.slick-prev::after,
	.slick-next::after {
		width: 30px !important;
		height: 30px !important;
		color: ${({ theme }) => theme.colors.primary.main} !important;

		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 50px !important;
			height: 50px !important;
		}
	}

	.slick-prev {
		left: -10px;
	}

	.slick-next {
		right: -10px;
	}

	.slick-prev:hover,
	.slick-next:hover {
		color: ${({ theme }) => theme.colors.primary.dark};
	}

	.slick-slide {
		height: 450px;
		padding: 2rem;
	}
`;
