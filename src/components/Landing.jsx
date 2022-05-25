import React from "react"

const Landing = () => {
	return (
		<>
			<section className='text-white w-full h-full  bg-black/70 flex flex-col items-center justify-center'>
				<div className='py-2 px-12 text-center'>
					<p className='font-semibold text-green-400'>
						Software Developer | Comp engineer
					</p>
				</div>
                <hr className="text-white" />
				<article className=' p-2 px-12'>
					<p className='text-center'>
						Hi! I'm Brion, former C.E.O of a lemonade stand. I like to explore
						and develop technological solutions, both in software and hardware.
						I'm a full-stack developer utilising tools like react.js, express,
						django to bring ideas to life. I'm also an electronics and data
						science enthusist. 
					</p>
				</article>
				<div className='w-full flex justify-evenly pb-2'>
					<a
						href='https://rxresu.me/kidbrion7/brion-marwa'
						target='_blank'
						rel='noreferrer'
						className='bg-gray-400 text-black/80 px-2 py-1 mt-4 rounded-sm shadow hover:opacity-80 font-semibold'
					>
						View CV
					</a>
					<a
						href='mailto:kidbrion7@gmail.com'
						target='_blank'
						rel='noreferrer'
						className='bg-gray-400 text-black/80 px-2 py-1 mt-4 rounded-sm shadow hover:opacity-80 font-semibold'
					>
						Contact Me
					</a>
				</div>
				{/* <Skills /> */}
			</section>
		</>
	)
}

export default Landing
