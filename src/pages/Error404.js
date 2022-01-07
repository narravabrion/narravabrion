import React from "react"
import {Link} from 'react-router-dom'

const Error404 = () => {
	return (
		<>
			<section className='page_404'>
				<div className='four_zero_four_bg'>
					<h1>404</h1>
				</div>

				<div className='content_404'>
					<h3 className='h2'>Look like you're lost</h3>

					<p>First time?!</p>

					<Link to='/' className='link_404'>
						Back Home!
					</Link>
				</div>
			</section>
		</>
	)
}

export default Error404
