import { useState } from 'react';
import logo from '../../assets/coloredSVG.svg';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Link } from 'react-router-dom';
//logo color is #8d2121

function Home() {
	const [letterClass] = useState('text-animate')

	const companyName = ['A', 'E', 'C', 'O']
	return (
		<div className='container home-page'>
			<div className='text-zone'>
				<img src={logo} alt='Logo' />
				<h1>
					<AnimatedLetters
						letterClass={letterClass}
						strArray={companyName}
						idx={15} />
				</h1>
				<h2>Arab Emergency Company For Safety Devices</h2>
				<Link to="/about" className="flat-button" onClick={console.log("Good Job")}>
					About Us
          		</Link>
				  <Link to="/Projects" className="flat-button">
            		Projects
          		</Link>
				  <Link to="/contact" className="flat-button">
            		Contact Us
          		</Link>
			</div>
		</div>
	);
}

export default Home;
