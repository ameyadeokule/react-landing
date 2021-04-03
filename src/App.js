import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/index'

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
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
			<Home />
			<Footer />
		</div>
	)
}

export default App
