import { AnimatePresence } from "framer-motion"
import { lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Loader from "./components/Loader"

const Home = lazy(() => import("./pages/Home"))
const Error404 = lazy(() => import("./pages/Error404"))
const Navbar = lazy(() => import("./layouts/Navbar"))

function App() {
	const location = useLocation()
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Navbar />
				<AnimatePresence mode='wait'>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</AnimatePresence>
			</Suspense>
		</>
	)
}

export default App
