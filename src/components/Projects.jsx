import React, { useCallback, useEffect, useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

const Projects = () => {
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

	return (
		<>
			<div className='text-white w-full h-full  bg-black/80 flex flex-col items-start justify-center '>
				<article className='w-full'>
					<h1 className='p-3 text-lg font-semibold text-green-500'>
						{currentProject.name}
					</h1>
					<p className='pr-12 pl-3 text-left'>{currentProject.desc}</p>
					<ul className='flex items-center flex-wrap justify-start pr-12 pl-2 pb-2 text-gray-400'>
						{currentProject.techs.map((item) => {
							return (
								<li
									key={item.id}
									className='bg-gray-200/20 px-1 m-1 rounded border border-gray-700'
								>
									{item}
								</li>
							)
						})}
					</ul>
					<div className='flex items-center justify-center my-2 w-full'>
						<a
							href={currentProject.url}
							className=' bg-gray-100/40 px-2 rounded-full shadow-lg text-green-500 font-bold flex items-center transition-all ease-in-out hover:opacity-80 hover:scale-105 hover:text-black'
						>
							demo <FiExternalLink className='ml-2' size={20} />
						</a>
					</div>
					<div className=' w-full p-2 flex items-center justify-evenly'>
						<AiOutlineArrowLeft
							size={25}
							className=' mx-2 bg-gray-200/20 rounded-full p-1'
							onClick={handlePrev}
						/>
						<AiOutlineArrowRight
							size={25}
							className=' mx-2 bg-gray-200/20 rounded-full p-1'
							onClick={handleNext}
						/>
					</div>
				</article>
			</div>
		</>
	)
}

export default Projects

const projectList = [
	{
		id: "1",
		name: "Personal portfolio",
		url: "https://narravabrion.netlify.app/",
		desc: "This is my personal website portfolio",
		techs: ["React", "Tailwind"],
	},
	{
		id: "2",
		name: "Twitter trends",
		url: "https://twittertrends.netlify.app/",
		desc: "A site that fetches current trends from round the world. Users can specify the country they want to view or use their current location. It displays the trend name and the volume of tweets.",
		techs: ["React", "Node", "Twitter API", "Material UI"],
	},
	{
		id: "3",
		name: "Nameright",
		url: "https://nameright.netlify.app/",
		desc: "A REST API build on ExpressJs where users can store names or query the database through multiple endpoints to get data in their desired format.",
		techs: ["React", "Node", "Tailwind", "AdminJs", "Docker"],
	},
]
