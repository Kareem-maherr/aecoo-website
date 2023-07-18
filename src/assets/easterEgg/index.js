import './index.scss';
import Song from './Overtaken.mp3'

const Egg = () => {

	function playAudio() {
		new Audio(Song).play()
		alert('Youve Found Me! 海賊王に俺はなる')
	}
	return(
		<div>
			<img src='https://media.tenor.com/fCtJQR5AnYUAAAAi/one-piece-monkey-d-luffy.gif' alt='dancing luffy' className='dancing-luffy'/>
			
			<h1 className='luffy-h1'>YOU'RE NOT SUPPOSED TO BE HERE</h1>
			<img src='https://media.tenor.com/fCtJQR5AnYUAAAAi/one-piece-monkey-d-luffy.gif' alt='dancing luffy' className='dancing-luffy' align="right"/>
			<button className='luffy-button' onClick={playAudio}>Find the Piece</button>
		</div>
	)
}

export default Egg;