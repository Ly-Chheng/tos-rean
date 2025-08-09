import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider({ banners }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation // Enabled navigation arrows
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: true }}
      className="w-full h-[110px] sm:h-[150px] md:h-[250px] rounded-lg mb-6"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img
            src={banner.image}
            alt={`Banner ${banner.id}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;