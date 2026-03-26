import { Link } from 'react-router-dom';

export default function ProductCard({ image, title, department, oldPrice, newPrice }) {
  return (
    <div className="flex flex-col w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      
      {/* 1. RESİM ALANI (Tam genişlik ve sabit oran) */}
      {/* aspect-[3/4] ile resmin her zaman dikey bir dikdörtgen olmasını sağlıyoruz */}
      <div className="w-full aspect-[3/4] sm:h-[300px] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top" 
        />
      </div>
      
      {/* 2. İÇERİK ALANI */}
      <div className="flex flex-col items-center p-6 gap-3 text-center flex-grow justify-between">
        
        <div className="flex flex-col items-center gap-2 w-full">
          {/* Ürün İsmi (truncate: Yazı uzunsa alt satıra geçmek yerine sonuna ... koyar) */}
          <h5 className="text-base font-bold text-slate-800 w-full truncate" title={title}>
            {title}
          </h5>
          
          {/* Departman / Açıklama */}
          <p className="text-sm font-bold text-gray-500 w-full truncate" title={department}>
            {department}
          </p>
        </div>
        
        {/* Fiyatlar */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-400 font-bold text-base line-through">{oldPrice}</span>
          {/* 2. fotoğraftaki o tatlı yeşil renk kodu: #23856D */}
          <span className="text-[#23856D] font-bold text-base">{newPrice}</span>
        </div>
        
        {/* Renk Seçenekleri (Sabit görsel) */}
        <div className="flex items-center gap-1.5 mt-2">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
          <span className="w-4 h-4 rounded-full bg-[#2DC071]"></span>
          <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
          <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
        </div>

      </div>
    </div>
  );
}