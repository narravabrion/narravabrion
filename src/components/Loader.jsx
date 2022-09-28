import React from "react"

const Loader = () => {
	return (
		<>
			<div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black'>
				<div className='relative w-16 h-16 animate-spin rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 '>
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black rounded-full border border-white'></div>
				</div>
			</div>
		</>
	)
}

export default Loader
