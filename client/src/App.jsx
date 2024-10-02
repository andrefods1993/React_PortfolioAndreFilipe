import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import ThemeToggleButton from "./components/ThemeToggleButton";
import LoadingSpinner from "./components/LoadingSpinner";
import "aos/dist/aos.css";

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div>
			{loading ? (
				<LoadingSpinner />
			) : (
				<BrowserRouter>
					<Navbar />
					<ThemeToggleButton />
					<AppRoutes />
					<Footer />
				</BrowserRouter>
			)}
		</div>
	);
};

export default App;
