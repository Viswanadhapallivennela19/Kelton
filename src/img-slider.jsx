import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const cardData = [
  {
    image: "/vitamin-a.jpg",
    title: "Vitamin A",
    desc: "Healthy eyes & body defense",
    points: [
      "Keeps your eyesight strong, especially at night.",
      "Helps your body fight off illnesses and infections.",
      "Supports healthy growth in children.",
      "Keeps your skin smooth and clear.",
      "Protects your lungs and breathing system."
    ]
  },
  {
    image: "/b1.jpg",
    title: "Vitamin B1 (Thiamine)",
    desc: "Boosts energy & nerves",
    points: [
      "Helps your body turn food into energy.",
      "Keeps your nerves and muscles working properly.",
      "Improves focus and brain function.",
      "Supports good digestion and appetite.",
      "Keeps your heart rhythm steady."
    ]
  },
  {
    image: "/b2.jpg",
    title: "Vitamin B2 (Riboflavin)",
    desc: "Energy & glowing skin",
    points: [
      "Helps release energy from the food you eat.",
      "Keeps your skin healthy and fresh.",
      "Protects your eyes from strain and tiredness.",
      "Reduces mouth sores and cracked lips.",
      "Supports healthy hair and nail growth."
    ]
  },
  {
    image: "/b3.jpg",
    title: "Vitamin B3 (Niacin)",
    desc: "Brain, skin & energy support",
    points: [
      "Boosts your energy by helping process food.",
      "Supports brain health and focus.",
      "Keeps your skin smooth and protected.",
      "Improves blood flow and circulation.",
      "May help lower bad cholesterol levels."
    ]
  },
  {
    image: "/b5.jpg",
    title: "Vitamin B5 (Pantothenic Acid)",
    desc: "Fights stress & supports energy",
    points: [
      "Helps turn food into energy your body can use.",
      "Supports your body in handling stress better.",
      "Keeps your skin soft and clear.",
      "Supports the health of your nerves and brain.",
      "Helps your body make red blood cells."
    ]
  },
  {
    image: "/b6.jpg",
    title: "Vitamin B6",
    desc: "Mood, brain & immune boost",
    points: [
      "Helps your brain stay sharp and focused.",
      "Supports better mood and reduces stress.",
      "Boosts your immune system to fight illness.",
      "Reduces tiredness and fatigue.",
      "Supports healthy blood by helping make red cells."
    ]
  },
  {
    image: "/b7.jpg",
    title: "Vitamin B7 (Biotin)",
    desc: "Hair, skin & energy care",
    points: [
      "Strengthens hair and may reduce hair fall.",
      "Keeps your nails strong and healthy.",
      "Gives your skin a smooth, fresh look.",
      "Helps your body turn food into energy.",
      "Supports brain and nervous system function."
    ]
  },
  {
    image: "/b9.jpg",
    title: "Vitamin B9 (Folate)",
    desc: "Cell growth & pregnancy health",
    points: [
      "Helps your body make new cells every day.",
      "Very important during pregnancy for baby’s brain and spine.",
      "Reduces tiredness and fatigue.",
      "Supports heart health by balancing homocysteine.",
      "Keeps your brain sharp and memory strong."
    ]
  },
  {
    image: "/b12.jpg",
    title: "Vitamin B12",
    desc: "Nerves, brain & red blood cells",
    points: [
      "Supports healthy nerves and brain function.",
      "Helps your body make red blood cells.",
      "Keeps your energy levels high.",
      "Improves focus and mood.",
      "Prevents tiredness and numbness in hands and feet."
    ]
  },
  {
    image: "/vitamin-c.jpg",
    title: "Vitamin C",
    desc: "Immunity & skin glow",
    points: [
      "Strengthens your immune system to fight illness.",
      "Brightens your skin by boosting collagen.",
      "Helps wounds and cuts heal faster.",
      "Protects your body from damage by pollution.",
      "Helps your body absorb more iron from food."
    ]
  },
  {
    image: "/vitamin-d.jpg",
    title: "Vitamin D",
    desc: "Strong bones & mood lift",
    points: [
      "Helps your body absorb calcium for strong bones.",
      "Keeps your teeth strong and healthy.",
      "Boosts mood and may reduce depression.",
      "Strengthens your immune system.",
      "Supports muscle strength and function."
    ]
  },
  {
    image: "/vitamine.jpg",
    title: "Vitamin E",
    desc: "Skin repair & antioxidant",
    points: [
      "Protects your skin from damage and dryness.",
      "Keeps your cells safe from harmful substances.",
      "Slows down signs of aging.",
      "Boosts your immune system.",
      "Helps heal skin scars and marks."
    ]
  },
  {
    image: "/vitamin-k.jpg",
    title: "Vitamin K",
    desc: "Blood clotting & bone health",
    points: [
      "Helps your blood clot properly when you get a cut.",
      "Keeps your bones strong and healthy.",
      "May help prevent bone fractures.",
      "Supports heart health by managing calcium.",
      "Helps wounds heal faster by reducing bleeding."
    ]
  }
];

const CardSlider = () => {
  return (
    < >
    <div className="card-slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={2} // Show 2 cards always
        navigation
        pagination={{ clickable: true }}
        className=""
      >
        {cardData.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div className="vita-card shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col h-[550px]">
              <img
                src={card.image}
                alt={card.title}
                className="card-slider-img"
                 
              />
              <div className="pt-2 py-3 px-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.desc}
                </h3>
                 
                <ul className="list-disc list-inside  text-sm space-y-1 flex-grow">
                  {card.points.map((data, ind) => (
                    <li key={ind} className='ls-7'><i className="bi bi-patch-check-fill secondary-color"></i> {data}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};


export default CardSlider;