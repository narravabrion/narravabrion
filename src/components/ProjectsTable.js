import React from "react"
import "./projectsTable.css"

const ProjectsTable = () => {
	return (
		<>
		<div className="container">
		<div className='project-container'>
				<ul className='responsive-table'>
					<li>
						<div className='col' data-label='Title:'>
						<a target='_blank' rel='noreferrer' href="https://narravabrion.netlify.app/">Portfolio</a>
						</div>
						<div className='col' data-label='Description:'>
						This is my personal website portfolio
						</div>
						<div className='col' data-label='Techs:'>
							React.js
						</div>
					</li>
					<li>
						<div className='col' data-label='Title:'>
						<a target='_blank' rel='noreferrer' href="https://twittertrends.netlify.app/">Twitter Trends</a>
						</div>
						<div className='col' data-label='Description:'>
						A site that fetches current trends from round the world
						</div>
						<div className='col' data-label='Techs:'>
							React.js, Node.js, REST, Material UI
						</div>
					</li>
				</ul>
			</div>
		</div>
		</>
	)
}

export default ProjectsTable
