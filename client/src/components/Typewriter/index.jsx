import { useState, useEffect } from "react";

const Typewriter = ({
	words,
	typingSpeed = 100,
	delayBetweenWords = 1000,
	eraseEffect = "full",
}) => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isTyping, setIsTyping] = useState(true);
	const [isErasing, setIsErasing] = useState(false);

	useEffect(() => {
		let timeout;

		if (isTyping) {
			const currentWord = words[currentWordIndex];
			timeout = setTimeout(() => {
				setCurrentText(currentWord.slice(0, currentText.length + 1));
			}, typingSpeed);

			if (currentText === currentWord) {
				setIsTyping(false);
				setIsErasing(true);
			}
		} else if (isErasing) {
			const currentWord = words[currentWordIndex];

			if (eraseEffect === "full") {
				timeout = setTimeout(() => {
					setCurrentText("");
					setIsErasing(false);
					setIsTyping(false);
				}, delayBetweenWords);
			} else if (eraseEffect === "reverse") {
				timeout = setTimeout(() => {
					setCurrentText(
						currentWord.slice(0, currentText.length - 1)
					);
				}, typingSpeed / 2);

				if (currentText.length === 0) {
					setIsErasing(false);
					setIsTyping(false);
				}
			}
		} else {
			timeout = setTimeout(() => {
				setIsTyping(true);
				setCurrentWordIndex(
					(prevIndex) => (prevIndex + 1) % words.length
				);
			}, delayBetweenWords);
		}

		return () => clearTimeout(timeout);
	}, [
		currentText,
		isTyping,
		isErasing,
		currentWordIndex,
		words,
		typingSpeed,
		delayBetweenWords,
		eraseEffect,
	]);

	return <span style={{ display: "inline" }}>{currentText}|</span>;
};

export default Typewriter;
