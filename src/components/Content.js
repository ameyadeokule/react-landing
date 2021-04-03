import React from 'react'
import imageOne from '../images/egg.jpg'
import imageTwo from '../images/egg-2.jpg'

const Content = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
				<img
					className='h-full rounded mb-20 shadow'
					src={imageOne}
					alt='egg'
				/>

				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-2xl mb-2'>Egg Muffins</h2>
					<p className='mb-2'>Crispy,Delicious and Nutritious</p>
					<span>$16</span>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
				<img
					className='h-full rounded mb-20 shadow'
					src={imageTwo}
					alt='egg'
				/>

				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-2xl mb-2'>Egg Salad</h2>
					<p className='mb-2'>Crispy,Delicious and Nutritious</p>
					<span>$20</span>
				</div>
			</div>
		</>
	)
}

export default Content
