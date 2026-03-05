import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Mes-technos/MesTechnos.css";

import Reacticone from "../../assets/Mes-technos-img/React-icon.svg";
import Css from "../../assets/Mes-technos-img/css-3.svg";
import Express from "../../assets/Mes-technos-img/express-109.svg";
import giticone from "../../assets/Mes-technos-img/git-icon.svg";
import Githubicone from "../../assets/Mes-technos-img/github-icon-1.svg";
import Html from "../../assets/Mes-technos-img/html-1.svg";
import Javascript from "../../assets/Mes-technos-img/javascript-1.svg";
import Mysqlicone from "../../assets/Mes-technos-img/mysql-logo-pure.svg";
import NodeJs from "../../assets/Mes-technos-img/nodejs-icon.svg";
import Typescript from "../../assets/Mes-technos-img/typescript.svg";

const technos = [
  { id: 1, name: "HTML", img: [Html] },
  { id: 2, name: "CSS", img: [Css] },
  { id: 3, name: "JavaScript", img: [Javascript] },
  { id: 4, name: "TypeScript", img: [Typescript] },
  { id: 5, name: "NodeJS", img: [NodeJs] },
  { id: 6, name: "MySQL", img: [Mysqlicone] },
  { id: 7, name: "REACT", img: [Reacticone] },
  { id: 8, name: "ExpressJS", img: [Express] },
  { id: 9, name: "GIT / GITHUB", img: [giticone, Githubicone] },
];

function MesTechnos() {
  return (
    <div className="technos-wrapper">
      <h2 className="technos-title">MES TECHNOS</h2>

      <div className="mobile-carousel">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="mySwiper"
        >
          {technos.map((tech) => (
            <SwiperSlide key={`mobile-${tech.id}`}>
              <div className="card-gradient-border">
                <div className="card-content">
                  <div className="tech-icons-container">
                    {tech.img.map((icon) => (
                      <img
                        key={icon}
                        src={icon}
                        alt={tech.name}
                        className="tech-icon"
                      />
                    ))}
                  </div>
                  <p className="tech-name">{tech.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="desktop-grid">
        {technos.map((tech) => (
          <div className="card-gradient-border" key={`desktop-${tech.id}`}>
            <div className="card-content">
              <div className="tech-icons-container">
                {tech.img.map((icon) => (
                  <img
                    key={icon}
                    src={icon}
                    alt={tech.name}
                    className="tech-icon"
                  />
                ))}
              </div>
              <p className="tech-name">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MesTechnos;
