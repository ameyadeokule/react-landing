import React, { useState, useEffect } from 'react'

import './App.css'
import Dropdown from './components/Dropdown'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen === true) {
				setIsOpen(false)
			}
		}
		window.addEventListener('resize', hideMenu)
		return () => {
			window.removeEventListener('resize', hideMenu)
		}
	})

	return (
		<div className='App'>
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Hero />
		</div>
	)
}

export default App
