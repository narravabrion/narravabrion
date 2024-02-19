import React, { useEffect, useState } from "react"

const Jokes = () => {
	const joke = {
		Q: "Why was the JavaScript developer sad?",
		A: "Because they didn't Node how to Express themself!",
	}

	const [Jokes, setJokes] = useState(joke)

	const fetchJokes = async () => {
		try {
			const response = await fetch(
				"https://v2.jokeapi.dev/joke/Programming?type=twopart"
			)
			const data = await response.json()
			const joke = {
				Q: data.setup,
				A: data.delivery,
			}
			setJokes(joke)
		} catch (error) {
			setJokes(joke)
		}
	}

	useEffect(() => {
		//  call the joke function every 5 seconds
		const interval = setInterval(() => {
			fetchJokes()
		}, 5000)

		// cleanup
		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<article className='py-8 bg-stone-200/20 rounded-sm h-28 my-2 font-serif font-thin text-sm'>
				<h1 className='pl-4'>Q: {Jokes.Q}</h1>
				<h1 className='pl-4'>A: {Jokes.A}</h1>
			</article>
		</>
	)
}

export default Jokes
