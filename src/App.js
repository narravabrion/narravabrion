import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Story from "./pages/Story"
import Error404 from "./pages/Error404"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/'  element={<Home/>}/>
					<Route path='/Projects' element={<Projects/>}/>
					<Route path='/Blog'>Blog</Route>
					<Route path='/story' element={<Story/>}/>	
					<Route path='/*' element={<Error404/>}/>	
				</Routes>
				<Footer/>
			</Router>
		</>
	)
}

export default App
