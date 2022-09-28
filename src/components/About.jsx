import React from "react"
import { motion } from "framer-motion"

const titleVariants = {
	hidden: { opacity: 0, x: "-100vw" },
	visible: { opacity: 1, x: 0, transition: { duration: 2.5 } },
}
const pVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 5 },
	},
}
const articleVariants = {
	hidden: { opacity: 0, y: "100vh" },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 2, type: "spring", bounce: 0.5 },
	},
}

const About = () => {
	return (
		<>
			<motion.section
				initial={"hidden"}
				whileInView={"visible"}
				viewport={{ once: false, amount: 0.5 }}
				transition={{ staggerChildren: 0.5 }}
				id='about'
				className='w-100 h-screen snap-start bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1554876194-024e06bbc3cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] '
			>
				<div className='w-full h-full px-4 flex items-center justify-center bg-black/30 relative'>
					<div className='absolute top-0 bottom-0 z-10 left-0 right-0 bg-black/50'></div>
					<motion.article
						variants={articleVariants}
						className='text-white bg-dark rounded-sm p-4 max-w-3xl relative'
					>
						<motion.h3
							variants={titleVariants}
							className='absolute -top-28 -left-2 font-extrabold text-5xl'
						>
							About
						</motion.h3>
						<motion.p variants={pVariants} className='-z-10 font-mono'>
							Hi! I'm Brion, former C.E.O of a lemonade stand. I like to explore
							and develop technological solutions, both in software and
							hardware. I'm a full-stack developer utilising tools like
							react.js, express, django to bring ideas to life. I'm also an
							electronics and data science enthusist.
						</motion.p>
					</motion.article>
				</div>
			</motion.section>
		</>
	)
}

export default About
