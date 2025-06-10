import {Link,useNavigate} from 'react-router-dom';
import React,{useEffect} from 'react'
// import {useEffect} from 'react'
import {recognition} from './voice.jsx'
function Header(){
	const navigate=useNavigate();
	useEffect(() => {
		if (!recognition){
			alert('Sorry! Your browser will not supports the microphone')
			return;
		} 
		 
		try {
			 recognition.start()
			recognition.onresult = (event) => {
				const command = event.results[0][0].transcript.toLowerCase().trim();
				console.log("Command:", command);
				if (command.startsWith('hi vita')) {
					if (command.includes('about')) {
						navigate('/about');
					}
					else if(command.includes('home')){
						navigate('/home');
					}
					else if(command.includes('vita')){
						navigate('/vita');
					}
					else if(command.includes('nourish')){
						navigate('/nourish');
					}
					else if(command.includes('vegan')){
						navigate('/vegan');
					}
					else if(command.includes('nonvegan')){
						navigate('/non-vegan');
					}
					else if(command.includes('spices')){
						navigate('/spices');
					}
					else if(command.includes('contact')){
						navigate('/contact');
					}
						
				}
			};
			recognition.onend=()=>{
				recognition.stop()
			}
			
		} catch (err) {
			console.error('Speech Recognition Error:', err);
		}
	}, [navigate]);
	 
	 
	return(
		<>
			<header className='d-flex justify-content-between align-items-center px-3 py-2 position-fixed top-0 w-100 extra-bg z-3 background-color'>
				<h1  className='m-0 brand'><img src='./logo.png' className='m-0 img-width'/>ita<span className='brand'>vibe</span></h1>
				<nav>
					<ul className='list-unstyled d-flex  align-items-center m-0'>
						<li className='ms-3'>
							<Link to='/' className='text-decoration-none fw-semibold default-color hover-color'>Home</Link>
						</li>
						<li className='ms-3 '>
							<Link to='/about' className='text-decoration-none default-color hover-color fw-semibold'>About</Link>
						</li>
						<li className='ms-3 '>
							<Link to='/vita' className='text-decoration-none default-color hover-color fw-semibold'>Vita</Link>
						</li>
						<li className='ms-3 '>
							<Link to='/nourish' className='text-decoration-none default-color hover-color fw-semibold'>Nourish</Link>
						</li>
						<li className="nav-item dropdown ms-3">
  							<Link to="/"className="nav-link dropdown-toggle text-decoration-none  fw-semibold hover-color"role="button"data-bs-toggle="dropdown"aria-expanded="false">Vitalive</Link>
  							<ul className="dropdown-menu extra-bg">
    							<li><Link className="dropdown-item fw-semibold default-color hover-color " to="/vegan">Vegan</Link></li>
    							<li><Link className="dropdown-item fw-semibold default-color hover-color" to="/vitalive/non-vegan">Non-vegan</Link></li>
    							<li><Link className="dropdown-item fw-semibold default-color hover-color" to="/vitalive/spices">Spices</Link></li>
  							</ul>
						</li>

						<li className='ms-3 '>
							<Link to='/contact' className='text-decoration-none  fw-semibold default-color hover-color'>Contact</Link>
						</li>
						 
						<li className='ms-3 '>
							<Link to='/search' className='text-decoration-none  fw-semibold'>
							<i className="fas fa-search me-2"></i>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
export default Header;