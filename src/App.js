import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Error404Page, HomePage, ProjectsPage} from "./pages"

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					{/* <Route path='/story' element={<StoryPage />} /> */}
					<Route path='*' element={<Error404Page />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
