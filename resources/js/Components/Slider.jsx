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
      className="w-full h-[150px] sm:h-[170px] md:h-[300px] lg:h[350px] px-2 py-2"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img
            src={banner.image}
            alt={`Banner ${banner.id}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;

