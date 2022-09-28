import React, { useCallback, useEffect, useState } from "react"
import {
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
	AiFillGithub,
} from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import { motion } from "framer-motion"

const ProjectDisplay = () => {
	const [projects] = useState(projectList)
	const [value, setValue] = useState(0)

	const handleLimits = useCallback(
		(value) => {
			const len = projects.length - 1
			if (value > len) {
				return 0
			}
			if (value < 0) {
				return len
			}
			return value
		},
		[projects.length]
	)
	const handleNext = () => {
		setValue(handleLimits(value + 1))
	}
	const handlePrev = () => {
		setValue(handleLimits(value - 1))
	}

	useEffect(() => {
		const handleSlider = () => {
			setValue(handleLimits(value + 1))
		}
		const interval = setInterval(handleSlider, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [value, handleLimits])

	const currentProject = projects[value]

	
	const barVariants = {
		hidden: { opacity: 0,  },
		visible: {
			opacity: 1,
			scale: [1,1.1,1.1,1],
			transition: { duration: 3, },
		},
	}
	const articleVariants = {
		hidden: { opacity: 0, y: "-100vh" },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 2.5, type: "spring", bounce: 0.1 },
		},
	}

	return (
		<>
			<motion.article
				variants={articleVariants}
				className='w-full h-full p-2 relative'
			>
				<h1 className='text-lg font-semibold text-green-500'>
					{currentProject.name}
				</h1>
				<p className=''>{currentProject.desc}</p>
				<ul className='flex items-center flex-wrap justify-start text-dark absolute bottom-1'>
					{currentProject.techs.map((item, idx) => {
						return (
							<li key={idx} className='bg-gray-100/20 px-1 mb-1 mr-1 rounded '>
								{item}
							</li>
						)
					})}
				</ul>
				<motion.div variants={barVariants} className='absolute -bottom-20 right-0 left-0 margin-auto px-1 '>
					<div className='flex items-center justify-evenly my-2 w-full  bg-dark/90 py-1 rounded shadow-sm'>
						<AiOutlineArrowLeft
							size={40}
							className='absolute -left-2 bg-dark rounded-full p-1 shadow-md cursor-pointer hover:scale-110 hover:text-green-500 hover:bg-white transition-all duration-150 ease-in-out'
							onClick={handlePrev}
						/>
						<a
							href={currentProject.git}
							target='_blank'
							rel='noreferrer'
							className='text-green-500 hover:text-white'
						>
							<AiFillGithub size={20} className='' />
						</a>
						<a
							href={currentProject.url}
							target='_blank'
							rel='noreferrer'
							className='text-green-500 hover:text-white'
						>
							<FiExternalLink className='' size={20} />
						</a>

						<AiOutlineArrowRight
							size={40}
							className='absolute -right-2 bg-dark rounded-full p-1 shadow-md cursor-pointer hover:scale-110 hover:text-green-500 hover:bg-white transition-all duration-150 ease-in-out'
							onClick={handleNext}
						/>
					</div>
				</motion.div>
			</motion.article>
		</>
	)
}

export default ProjectDisplay

const projectList = [
	{
		id: "1",
		name: "Personal portfolio",
		url: "https://narravabrion.netlify.app/",
		desc: "This is my personal website portfolio",
		techs: ["React", "Tailwind"],
		git: "https://github.com/narravabrion/narravabrion",
	},
	{
		id: "2",
		name: "Twitter trends",
		url: "https://twittertrends.netlify.app/",
		desc: "A site that fetches current trends from round the world. Users can specify the country they want to view or use their current location. It displays the trend name and the volume of tweets.",
		techs: ["React", "Node", "Twitter API", "MaterialUI"],
		git: "https://github.com/narravabrion/twitter_trends",
	},
	{
		id: "3",
		name: "Nameright",
		url: "https://nameright.netlify.app/",
		desc: "A REST API build on ExpressJs where users can store names or query the database through multiple endpoints to get data in their desired format.",
		techs: ["React", "Node", "Tailwind", "Docker"],
		git: "https://github.com/narravabrion/nameright_bend",
	},
]
