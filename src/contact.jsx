import Heading from "./heading.jsx";
import Header from './header.jsx';
import QuestionForm from "./question.jsx";
import Footer from "./footer.jsx";
function Contact(){
	return(
		<>	
		<Header></Header>
		{/* <Heading title="Contact" sectionTitle="GET IN TOUCH"></Heading> */}
			<section className='contact-section'>
			<div className='contact-heading-section'>
				<div className='contact-heading-content'>
				<div>
					<h2 className='text-center  extra-color'>Get In Touch</h2>
					<div className='d-flex justify-content-center align-items-center gap-3 mb-4'>
						<div className='dots'></div>
						<div className='dots'></div>
						<div className='dots'></div>
						<div className='dots'></div>
						<div className='dots'></div>
					</div>
					<p className='text-center'>Have questions, feedback, or need personalized wellness support? We’re here to help! Reach out to the VitaVibe.</p>
					<p className='text-center'>whether it's about health tips, technical support, or collaboration opportunities, we’d love to hear from you.</p>
				</div>
				</div>
			</div>
			<div class="container my-5">
  <div class="row g-4 justify-content-center">
    
    <div class="col-md-4">
      <div class="card h-100 text-center box-shadow bg-none">
        <div class="card-body pt-5 pb-5">
          <i class="bi bi-geo-alt-fill fs-5 text-success mb-3 bg-style"></i>
          <h5 class="card-title mt-4 mb-2">Visit Us</h5>
          <p class="card-text">123 Wellness Street,<br/>Hyderabad, Telangana, India</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 text-center box-shadow bg-none">
        <div class="card-body pt-5 pb-5">
          <i class="bi bi-telephone-fill fs-5 text-success mb-3 bg-style"></i>
          <h5 class="card-title mt-4 mb-2">Phone</h5>
          <p class="card-text">+91 630 2435 604<br/>Mon - Fri, 9AM to 6PM</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 text-center box-shadow bg-none">
        <div class="card-body pt-5 pb-5">
          <i class="bi bi-envelope-fill fs-5 text-success mb-3 bg-style"></i>
          <h5 class="card-title mt-4 mb-2">Email</h5>
          <p class="card-text">support@vitavibe.com<br/>We usually respond within 24 hours</p>
        </div>
      </div>
    </div>
  </div>
</div>
 <QuestionForm></QuestionForm>
 <div className="mt-5">
    <iframe
      title="India Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5431730.048071219!2d73.05714650440648!3d22.351114536401353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ffdaf6c9fd5%3A0xf5f176b7b13f76a!2sIndia!5e0!3m2!1sen!2sin!4v1717327698702!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
			</section>
			<Footer></Footer>
		</>
	)
}
export default Contact;