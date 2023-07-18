import './index.scss'
import Logo from '../../assets/coloredSVG.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBook, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
	return (
		<div className='nav-bar'>
			<Link className='logo' to='/'>
				<img src={Logo} alt='logo' />
			</Link>
			<nav>
				<NavLink exact='true' activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</NavLink>
				<NavLink exact='true' activeclassname="active" className='about-link' to="/about">
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</NavLink>
				<NavLink exact='true' activeclassname="active" className="projects-link" to="/projects">
					<FontAwesomeIcon icon={faBook} color='#4d4d4e' />
				</NavLink>
				<NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a href='https://www.google.com' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className='anchor-icon' />
					</a>
				</li>
				<li>
					<a href='https://www.google.com' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faFacebook} color='#4d4d4e' className='anchor-icon' />
					</a>
				</li>
				<li>
					<a href='https://www.google.com' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faTwitter} color='#4d4d4e' className='anchor-icon' />
					</a>
				</li>
				<li>
					<a href='https://www.google.com' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faInstagram} color='#4d4d4e' className='anchor-icon' />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;