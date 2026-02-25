import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Mes-technos/MesTechnos.css";

const technos = [
  {
    id: 1,
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
];

function MesTechnos() {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">MES TECHNOS</h2>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        {technos.map((tech) => (
          <SwiperSlide key={tech.id}>
            <div className="card-gradient-border">
              <div className="card-content">
                <img src={tech.img} alt={tech.name} className="tech-icon" />
                <p className="tech-name">{tech.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MesTechnos;
