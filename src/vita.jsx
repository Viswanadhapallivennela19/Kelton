import Header from "./header.jsx";
import Heading from "./heading.jsx";
import CardSlider from "./img-slider.jsx";
import Footer from './footer.jsx'
function Vita() {
  return (
    <>
       
      <Header />
      <Heading title="Vita" sectionTitle="VITA WITH HEARTFELT HEALTH" /> 
      <section className="vita-section d-flex justify-content-between align-items-center gap-2 p-5 rounded-1">
      
        <div className="w-100">
          <img className="position-relative" src="../public/vita1.jpg" />
          <div className="position-absolute bg-primary coverage"></div>
        </div>
        <div className="">
          <p className="">
            Healthy body thrives on a balance of vital systems, proper
            nutrition, and good habits. Key organs like the heart, brain, lungs,
            and immune system work together for overall function. Nutrients like
            proteins, carbs, fats, vitamins, and water fuel and support these
            systems.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>
            Balanced nutrition supports energy, repair, and body regulation.
          </p>
          <p className="">
            {" "}
            <span className="material-symbols-outlined">done_all</span>Routine body
            checks help prevent and manage health risks.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>Healthy
            habits like exercise, hydration, and sleep are essential for daily
            wellness.
          </p>
          <p className="">
            <span className="material-symbols-outlined">done_all</span>Signs of good
            health include high energy, clear skin, good sleep, strong immunity,
            and a positive mindset.
          </p>
          <p className="">
            Daily exercise, good sleep, hydration, and avoiding harmful habits
            promote long-term health. Signs of wellness include high energy,
            clear skin, strong immunity, restful sleep, and positivity.
          </p>
        </div>
      </section>
      <section className="vita-card-section  py-4  ">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <div
              className="nav flex-column nav-pills justify-content-center align-content-center "
              id="v-pills-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="tab1"
                data-bs-toggle="pill"
                data-bs-target="#content1"
                type="button"
                role="tab"
              >
                Vital Body
              </button>
              <button
                className="nav-link"
                id="tab2"
                data-bs-toggle="pill"
                data-bs-target="#content2"
                type="button"
                role="tab"
              >
                Nutrition
              </button>
              <button
                className="nav-link"
                id="tab3"
                data-bs-toggle="pill"
                data-bs-target="#content3"
                type="button"
                role="tab"
              >
                Mental & Lifestyle Indicators
              </button>
              <button
                className="nav-link"
                id="tab4"
                data-bs-toggle="pill"
                data-bs-target="#content4"
                type="button"
                role="tab"
              >
                Mental & Lifestyle Indicators
              </button>
              <button
                className="nav-link"
                id="tab5"
                data-bs-toggle="pill"
                data-bs-target="#content5"
                type="button"
                role="tab"
              >
                Mental & Lifestyle Indicators
              </button>
            </div>
          </div>

          <div className="col-md-8">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="content1"
                role="tabpanel"
              >
                <div className="d-flex g-2">
                  <div className="">
                    <h2>Vital Body Systems</h2>
                    <p>
                      <i className="bi bi-check-all"></i>
                      <strong>Heart - </strong>Pumps blood and delivers oxygen
                      and nutrients to the entire body.
                    </p>
                    <p>
                      <i className="bi bi-check-all"></i>
                      <strong>Brain - </strong>The control center — manages
                      thoughts, emotions, and bodily functions.
                    </p>
                    <p>
                      <i className="bi bi-check-all"></i>
                      <strong>Lungs - </strong>Enable breathing by exchanging
                      oxygen and carbon dioxide.
                    </p>
                    <p>
                      <i className="bi bi-check-all"></i>
                      <strong>Digestive System - </strong>Breaks down food into
                      nutrients your body can absorb.
                    </p>
                    <p>
                      <i className="bi bi-check-all"></i>
                      <strong>Immune System -</strong> Defends against
                      infections and keeps you healthy.
                    </p>
                    <p>
                      <i className="bi bi-check-all"></i>
                      <strong>Nervous System - </strong>Sends signals throughout
                      your body to control movement and response.
                    </p>
                  </div>
                  <div className=''>
                    <img src='../hero-1.jpg' className='vita-data-img' /> 
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="content2" role="tabpanel">
              <div className="d-flex g-2"> 
                <div className="">
                  <h2>Nutrition Essentials</h2>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Proteins - </strong>Build and repair tissues (e.g.,
                    eggs, legumes, dairy).
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Carbohydrates - </strong>Provide energy (e.g.,
                    grains, fruits, vegetables).
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Fats - </strong>Support brain function and cell
                    health (e.g., nuts, fish, olive oil).
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Vitamins & Minerals - </strong>Boost immunity,
                    strengthen bones, and aid metabolism.
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Water - </strong>Essential for digestion,
                    temperature regulation, and circulation.
                  </p>
                </div>
                <div className=''>
                    <img src='../hero-1.jpg' className='vita-data-img' /> 
                </div>
                </div>
              </div>
              <div className="tab-pane fade" id="content3" role="tabpanel">
              <div className="d-flex g-2"> 
                <div className="">
                  <h2>Healthy Habits</h2>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Exercise regularly - </strong>at least 30 mins a
                    day.
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Stay hydrated – </strong>drink 2–3 liters of water
                    daily.
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>quality sleep – </strong>aim for 7–9 hours per
                    night.
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Manage stress –</strong> through meditation,
                    hobbies, or therapy.
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong>Avoid harmful habits –</strong> say no to smoking
                    and limit alcohol intake.
                  </p>
                </div>
                <div className=''>
                    <img src='../hero-1.jpg' className='vita-data-img' /> 
                  </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="content4" role="tabpanel">
              <div className="d-flex g-2"> 
                <div className="">

                  <h2></h2>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                </div>
                <div className=''>
                    <img src='../hero-1.jpg' className='vita-data-img' /> 
                  </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="content5" role="tabpanel">
              <div className="d-flex g-2"> 
                <div className="">
                  <h2></h2>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                  <p>
                    <i className="bi bi-check-all"></i>
                    <strong></strong>
                  </p>
                </div>
                <div className=''>
                    <img src='../hero-1.jpg' className='vita-data-img' /> 
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
      <CardSlider></CardSlider>
      </section>
      <Footer></Footer>

    </>
  );
}
export default Vita;
