import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
	const [letterClass] = useState('text-animate')

	return (
		<>
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>
					<p>
						I am interested in freelance opportunities - especially on ambitious
						or large projects. However, if you have any other requests or
						questions, don't hesitate to contact me using below form either.
					</p>
				</div>
				<div className="info-map">
					Arab Emergency Company Ltd.,
					<br />
					Kingdom of Saudi Arabia,
					<br />
					Jarir Streer <br />
					Riyadh <br />
					<br />
					<span>Maher@altawary.com</span>
				</div>
				<div className="map-wrap">
					<MapContainer center={[44.96366, 19.61045]} zoom={13}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[44.96366, 19.61045]}>
							<Popup>Arab Emergency </Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</>
	)
}

export default Contact