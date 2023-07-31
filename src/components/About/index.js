import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Logo from '../../assets/coloredSVG.svg'
import jsonData from '../../assets/jsonData'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const About = () => {

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const [listItems, setListItems] = useState([])
	const [listItems2, setListItems2] = useState([])
	var sampleText = [
		"Certificate of classification of contractors",
		"License Civil Defense in Saudi Arabia",
		"Memeber of the National Fire Protection Association (NFPA)",
		"Member of the British Society for Fire Protection (BSI)",
		"Member of the NFSA",
		"Member of the FPA"
	];

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleClick1 = () => {
		var textBlock = [
			"Electrical Works",
			"AC Works",
			"Fire Fighting Works",
			"Low Current Works"
		];
		setListItems(textBlock);
		if (listItems === textBlock) {
			setListItems([])
		}
	};

	const handleClick2 = () => {
		var textBlock = [
			"Certificate of classification of contractors",
			"License Civil Defense in Saudi Arabia",
			"Memeber of the National Fire Protection Association (NFPA)",
			"Member of the British Society for Fire Protection (BSI)",
			"Member of the NFSA",
			"Member of the FPA"
		];
		setListItems2(textBlock);
		if (listItems2 === textBlock) {
			setListItems2("")
		}
	};

	const [letterClass] = useState('text-animate')
	const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'U', 's'];

	return (
		<>
			<div className='container about-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={aboutArray}
							idx={15} />


					</h1>
					<button onClick={handleClick1}>Expertiese</button>
					<button onClick={handleClick2}>Licenses & Certificates</button>
					<button onClick={handleOpen}>Sample</button>
					<div className='about-text'>
						<p style={{ fontSize: 18 }}>
							We have the honor to present our company, which is one of the oldest and largest companies
							operating in the field of electrical and mechanical work in the Kingdom of Saudi Arabia.
							And our activity in all government sectors and private enterprises, gives us the confidence
							that <span color='#8d2121'>Arab Emergency Company Ltd.</span> is the most prevalent and the best
							experienced and specialized companies in this field.
						</p>
						<p align="LEFT" style={{ fontSize: 18 }}>
							We're different from other companies in the fact that we're complete in design, supply, installation and supervision according to
							international and local standards.
						</p>
						<p style={{ fontSize: 18 }}>
							We also have a section that specializes in the implementation of all projects regarding
							fire fighting which is equiped with the latest equipment and resources necessary for this purpose.

							<br />

							We hope that we have made
						</p>
						<p style={{ fontSize: 18 }}>
							<ul>
								{listItems.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</p>

						<p style={{ fontSize: 18 }}>
							<ul>
								{listItems2.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</p>
					</div>
				</div>
			</div>
			<img src={Logo} alt='Logo' className='base-logo' />
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Licenses and Certificates
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{sampleText.map((item, index) => (
							<ul key={index}>
								<li>
									{item}
								</li>
							</ul>
						))}
					</Typography>
				</Box>
			</Modal>
		</>
	)
}

export default About;