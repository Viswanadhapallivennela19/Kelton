import Footer from './footer.jsx'
import Header from './header.jsx';
import Heading from './heading.jsx';
import BodyMeasures from './measures.jsx';
function Nourish(){
   
  
	return(
		<>
			<Header/> 
      <Heading title="Nourish" sectionTitle="NOURISH WITH HEARTFELT HEALTH" /> 
			<section className="vita-section d-flex justify-content-between align-items-center gap-2 p-5 rounded-1">
      
        <div className="w-100">
          <img className="position-relative" src="../public/nourish.jpg" />
          <div className="position-absolute bg-primary coverage"></div>
        </div>
        <div className="">
          <p className="">
          Nutrients are essential for the proper growth, development, and functioning of our body. They provide the energy needed for daily activities and help in building and repairing body tissues. Nutrients also regulate important body processes like metabolism, immunity, and digestion.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>
            <strong>Vitamins</strong> are Regulate metabolism, immunity, and digestion.
          </p>
          <p className="">
            {" "}
            <span className="material-symbols-outlined">done_all</span>
            <strong>Proteins</strong> are helps to Build and repair body tissues.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>
            <strong>Minerals</strong> are provide Strengthen bones and support nerve function
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>
            <strong>Carbohydrates</strong> give Main source of body energy.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>
            <strong>Fats</strong> Provide energy and help vitamin absorption.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>
            <strong>Water</strong> is Essential for nutrient transport and temperature control.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>
            <strong>Fiber</strong> will improves digestion and gut health.
          </p>
          <p className="">
          They protect us from diseases and keep our organs working efficiently. Without proper nutrients, our body would become weak and prone to various health problems.
          </p>
        </div>
      </section>
       <BodyMeasures></BodyMeasures>
      <section className='-section'>
      </section>
      <Footer/> 
		</>
	)
}
export default Nourish;