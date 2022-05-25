import React from "react"
import { Brand, Navbar, Projects, Sidebar, Skills } from "../components"
import { useMenuContext } from "../context/MenuContextProvider"

const ProjectsPage = () => {
	const {menu} = useMenuContext()
	return (
		<>
			<div className=' w-full h-full bg-center bg-cover bg-no-repeat shadow-lg rounded-md max-w-4xl md:max-h-96 overflow-hidden  bg-[url("https://res.cloudinary.com/codex-llc/image/upload/v1653385946/narravabrion-portfolio/bg-5_vy7irn.jpg")] '>
				<div className='w-full h-full bg-black/40 relative flex flex-col'>
					{menu && <Navbar/>}
					<Brand />
					<Projects/>
					<Skills />
					<div className='absolute top-0 right-0 h-full '>
						<Sidebar />
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectsPage
