export default function ProductCard({ image, title, department, oldPrice, newPrice }) {
  return (
    <div className="flex flex-col items-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      {/* Resim */}
      <img src={image} alt={title} className="w-full h-auto object-cover mb-4" />
      {/* Metinler */}
      <h5 className="font-bold text-slate-800 text-center">{title}</h5>
      <p className="text-sm text-gray-500 mb-2 font-bold">{department}</p>
      {/* Fiyatlar */}
      <div className="flex gap-2 mb-3">
        <span className="text-gray-400 font-bold line-through">{oldPrice}</span>
        <span className="text-green-600 font-bold">{newPrice}</span>
      </div>
      {/* Renk Noktaları */}
      <div className="flex gap-1">
        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
        <div className="w-4 h-4 rounded-full bg-slate-800"></div>
      </div>
    </div>
  );
}