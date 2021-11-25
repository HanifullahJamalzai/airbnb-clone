import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./style.css";
import Card from "./components/Card";

function App() {
	{
		/* <Hero /> */
	}
	return (
		<div>
			<Navbar />
			<Card
				img="katie-zaferes.png"
				rating="5.0"
				reviewCount="6"
				country="Afghanistan"
				title="Life Lessons with Katie Zaferes"
				price="136"
			/>
		</div>
	);
}

export default App;
