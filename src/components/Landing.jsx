import React from "react"
import { motion } from "framer-motion"

const Landing = () => {
	const nameVariants = {
		hidden: { opacity: 0, x: "-100vw" },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 2.5, type: "spring", bounce: 0.4 },
		},
	}
	const titleVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,

			transition: { duration: 4 },
		},
	}
	const tagVariants_cv = {
		hidden: { opacity: 0, x: "-100vw" },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 2 },
		},
	}
	const tagVariants_cont = {
		hidden: { opacity: 0, x: "100vw" },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 2 },
		},
	}

	return (
		<>
			<motion.section
				initial='hidden'
				animate='visible'
				viewport={{ once: false, amount: 0.5 }}
				transition={{ staggerChildren: 0.5 }}
				id='landing'
				className="w-100 h-screen snap-start bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]"
			>
				<div className='w-full h-full bg-black/50 flex items-center justify-center relative'>
					<article className='text-white'>
						<motion.h1
							variants={nameVariants}
							className='font-extrabold text-5xl w-full'
						>
							George Brion
						</motion.h1>
						<div className='border-t flex mx-20 mt-4 mb-1'></div>
						<motion.h3
							variants={titleVariants}
							className='w-full text-center font-medium font-mono text-lg'
						>
							Software engineer
						</motion.h3>
						{/* group buttons */}

						<div className='border mt-6 flex mx-7 rounded overflow-hidden'>
							<motion.a
								variants={tagVariants_cv}
								href='https://rxresu.me/kidbrion7/brion-marwa'
								target='_blank'
								rel='noreferrer'
								className='w-1/2 border-r text-center font-mono font-bold text-black bg-gray-300 hover:text-green-500'
							>
								CV
							</motion.a>
							<motion.a
								variants={tagVariants_cont}
								href='#contact'
								className='w-1/2 text-center font-mono font-bold text-black bg-gray-300 border-l hover:text-green-500'
							>
								Contact
							</motion.a>
						</div>
					</article>

					<svg
						className=' absolute bottom-7 transition-all duration-100 ease-in-out animate-bounce'
						width='54'
						height='54'
						viewBox='0 0 44 44'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M22 29.3333L21.6464 29.6869L22 30.0404L22.3536 29.6869L22 29.3333ZM16.1464 24.1869L21.6464 29.6869L22.3536 28.9798L16.8536 23.4798L16.1464 24.1869ZM22.3536 29.6869L27.8536 24.1869L27.1464 23.4798L21.6464 28.9798L22.3536 29.6869ZM22.5 29.3333L22.5 14.6667L21.5 14.6667L21.5 29.3333L22.5 29.3333Z'
							fill='#F1EAEA'
						/>
					</svg>
				</div>
			</motion.section>
		</>
	)
}

export default Landing
