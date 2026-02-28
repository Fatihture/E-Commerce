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
        className="w-full h-[600px] md:h-[700px] lg:h-[800px]" // Yüksekliği LG ekranlar için biraz daha artırdım
      >
        {/* Ana Görsel Slide'ı (Turkuaz Arka Plan ve Kadın) */}
        <SwiperSlide>
          {/* Arka plan görseli için dış kapsayıcı (bg-cover ile tam kaplar) */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Home/slider.jpg')" }} // <-- KENDİ ARKA PLAN GÖRSEL YOLUNUZLA DEĞİŞTİRİN
          >
            {/* İçerik ve Kadın Görseli Düzeni:
                Mobilde: Alt alta (flex-col), metin üstte
                MD ve LG'de: Yan yana (flex-row), metin solda, kadın sağda */}
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between max-w-7xl mx-auto px-10 lg:px-20 py-10">
              
              {/* Metin İçerik Bloğu: Sol Taraf (Masaüstü) */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left text-white w-full md:w-3/5 lg:w-1/2 gap-y-6 md:gap-y-8 mt-10 md:mt-0">
                <h5 className="font-bold tracking-widest text-sm md:text-base">
                  SUMMER 2020
                </h5>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  NEW COLLECTION
                </h1>
                <h4 className="text-lg md:text-xl lg:text-2xl max-w-md">
                  We know how large objects will act, but things on a small scale.
                </h4>
                <button className="bg-[#2DC071] hover:bg-green-600 text-white font-bold py-3 px-10 lg:px-12 rounded text-xl lg:text-2xl transition-colors">
                  SHOP NOW
                </button>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Örnek Slayt (Diğer içerikleriniz) */}
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