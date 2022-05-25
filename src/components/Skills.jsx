import React from "react"
import { SiDjango, SiPandas } from "react-icons/si"
import { FaReact, FaNodeJs } from "react-icons/fa"

const Skills = () => {
	return (
		<>
			<div className='w-full flex items-center justify-evenly pt-2 pb-4 text-gray-400 bg-black/70 '>
				<div className=''>
					<div className=''>
						<FaReact />
					</div>
					
				</div>
				<div className=''>
					<div className=''>
						<FaNodeJs />
					</div>
					
				</div>
				<div className=''>
					<div className=''>
						<SiDjango />
					</div>
					
				</div>
				<div className=''>
					<div className=''>
						<SiPandas />
					</div>
					
				</div>
			</div>
		</>
	)
}

export default Skills
