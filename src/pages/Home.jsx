import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Landing from "../components/Landing"
import Projects from "../components/Projects"

const Home = () => {
	return (
		<>
			<main className='snap-y snap-mandatory overflow-y-scroll h-screen'>
				<Landing />
				<About />
				<Projects />
				<Contact />
			</main>
		</>
	)
}

export default Home
