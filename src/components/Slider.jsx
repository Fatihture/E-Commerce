import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[500px] md:h-[700px]"
      >
        {/* Slayt 1 (Figma'daki ana görsel) */}
        <SwiperSlide>
          {/* Mobile First: Mobilde flex-col (alt alta), md ekranlarda içerik sola dayalı. */}
          {/* Arka plan şimdilik Figma'daki gibi turkuaz. İstersen buraya bg-image de verebilirsin. */}
          <div className="w-full h-full flex flex-col justify-center items-center md:items-start text-center md:text-left bg-[#23A6F0] px-10 md:px-32">
            <h5 className="text-white font-bold tracking-widest mb-6 md:mb-8 text-sm md:text-base">
              SUMMER 2020
            </h5>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              NEW COLLECTION
            </h1>
            <h4 className="text-white text-lg md:text-xl mb-8 max-w-sm">
              We know how large objects will act, but things on a small scale.
            </h4>
            <button className="bg-[#2DC071] hover:bg-green-600 text-white font-bold py-3 px-10 rounded text-xl transition-colors">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>

        {/* Slayt 2 (Örnek kopya) */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center bg-slate-800 px-10">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 text-center">
              WINTER IS COMING
            </h1>
            <p className="text-gray-300 text-lg mb-8 text-center">
              Check out our new winter coats.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}