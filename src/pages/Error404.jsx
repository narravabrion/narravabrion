import React from "react"
import { Link } from "react-router-dom"

const Error404 = () => {
	return (
		<main className='h-screen w-full bg-black flex items-center justify-center'>
			<section className='rounded bg-dark w-11/12 max-w-2xl h-44 flex flex-col items-center justify-center py-4'>
				<h1 className='text-7xl font-mono font-bold'>404</h1>
				<p className='text-green-500 my-4 font-mono'>
					maybe start from home again?
				</p>
				<Link
					to='/'
					className='font-semibold text-xl underline hover:text-green-500'
				>
					Home
				</Link>
			</section>
		</main>
	)
}

export default Error404
