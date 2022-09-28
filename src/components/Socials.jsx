import React from "react"
import { motion } from "framer-motion"
import {
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineTwitter,
} from "react-icons/ai"
import { SiHashnode } from "react-icons/si"

const Socials = () => {
	const tagVariants = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		hidden: {
			y: -50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
				duration: 5,
			},
		},
	}
	return (
		<>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
				transition={{ staggerChildren: 0.5 }}
				className='w-full flex px-2 py-4 items-center justify-evenly text-gray-300'
			>
				<motion.a
					variants={tagVariants}
					href='https://github.com/narravabrion'
					target='_blank'
					rel='noreferrer'
					className='hover:text-green-500 '
				>
					<AiOutlineGithub size={20} />
				</motion.a>
				<motion.a
					variants={tagVariants}
					href='https://www.linkedin.com/in/brian-george-411b49184/'
					target='_blank'
					rel='noreferrer'
					className='hover:text-green-500 '
				>
					<AiOutlineLinkedin size={20} />
				</motion.a>
				<motion.a
					variants={tagVariants}
					href='https://twitter.com/narravabrion'
					target='_blank'
					rel='noreferrer'
					className='hover:text-green-500 '
				>
					<AiOutlineTwitter size={20} />
				</motion.a>
				<motion.a
					variants={tagVariants}
					href='https://narravabrion.hashnode.dev/'
					target='_blank'
					rel='noreferrer'
					className='hover:text-green-500 '
				>
					<SiHashnode size={20} />
				</motion.a>
			</motion.div>
		</>
	)
}

export default Socials
