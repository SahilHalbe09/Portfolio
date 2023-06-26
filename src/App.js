import "./App.css";
import Slidebar from "./components/Slidebar/Slidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";

function App() {
	return (
		<>
			<Slidebar />
			<main className="main">
				<Home />
				<About />
				<Skills />
				<Courses />
				<Portfolio />
				<Resume />
				<Contact />
			</main>
		</>
	);
}

export default App;
