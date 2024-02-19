import { FC } from "react"
import {
	AiFillLinkedin,
	AiOutlineTwitter,
	AiOutlineGithub,
} from "react-icons/ai"
import { SiHashnode } from "react-icons/si"
import Jokes from "../components/Jokes"

const HomePage: FC = () => {
	return (
		<>
			<div className='w-screen h-screen bg-primary flex justify-center items-center'>
				<div className='bg-secondary rounded p-2 md:p-10 shadow overflow-hidden w-10/12 h-1/2 max-h-96 max-w-2xl font-mono relative '>
					<h1 className='font-bold'>Kon'nichiwa 👋</h1>
					<p className='text-textcolor p-2 '>
						"Talk is cheap. Show me the code." - Linus Torvalds
					</p>
					<Jokes />
					<h4 className=''>
						Regards! <br />
						Brian Marwa
					</h4>

					<div className='w-full absolute inset-x-0 bottom-0 p-2 md:pb-10 '>
						<div className='flex items-center justify-between md:justify-evenly p-2'>
							<a
								href='https://www.linkedin.com/in/brian-george-411b49184/'
								target='_blank'
								rel='noopener'
								className='text-textcolor border border-gray-400 rounded-full p-1 hover:bg-gray-400'
							>
								<AiFillLinkedin size={22} />
							</a>
							<a
								href='https://github.com/narravabrion'
								target='_blank'
								rel='noopener'
								className='text-textcolor border border-gray-400 rounded-full p-1 hover:bg-gray-400'
							>
								<AiOutlineGithub size={22} />
							</a>
							<a
								href='https://twitter.com/narravabrion'
								target='_blank'
								rel='noopener'
								className='text-textcolor border border-gray-400 rounded-full p-1 hover:bg-gray-400'
							>
								<AiOutlineTwitter size={22} />
							</a>
							<a
								href='https://blog.brianmarwa.com/'
								target='_blank'
								rel='noopener'
								className='text-textcolor border border-gray-400 rounded-full p-1 hover:bg-gray-400'
							>
								<SiHashnode size={22} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
