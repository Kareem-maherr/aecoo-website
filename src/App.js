import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home'
import Layout from '../src/components/Layout'
import About from '../src/components/About'
import Contact from './components/Contact';
import Egg from './assets/easterEgg'
import Projects from './components/Projects';

function App() {
  return (
    <>
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="/contact" element={<Contact />}/>
			<Route path="/onepiece" element={<Egg />} />
			<Route path="/projects" element={<Projects />} />
		</Route>
	</Routes>
	</>
  );
}

export default App;
