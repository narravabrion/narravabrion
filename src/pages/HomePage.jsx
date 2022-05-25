import React from "react"
import { Brand, Landing, Navbar, Sidebar, Skills } from "../components"
import { useMenuContext } from "../context/MenuContextProvider"

const HomePage = () => {
	const {menu} = useMenuContext()
	return (
		<>
			<div className=' w-full h-full bg-center bg-cover bg-no-repeat shadow-lg rounded-md max-w-4xl md:max-h-96 overflow-hidden  bg-[url("https://res.cloudinary.com/codex-llc/image/upload/v1653385948/narravabrion-portfolio/bg-4_nuzkhb.jpg")] '>
				<div className='w-full h-full bg-black/40 relative flex flex-col'>
					{menu && <Navbar/>}
					<Brand />
					<Landing />
					<Skills />
					<div className='absolute top-0 right-0 h-full '>
						<Sidebar />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
