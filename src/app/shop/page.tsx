import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";

import { FiSliders } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";

export default function ShopPage() {
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          {/* Filters Section */}
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            
          </div>

          {/* Product Display Section */}
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">New Arrivals</h1>
               
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {[...relatedProductData.slice(1, 4), ...newArrivalsData.slice(1, 4), ...topSellingData.slice(1, 4)].map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
