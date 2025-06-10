import React from "react";
function WhyVita() {
  return (
    <>
      <section className="why-vita-section">
        <div className="d-flex justify-content-between why-vita-inner gap-3">
          <div className="d-flex flex-column justify-content-center gap-5 align-items-end">
            <div class="card text-center p-3 w-75 rounded-5 why-card-animation">
              <i class="bi bi-heart-pulse-fill fs-1 secondary-color mb-2  "></i>
              <h5 class="fw-semibold">Personalized Insights</h5>
              <p class="text-muted">
                Get custom health advice based on your reports, habits, and
                lifestyle.
              </p>
            </div>
            <div class="card text-center p-3 w-75 rounded-5 why-card-animation">
              <i class="bi bi-nut-fill fs-1 secondary-color mb-2"></i>
              <h5 class="fw-semibold">Smart Nutrition</h5>
              <p class="text-muted">
                Track your diet, receive food suggestions, and build healthier
                eating habits.
              </p>
            </div>
          </div>
          <div className="why-vita-card d-flex  place-items-center justify-content-center">
		  <img src='./why-need.png'/>
          </div>
		  
          <div className="d-flex flex-column justify-content-center gap-5 align-items-start">
            <div class="card text-center p-3 w-75 rounded-5 why-card-animation ">
              <i class="bi bi-activity fs-1 secondary-color mb-2"></i>
              <h5 class="fw-semibold">Stay Active</h5>
              <p class="text-muted">
                Receive tips, reminders, and exercises to stay fit and energized
                daily.
              </p>
            </div>
            <div class="card text-center p-3 w-75 rounded-5 why-card-animation">
              <i class="bi bi-shield-check fs-1 secondary-color mb-2"></i>
              <h5 class="fw-semibold">Preventive Wellness</h5>
              <p class="text-muted">
                Detect early warning signs and reduce future health risks with
                consistent monitoring.
              </p>
            </div>
          </div>
         </div>
      </section>
    </>
  );
}
export default WhyVita;
