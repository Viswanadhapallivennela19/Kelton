import React from 'react'
function BodyMeasures(){
	const humanBodyMeasures = {
  bodyTemperature: {
    icon: "bi-thermometer-half",
    normalRange: "36.5–37.3°C (97.8–99.1°F)",
    lowEffects: "Hypothermia: shivering, slow heart rate, confusion",
    highEffects: "Fever: weakness, dehydration, seizures"
  },
  heartRate: {
    icon: "bi-heart-pulse",
    normalRange: "60–100 bpm (resting)",
    lowEffects: "Bradycardia: dizziness, fatigue, fainting",
    highEffects: "Tachycardia: palpitations, risk of stroke"
  },
  respiratoryRate: {
    icon: "bi-wind",
    normalRange: "12–20",
    lowEffects: "Respiratory depression, CO₂ retention, drowsiness",
    highEffects: "Hyperventilation: dizziness, numbness, chest pain"
  },
  bloodPressure: {
    icon: "bi-activity",
    normalRange: "120/80",
    lowEffects: "Hypotension: fainting, blurred vision, fatigue",
    highEffects: "Hypertension: stroke, heart disease, kidney damage"
  },
  bloodSugar: {
    icon: "bi-droplet",
    normalRange: "70–99 mg/dL (3.9–5.5 mmol/L)",
    lowEffects: "Hypoglycemia: tremors, fainting, seizures",
    highEffects: "Hyperglycemia: diabetes, organ damage"
  },
  bloodOxygen: {
    icon: "bi-cloud-fog2",
    normalRange: "95–100%",
    lowEffects: "Hypoxia: breathlessness, confusion, organ failure",
    highEffects: "Hyperoxia (rare): oxygen toxicity, lung damage"
  },
  weight: {
    icon: "bi-scale",
    normalRange: "Varies by height/age",
    lowEffects: "Malnutrition, fatigue, fertility issues",
    highEffects: "Obesity: diabetes, joint pain, heart disease"
  },
  height: {
    icon: "bi-arrows-collapse-vertical",
    normalRange: "Genetic-based",
    lowEffects: "Stunted growth from malnutrition or disease",
    highEffects: "Rare, may indicate growth disorders"
  },
  bmi: {
    icon: "bi-graph-up",
    normalRange: "18.5–24.9",
    lowEffects: "Underweight: weak immunity, infertility",
    highEffects: "Overweight: metabolic syndrome, diabetes"
  },
  waistToHipRatio: {
    icon: "bi-person",
    normalRange: "Men < 0.9, Women < 0.85",
    lowEffects: "Generally healthy",
    highEffects: "Central obesity: heart disease, stroke risk"
  },
  bodyFatPercentage: {
    icon: "bi-person-fill",
    normalRange: "Men: 10–20%, Women: 18–28%",
    lowEffects: "Hormonal imbalance, fatigue, fertility issues",
    highEffects: "Obesity, insulin resistance, cardiovascular risk"
  },
  bmr: {
    icon: "bi-fire",
    normalRange: "Varies by age, weight, height, gender",
    lowEffects: "Weight gain, fatigue, slow metabolism",
    highEffects: "Weight loss, high appetite"
  },
  electrolytes: {
    sodium: {
      icon: "bi-droplet-half",
      normalRange: "135–145",
      lowEffects: "Hyponatremia: confusion, seizures",
      highEffects: "Hypernatremia: dehydration, coma"
    },
    potassium: {
      icon: "bi-lightning",
      normalRange: "3.5–5.1",
      lowEffects: "Weak muscles, irregular heartbeat",
      highEffects: "Heart failure, arrhythmia"
    }
  },
  cholesterol: {
    // total: {
    //   icon: "bi-capsule",
    //   normalRange: "<200",
    //   lowEffects: "Rarely problematic",
    //   highEffects: "Plaque buildup, atherosclerosis"
    // },
    hdl: {
      icon: "bi-shield-check",
      normalRange: ">60",
      lowEffects: "Increased heart disease risk",
      highEffects: "Protective"
    },
    ldl: {
      icon: "bi-shield-exclamation",
      normalRange: "<100",
      lowEffects: "No significant harm",
      highEffects: "Arterial blockage, heart disease"
    }
  },
  hemoglobin: {
    icon: "bi-droplet-fill",
    normalRange: "Men: 13.8–17.2, Women: 12.1–15.1",
    lowEffects: "Anemia, fatigue, breathlessness",
    highEffects: "Clot risk, thickened blood"
  },
  ecg: {
    icon: "bi-heart",
    normalRange: "Normal sinus rhythm",
    lowEffects: "Bradycardia, conduction blocks",
    highEffects: "Arrhythmia, tachycardia"
  },
  lungCapacity: {
    icon: "bi-cloud",
    normalRange: "Varies (spirometry values)",
    lowEffects: "Asthma, COPD, poor breathing",
    highEffects: "Athlete's adaptation, rarely harmful"
  },
  vo2Max: {
    icon: "bi-speedometer2",
    normalRange: "30–60",
    lowEffects: "Poor endurance, low stamina",
    highEffects: "High fitness level, improved endurance"
  },
  boneDensity: {
    icon: "bi-bounding-box",
    normalRange: "> -1.0",
    lowEffects: "Osteopenia, osteoporosis, fracture risk",
    highEffects: "Dense bones, may indicate disease (rare)"
  },
  visceralFatLevel: {
    icon: "bi-diagram-3",
    normalRange: "<13",
    lowEffects: "Usually safe unless underweight",
    highEffects: "High risk of diabetes, stroke, fatty liver"
  }
};

	return(
		<>
			<section className=''>
				<div className='measure-grid  '>
				{Object.entries(humanBodyMeasures).map(([key, ele]) => {
  const isNested = Object.values(ele).some(value => typeof value === 'object' && value !== null && !Array.isArray(value));

  if (isNested) {
     
    return (
      <div key={key} className="measure-grid-column">
        
        {Object.entries(ele).map(([subKey, data]) => (
         
          <div key={subKey} className='w-100 d-flex justify-content-center align-content-center gap-2 w-auto'>
           <div className="measure-title">{key}</div>
           <div className='d-flex justify-content-center align-items-center'>
            <div className="measure-icon"><i className={data.icon}></i></div></div>
            <div className="measure-content">
              <p>{data.normalRange}</p>
              <p>{data.lowEffects}</p>
              <p>{data.highEffects}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    // Render flat object directly
    return (
      <div key={key} className="d-flex justify-content-center align-content-center gap-2">
        <div className="measure-title"><h2>{key}</h2></div>
         <div className='d-flex justify-content-center align-items-center'><div className="measure-icon text-center">
         <i className={ele.icon}></i>
         </div>
         </div>
        
          <div className="measure-content">
            <p>{ele.normalRange}</p>
            <p>{ele.lowEffects}</p>
            <p>{ele.highEffects}</p>
          </div>
      </div>
    );
  }
})}

  </div>


				 
			</section>
		</>
  )
}
export default BodyMeasures;