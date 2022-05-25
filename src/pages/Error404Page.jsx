import React from "react"
import { Link } from "react-router-dom"

const Error404Page = () => {
	return (
		<>
			<div className=' w-full h-full bg-center bg-cover bg-no-repeat shadow-lg rounded-md max-w-4xl md:max-h-96 overflow-hidden  bg-[url("https://res.cloudinary.com/codex-llc/image/upload/v1653468633/narravabrion-portfolio/error-404_agietg.gif")] '>
				<div className='w-full h-full bg-black/80 relative flex flex-col items-center justify-center text-white p-2 '>
					<h1 className="font-bold text-3xl animate-bounce text-green-500">ERROR 404!</h1>
					<h3 className="font-semibold text-center py-2">Can't seem to pull this page from anywhere...</h3>
					<h1 className="font-semibold text-gray-400">
						Back{" "}
						<Link to='/' className='bg-green-500 text-black rounded px-2 text-lg font-semibold animate-pulse'>
							HOME
						</Link>{" "}
						maybe?
					</h1>
				</div>
			</div>
		</>
	)
}

export default Error404Page
