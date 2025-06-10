
function Heading({title,sectionTitle}){
	return(
		<>
			<div className='heading-section'>
				<div className='d-flex justify-content-start align-items-center'>
					<h5 className='accent-color brand-name '>{title}</h5>
					<div className='heading-line'></div>
				</div>
				<h2 className='header-font'>{sectionTitle}</h2>
			</div>
		</>
	)
}
export default Heading;