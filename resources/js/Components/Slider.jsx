import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  "https://marketplace.canva.com/EAFykctpvKc/1/0/1600w/canva-green-bold-welcome-to-classroom-banner-PMuOP0_uHdg.jpg",
  "https://marketplace.canva.com/EAFE52OF_eA/1/0/1600w/canva-blue-illustrated-welcome-to-our-classroom-banner-ee10Bxg8718.jpg",
  "https://marketplace.canva.com/EAFykctpvKc/1/0/1600w/canva-green-bold-welcome-to-classroom-banner-PMuOP0_uHdg.jpg",
];

function Slider() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: true }}
                className=" w-full h-[110px] sm:h-[150px] md:h-[250px] rounded-lg mb-6"
            >
                {banners.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={url}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;
