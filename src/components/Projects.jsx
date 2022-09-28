import React from "react"
import ProjectDisplay from "./ProjectDisplay"
import { motion } from "framer-motion"

const Projects = () => {
	const titleVariants = {
		hidden: { opacity: 0, x: "-100vw" },
		visible: { opacity: 1, x: 0, transition: { duration: 2.5 } },
	}
	const contVariants = {
		hidden: { opacity: 0, y: "100vh" },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 2, type: "spring", bounce: 0.3 },
		},
	}

	return (
		<>
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
				transition={{ staggerChildren: 0.5 }}
				id='projects'
				className="w-full h-screen snap-start bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')]"
			>
				<div className='w-full h-full text-white px-4 bg-black/50 md:bg-black/80 flex items-center justify-center relative'>
					<motion.h3
						variants={titleVariants}
						className='font-extrabold text-5xl absolute top-1/4 left-2 md:left-1/4  mix-blend-color-dodge'
					>
						Projects
					</motion.h3>
					{/* display all projects */}
					<motion.div
						variants={contVariants}
						className='w-11/12 max-w-3xl h-48 bg-dark absolute left-0 right-0 m-auto top-0 bottom-0 rounded-sm '
					>
						<ProjectDisplay />
					</motion.div>
				</div>
			</motion.section>
		</>
	)
}

export default Projects
