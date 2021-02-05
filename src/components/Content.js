import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';
const Content = () => {
	return (
		<>
			<div className="menu-card">
				<img className="h-full rounded mb-20 shadow" src={ImageOne} alt="eggg" />
				<div className="center-content">
					<h2 className="text-2xl mb-2">Egg Muffins</h2>
					<p className="mb-2">Crispy, delicius, and nutritious</p>
					<span>$20</span>
				</div>
			</div>
			<div className="menu-card">
				<img className="h-full rounded mb-20 shadow" src={ImageTwo} alt="eggg" />
				<div className="center-content">
					<h2 className="text-2xl mb-2">Egg salad</h2>
					<p className="mb-2">Crispy, delicius, and nutritious</p>
					<span>$15</span>
				</div>
			</div>
		</>
	);
};

export default Content;
