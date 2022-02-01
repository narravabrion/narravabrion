import React from "react"
import "./homePgComp.css"
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"
import { SiHashnode, SiDjango, SiPandas } from "react-icons/si"
import { FaReact, FaNodeJs } from "react-icons/fa"

const HomePgComp = () => {
	return (
		<>
			<div className='intro'>
				<div className='name'>
					<h4>Brion</h4>
					<p>Software Developer | Comp engineer</p>
				</div>
				<div className='socials'>
					<a href='https://github.com/narravabrion' target={'blank'}>
						<div className='social-icon github'>
							<AiFillGithub />
						</div>
					</a>
					<a href='https://twitter.com/narravabrion' target={'blank'}>
						<div className='social-icon twitter'>
							<AiOutlineTwitter />
						</div>
					</a>
					<a href='https://www.linkedin.com/in/brian-george-411b49184/' target={'blank'}>
						<div className='social-icon linkedin'>
							<AiFillLinkedin />
						</div>
					</a>
					<a href='https://codxbrion.hashnode.dev/' target={'blank'}>
						<div className='social-icon hashnode'>
							<SiHashnode />
						</div>
					</a>
				</div>
			</div>
			<article className='intro-article'>
				<p className='intro-paragraph'>
					Hi! I'm Brion, former C.E.O of a lemonade stand. I like to explore and
					develop technological solutions, both in software and hardware. I'm a
					full-stack developer utilising tools like react.js, express, django to
					bring ideas to life. I'm also an electronics and data science
					enthusist. On my off days I play video games, read novels, take a dive
					in the pool or go for nature trips.
				</p>
				<div className='article-btns'>
					<a href='https://drive.google.com/file/d/1Kf01vP8V87yU_W4K07dR9lnsJB6NUNm9/view?usp=sharing' target="_blank" rel="noreferrer">View CV</a>
					<a href='mailto:kidbrion7@gmail.com' target="_blank" rel="noreferrer>Contact Me</a>
				</div>
			</article>
			<div className='skills-section'>
				<div className='skill'>
					<div className='skill-icon'>
						<FaReact />
					</div>
					<p>react.js</p>
				</div>
				<div className='skill'>
					<div className='skill-icon'>
						<FaNodeJs />
					</div>
					<p>node.js</p>
				</div>
				<div className='skill'>
					<div className='skill-icon'>
						<SiDjango />
					</div>
					<p>django</p>
				</div>
				<div className='skill'>
					<div className='skill-icon'>
						<SiPandas />
					</div>
					<p>data s.</p>
				</div>
			</div>
		</>
	)
}

export default HomePgComp
