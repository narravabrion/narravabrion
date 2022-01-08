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
						<a href="https://narravabrion.netlify.app/">Portfolio</a>
						</div>
						<div className='col' data-label='Description:'>
						This is my personal website portfolio
						</div>
						<div className='col' data-label='Techs:'>
							React.js
						</div>
					</li>
				</ul>
			</div>
		</div>
		</>
	)
}

export default ProjectsTable
