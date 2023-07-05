import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiper.css";

function getImageUrl(name: string) {
  return new URL(`../../assets/slider/${name}.jpg`, import.meta.url).href;
}

const images: string[] = [];
for (let i = 1; i < 9; i++) {
  images.push(getImageUrl(`Ka Slider (${i})`));
}

// import required modules
import { EffectCards } from "swiper";

export default function Cards() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="cardSwiper"
      >
        {images.map((imageSRC, index) => (
          <SwiperSlide key={index} className="cardSlide">
            <Image
              className="cardImage"
              src={imageSRC}
              alt="Örnek fotoğraflar"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
