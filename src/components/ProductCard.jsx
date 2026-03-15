import { Link } from 'react-router-dom';

export default function ProductCard({ image, title, department, oldPrice, newPrice, id = 1 }) {
  // id parametresi ekledik, şimdilik varsayılan olarak 1 atadık.
  // İleride API'den gerçek ID'ler geldiğinde linkler /product/123 gibi dinamik olacak.
  return (
    <Link to={`/product/${id}`} className="flex flex-col items-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 group cursor-pointer">
      {/* Resim */}
      <div className="w-full overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      {/* Metinler */}
      <h5 className="font-bold text-slate-800 text-center">{title}</h5>
      <p className="text-sm text-gray-500 mb-2 font-bold">{department}</p>
      {/* Fiyatlar */}
      <div className="flex gap-2 mb-3">
        <span className="text-gray-400 font-bold line-through">{oldPrice}</span>
        <span className="text-[#23856D] font-bold">{newPrice}</span>
      </div>
      {/* Renk Noktaları */}
      <div className="flex gap-1">
        <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
        <div className="w-4 h-4 rounded-full bg-[#2DC071]"></div>
        <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
        <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
      </div>
    </Link>
  );
}