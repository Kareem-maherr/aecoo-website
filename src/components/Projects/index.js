import './index.scss';
import jsonData from '../../assets/jsonData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Projects = () => {

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const [letterClass] = useState('text-animate')
	const projectsTitle = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

	return (
		<div className='container about-page'>
			<h1 className='h1-area'>
			<AnimatedLetters
				letterClass={letterClass}
				strArray={projectsTitle}
				idx={15} /></h1>
			<Slider {...settings}>
				{jsonData.map((item, index) => (
					<Card sx={{ maxWidth: 350 }} key={index} className='card'>
					<CardActionArea>
					  <CardMedia
						component="img"
						height="250"
						image={item.image}
						alt="green iguana"
					  />
					  <CardContent>
						<Typography gutterBottom variant="h5" component="div">
						  <b>Project Name:</b> {item.name}
						</Typography>
						<Typography variant="h6">
						  <b>Location:</b> {item.location}
						</Typography>
						<Typography variant="h6">
						<b>Consultant:</b> {item.consultant}
						</Typography>
						<Typography variant="h6">
						<b>Owner:</b> {item.owner}
						</Typography>
					  </CardContent>
					</CardActionArea>
				  </Card>
				))}
			</Slider>

		</div>
	)
}

export default Projects;