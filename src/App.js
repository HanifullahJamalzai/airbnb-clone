import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./style.css";
import Card from "./components/Card";
import data from "./data";

function App() {
	const cards = data.map((item) => <Card key={item.id} {...item} />);
	{
		/* <Hero /> */
	}
	return (
		<div>
			<Navbar />
			<section className="cards-list">{cards}</section>
		</div>
	);
}

export default App;
