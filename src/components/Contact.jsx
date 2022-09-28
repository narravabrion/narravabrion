import React from "react"
import Socials from "./Socials"
import { motion } from "framer-motion"

const Contact = () => {
	const titleVariants = {
		hidden: { opacity: 0, x: "-100vw" },
		visible: { opacity: 1, x: 0, transition: { duration: 2.5 } },
	}

	const articleVariants = {
		hidden: { opacity: 0, y: "100vh" },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 2, type: "spring", bounce: 0.5 },
		},
	}
	const tagVariants = {
		hidden: { opacity: 0, y: "100vh" },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 2 },
		},
	}
	return (
		<>
			<motion.section
				initial='hidden'
				whileInView='visible'
				transition={{ staggerChildren: 0.3 }}
				viewport={{ once: false, amount: 0.5 }}
				id='contact'
				className='w-full h-screen snap-start bg-black flex items-center justify-center relative'
			>
				<motion.article
					variants={articleVariants}
					className='rounded shadow bg-dark w-11/12 max-w-2xl h-44 flex flex-col items-center justify-center relative '
				>
					<motion.h3
						variants={titleVariants}
						className='absolute -top-24 -left-3 font-extrabold text-5xl text-green-500'
					>
						Reach Out!
					</motion.h3>
					<Socials />
					<motion.a
						variants={tagVariants}
						href='mailto: kidbrion7@gmail.com'
						className='rounded-b p-1 w-full text-center text-gray-300 font-semibold font-mono text-lg bg-black/50 absolute bottom-0 hover:text-green-500'
					>
						Send Email
					</motion.a>
				</motion.article>
				<div className='text-white/50 p-2 w-11/12 absolute left-0 right-0 bottom-0 m-auto text-center border-t border-t-gray-800'>
					<p>&copy; {new Date().getFullYear()} | Br!on</p>
				</div>
			</motion.section>
		</>
	)
}

export default Contact
