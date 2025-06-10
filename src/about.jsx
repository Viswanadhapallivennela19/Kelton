import Heading from "./heading.jsx";
import Header from "./header.jsx";
function About(){
	return(
		<>	
			<section className='about-section'>
			<Header></Header>
			<Heading title="About" sectionTitle="GET TO KNOW US"></Heading>
			<section className='about-inner'>
				<div className='about-data-section'>
				 
					<div className='d-flex justify-content-center align-items-center w-100 h-100 about-flex gap-4'>
						<img src='./doctor.png' className='about-img'/>
						<div>
							<h2 className='header-font letter-space fs-2'><span className='primary-color brand fw-bolder'>Our</span> Journey</h2>
							<p className='letter-space-2 text-dark'>VitaVibe is your personalized health and wellness companion designed to help you achieve a balanced and vibrant lifestyle. By combining smart nutrition guidance, personalized health insights, and practical fitness tips, VitaVibe empowers you to take control of your well-being every day.</p>
							<p className='letter-space-2 text-dark fw-semibold fs-6'><i class="bi bi-check-all primary-color fw-bolder fs-3"></i> Personalized Wellness Tracking</p>
							<p className='letter-space-2 text-dark fw-semibold fs-10'><i class="bi bi-check-all primary-color fw-bolder fs-3"></i> Smart Nutrition Support</p>
							<p className='letter-space-2 text-dark fw-semibold fs-10'><i class="bi bi-check-all primary-color fw-bolder fs-3"></i> Fitness & Movement Guidance</p>
							<p className='letter-space-2 text-dark'>Whether you want to improve your diet, monitor your health metrics, or stay motivated with tailored physical activities, VitaVibe offers easy-to-follow advice.VitaVibe helps you prevent health issues before they arise and supports you in building lasting healthy habits.</p>
							<div className='d-flex justify-content-center align-items-center mt-3'>
								<div className='v-bar'>
									<p className='letter-space fw-bold text-dark primary-color m-0 p-1 fs-6'>Stay energized, eat smart, move freely, and live fully</p>
									<p className='letter-space fw-bolder text-dark'>VitaVibe is your partner in building a healthier tomorrow.</p>
								</div>
							</div>
							
						</div>
						
					</div>
					
					</div>
				 
			</section>
			</section>
		</>
	)
}
export default About;