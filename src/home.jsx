import Header from "./header.jsx";
import Heading from "./heading.jsx";
import WhyVita from "./why-need.jsx";
import Footer from "./footer.jsx";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
function Home() {
  const nutritionCards = [
    {
      icon: "🍽️",
      description:
        " Energize your body and mind with nutrient-rich meals that support strength, focus, and long-term vitality.",
    },
    {
      icon: "💪",
      description:
        "True wellness starts from within. Nourish your body to boost immunity, improve digestion, and glow from the inside out.",
    },
    {
      icon: "🥗",
      description:
        "Smart food choices lead to a stronger body and sharper mind. Make every meal a step toward better living.",
    },
  ];

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Fuel Your Life with Real Nutrition",
        "Stronger Inside, Brighter Outside",
        "Eat Better.Live Stronger.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      showCursor: false,
      loop: true,
    });

    return () => typed.destroy();
  }, []);
  return (
    <>
      <Header />
      <main className="home-section">
        <section className="hero-section">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="position-relative">
                  <img
                    className="d-block w-100"
                    src="/hero2.jpg"
                    alt="First slide"
                    style={{ height: "800px", objectFit: "cover" }}
                  />
                  <div className="slide-1-card p-4">
                    <h2 className="animated-heading text-center w-100" ref={el}>
                      F
                    </h2>
                    <div className="hero-inner-card flex gap-3">
                      {nutritionCards.map((card, index) => (
                        <div key={index} className="w-100 p-2 d-flex gap-3">
                          <p className="icon-style">{card.icon}</p>
                          <p className="text-gray-600 mt-1 ltsp-2">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div>
                  <img
                    className="d-block w-100"
                    src="/hero-2.jpg"
                    alt="Second slide"
                    style={{ height: "800px", objectFit: "cover" }}
                  />
                  <div className="slide-2-card p-4">
                    <div className="hero-inner-card d-flex gap-3 ">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div>
                  <img
                    className="d-block w-100"
                    src="/hero-3.jpg"
                    alt="Third slide"
                    style={{ height: "800px" }}
                  />
                  <div className="slide-3-card p-4">
                    <div className="slide-3-inner-card">
                      <div className="poem-container">
                        <div className="poem-card">
                          <h3 className="poem-title">The Healing Pinch</h3>
                          <div className="poem-body">
                            <p className="poem-line">
                              Spices bring more than just taste,
                            </p>
                            <p className="poem-line">
                              They heal the body, never waste.
                            </p>
                            <p className="poem-line">
                              From turmeric’s gold to pepper’s might,
                            </p>
                            <p className="poem-line">
                              They boost our health, both day and night.
                            </p>
                            <p className="poem-line">
                              A pinch of spice, a life made right.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="spice-poem"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          padding: "1rem",
                          animation: "pulse 3s ease-in-out infinite",
                        }}
                      >
                        <h2>“A Pinch of Power”</h2>
                        <p>Spice up your life</p>
                        <p>naturally bright...</p>
                        <p>A pinch of health in every bite.</p>
                        <p>Their power is...</p>
                        <p>gentle, deep, and pure.</p>
                        <p>Bold flavors rise,</p>
                        <p>-- your strength, secure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev indication"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section>
          <Heading title="Home" sectionTitle="Welcome to Home" />
        </section>
        <WhyVita/> 
        <section className="Change-life-section">
          <div className="">
            <img />
            <div className="">
              <h2></h2>
              <p></p>
              <div className="d-flex">
                <div className="card">
                  <h3></h3>
                  <div></div>
                  <p></p>
                </div>
                <div className="card">
                  <h3></h3>
                  <div></div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="success-life">
          <div className="success-life-inner">
            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
              <h3 className="text-center mb-1 fs-1 accent-color heading-font extra-color">3 Simple Ways to</h3>
              <h3 className="text-center mb-4 fs-1 accent-color heading-font extra-color">
                Achieve a <span className="sp-font border-dotted text-success">Wellness Lifestyle</span>
              </h3>
              <div className="container py-5 d-flex justify-content-center align-items-center gap-4">
                <div className="col-md-4 text-center pt-5 pb-5 pl-2 pr-2 rounded-5 box-shadow hover-effect">
                  <i class="bi bi-calendar-check mb-3 fs-5 bg-style p-3"></i>
                  <h4 className='header-font fw-bold secondary-color'>Start Your Day</h4>
                  <p>
                    Open <strong>VITAVIBE</strong> website daily to track and monitor your health —
                    stay informed, stay aware.
                  </p>
                </div>
                <div class="col-md-4 text-center pt-5 pb-5 pl-2 pr-2 rounded-5 box-shadow hover-effect">
                  <i class="bi bi-basket3-fill mb-3 fs-5 bg-style p-3"></i>
                  <h4 className='header-font fw-bold secondary-color'>Fuel Your Body Right</h4>
                  <p>
                    Follow a balanced diet with the right mix of nutrients to
                    support energy, immunity, and well-being.
                  </p>
                </div>
                <div class="col-md-4 text-center pt-5 pb-5 pl-2 pr-2 rounded-5 box-shadow hover-effect">
                  <i class="bi bi-heart-pulse mb-3 fs-5 bg-style p-3"></i>
                  <h4 className='header-font fw-bold secondary-color'>Move to Improve</h4>
                  <p>
                    Engage in regular physical activity to aid digestion, boost
                    metabolism, and keep your body strong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
