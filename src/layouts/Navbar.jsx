import React, { useState } from "react"
import { motion } from "framer-motion"
import {
	AiOutlineClose,
	AiOutlineHome,
	AiOutlineMenu,
	AiOutlineProject,
	AiOutlinePhone,
} from "react-icons/ai"
import { SiAboutdotme, SiHashnode } from "react-icons/si"

const Navbar = () => {
	const [open, setOpen] = useState(false)

	const variants = {
		open: {
			opacity: 1,
			x: 0,
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			opacity: 0,
			x: "-100%",
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	}

	const tagVariants = {
		open: {
		  y: 0,
		  opacity: 1,
		  transition: {
			y: { stiffness: 1000, velocity: -100 }
		  }
		},
		closed: {
		  y: 50,
		  opacity: 0,
		  transition: {
			y: { stiffness: 1000 }
		  }
		}
	  };

	const handleOpen = () => {
		setOpen(!open)
	}
	return (
		<>
			<nav className='fixed top-0 right-0 left-0 z-20 flex items-center justify-center'>
				<div className='w-full h-full max-w-7xl '>
					<button
						className='border rounded-full p-2 m-2 font-bold cursor-pointer text-white outline-none shadow-md'
						onClick={handleOpen}
					>
						{open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
					</button>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={variants}
						transition={{ staggerChildren: 0.5 }}
						className={`opacity-100 mt-4 transition-all duration-500 ease-in absolute bg-dark rounded pl-3 pt-2 shadow h-[90vh] w-1/2 sm:pl-1 sm:pt-0 sm:w-auto sm:bg-transparent `}
					>
						<motion.a
							variants={tagVariants}
							href='#landing'
							className='flex items-center my-2'
							onClick={handleOpen}
						>
							<AiOutlineHome
								size={20}
								className=' border shadow-md text-white  rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10 transition-all duration-150 ease-in hover:scale-105 hover:text-green-500 '
							/>
							<span className='bg-dark text-white border border-dark/50 rounded ml-3 h-8 py-1 px-2'>
								Home
							</span>{" "}
						</motion.a>
						<motion.a
							variants={tagVariants}
							href='#about'
							className='flex items-center my-2'
							onClick={handleOpen}
						>
							<SiAboutdotme
								size={20}
								className=' border shadow-md text-white  rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10 transition-all duration-150 ease-in hover:scale-105 hover:text-green-500 '
							/>
							<span className='bg-dark text-white border border-dark/50 rounded ml-3 h-8 py-1 px-2'>
								{" "}
								About
							</span>
						</motion.a>
						<motion.a
							variants={tagVariants}
							href='#projects'
							className='flex items-center my-2'
							onClick={handleOpen}
						>
							<AiOutlineProject
								size={20}
								className=' border shadow-md text-white  rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10 transition-all duration-150 ease-in hover:scale-105 hover:text-green-500 '
							/>
							<span className='bg-dark text-white border border-dark/50 rounded ml-3 h-8 py-1 px-2'>
								{" "}
								Projects
							</span>
						</motion.a>
						<motion.a
							variants={tagVariants}
							href='https://narravabrion.hashnode.dev/'
							target='_blank'
							rel='noreferrer'
							className='flex items-center my-2'
							onClick={handleOpen}
						>
							<SiHashnode
								size={20}
								className=' border shadow-md text-white  rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10 transition-all duration-150 ease-in hover:scale-105 hover:text-green-500 '
							/>
							<span className='bg-dark text-white border border-dark/50 rounded ml-3 h-8 py-1 px-2'>
								{" "}
								Blog
							</span>
						</motion.a>
						<motion.a
							variants={tagVariants}
							href='#contact'
							className='flex items-center my-2'
							onClick={handleOpen}
						>
							<AiOutlinePhone
								size={20}
								className=' border shadow-md text-white   rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10 transition-all duration-150 ease-in hover:scale-105 hover:text-green-500 '
							/>{" "}
							<span className='bg-dark text-white border border-dark/50 rounded ml-3 h-8 py-1 px-2'>
								Contact
							</span>
						</motion.a>
					</motion.div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
