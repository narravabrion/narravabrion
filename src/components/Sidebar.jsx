import React from "react"
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"
import { RiMenu5Fill } from "react-icons/ri"
import { SiHashnode } from "react-icons/si"
import { useMenuContext } from "../context/MenuContextProvider"

const Sidebar = () => {
	const {handleMenu} = useMenuContext()
	return (
		<>
			<div className='w-12 h-full bg-black/70 flex flex-col items-center justify-center relative'>
				<div className='absolute top-2  text-white hover:text-green-700 cursor-pointer'>
					<RiMenu5Fill size={25} onClick={handleMenu}/>
				</div>
				<li className='w-full h-full text-gray-400  flex flex-col items-center justify-center'>
					<ul className='py-3'>
						<a href=' ' target='_blank' rel='noreferrer'>
							<AiFillGithub size={20} />
						</a>
					</ul>
					<ul className='py-3'>
						<a href=' ' target='_blank' rel='noreferrer'>
							<AiOutlineTwitter size={20} />
						</a>
					</ul>
					<ul className='py-3'>
						<a href=' ' target='_blank' rel='noreferrer'>
							<AiFillLinkedin size={20} />
						</a>
					</ul>
					<ul className='py-3'>
						<a href=' ' target='_blank' rel='noreferrer'>
							<SiHashnode size={20} />
						</a>
					</ul>
				</li>
			</div>
		</>
	)
}

export default Sidebar
