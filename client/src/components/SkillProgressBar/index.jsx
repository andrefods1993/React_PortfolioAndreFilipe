import { useEffect, useState } from "react";
import { Progress } from "antd";
import { useInView } from "react-intersection-observer";
import { ProgressWrapper, IconContainer } from "./styles";
import { DiReact } from "react-icons/di";

const SkillsProgressBar = ({ value, icon = <DiReact /> }) => {
	const [currentValue, setCurrentValue] = useState(0);
	const { ref, inView, entry } = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	useEffect(() => {
		let interval;

		if (inView) {
			setCurrentValue(0);
			interval = setInterval(() => {
				setCurrentValue((prev) => {
					if (prev >= value) {
						clearInterval(interval);
						return value;
					}
					return prev + 1;
				});
			}, 10);
		} else if (entry) {
			setCurrentValue(0);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [inView, value, entry]);

	return (
		<ProgressWrapper ref={ref}>
			<IconContainer>{icon}</IconContainer>
			<Progress percent={currentValue} status="active" />
		</ProgressWrapper>
	);
};

export default SkillsProgressBar;
