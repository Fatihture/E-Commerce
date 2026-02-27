import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section (Slider) */}
      <Slider />

      {/* Bestseller Products Section */}
      <section className="flex flex-col items-center w-full max-w-7xl py-20 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-10">BESTSELLER PRODUCTS</h2>
        <div className="flex flex-wrap justify-center w-full">
          {/* Örnek Ürün Kartları */}
          <ProductCard image="figma-link-1.jpg" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="figma-link-2.jpg" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="figma-link-3.jpg" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="figma-link-4.jpg" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
        </div>
      </section>
    </div>
  );    
}