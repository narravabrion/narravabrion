import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { useMenuContext } from "../context/MenuContextProvider"

const Navbar = () => {
	const { handleMenu } = useMenuContext()
	return (
		<>
			<nav className='flex items-center justify-center  w-full h-full absolute inset-0 z-10  bg-gray-700'>
				<div className='flex flex-col items-center justify-between  w-full h-full relative p-2'>
					<div className='absolute top-0 right-0 text-white bg-gray-600 hover:text-green-700  cursor-pointer'>
						<AiOutlineClose size={25} onClick={handleMenu} />
					</div>
					<div>
						<h1 className='text-white font-bold text-xl'>
							Br<span className='text-2xl text-green-700'>!</span>on
						</h1>
					</div>
					<ul className='flex flex-col items-center justify-between text-white'>
						<li className=' p-1'>
							<Link
								className='hover:text-green-800'
								to='/'
								onClick={handleMenu}
							>
								Home
							</Link>
						</li>
						<li className='p-1'>
							<Link
								className='hover:text-green-800'
								to='/projects'
								onClick={handleMenu}
							>
								projects
							</Link>
						</li>
						<li className='p-1'>
							<a
								className='hover:text-green-800'
								target={"blank"}
								href='https://narravabrion.hashnode.dev/'
								onClick={handleMenu}
							>
								blog
							</a>
						</li>
						{/* <li className='p-1'>
							<Link
								className='hover:text-green-800'
								to='story'
								onClick={handleMenu}
							>
								story
							</Link>
						</li> */}
					</ul>
					<p className='text-xs w-full border-t flex items-center justify-center pt-1 border-t-gray-500 text-gray-400'>
						{new Date().getFullYear()}
					</p>
				</div>
			</nav>
		</>
	)
}

export default Navbar
