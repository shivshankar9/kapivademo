import ProductListSec from "@/components/common/ProductListSec";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Kapiva Amla Juice",
    srcUrl: "/images/shila1.png",
    gallery: [
      "/images/shila1.png",
      "/images/shila1.png",
      "/images/shila1.png",
    ],
    price: 299,
    discount: { amount: 50, percentage: 15 },
    rating: 4.7,
  },
  {
    id: 2,
    title: "Kapiva Aloe Vera Juice",
    srcUrl: "/images/shila1.png",
    gallery: ["/images/shila1.png"],
    price: 349,
    discount: { amount: 70, percentage: 20 },
    rating: 4.5,
  },
  {
    id: 3,
    title: "Kapiva Giloy Juice",
    srcUrl: "/images/shila1.png",
    gallery: ["/images/shila1.png"],
    price: 319,
    discount: { amount: 40, percentage: 12 },
    rating: 4.8,
  },
  {
    id: 4,
    title: "Kapiva Dia Free Juice",
    srcUrl: "/images/kapiva-dia-free-juice.png",
    gallery: [
      "/images/kapiva-dia-free-juice.png",
      "/images/kapiva-dia-free-juice-2.png",
    ],
    price: 399,
    discount: { amount: 60, percentage: 15 },
    rating: 4.6,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Kapiva Pure Tulsi Ark",
    srcUrl: "/images/kapiva-tulsi-ark.png",
    gallery: [
      "/images/kapiva-tulsi-ark.png",
      "/images/kapiva-tulsi-ark-2.png",
    ],
    price: 289,
    discount: { amount: 40, percentage: 12 },
    rating: 4.9,
  },
  {
    id: 6,
    title: "Kapiva Biotin Gummies",
    srcUrl: "/images/kapiva-biotin-gummies.png",
    gallery: [
      "/images/kapiva-biotin-gummies.png",
      "/images/kapiva-biotin-gummies-2.png",
    ],
    price: 599,
    discount: { amount: 100, percentage: 20 },
    rating: 4.7,
  },
  {
    id: 7,
    title: "Kapiva Apple Cider Vinegar",
    srcUrl: "/images/kapiva-apple-cider-vinegar.png",
    gallery: [
      "/images/kapiva-apple-cider-vinegar.png",
      "/images/kapiva-apple-cider-vinegar-2.png",
    ],
    price: 449,
    discount: { amount: 75, percentage: 15 },
    rating: 4.5,
  },
  {
    id: 8,
    title: "Kapiva Himalayan Shilajit Resin",
    srcUrl: "/images/kapiva-shilajit.png",
    gallery: [
      "/images/kapiva-shilajit.png",
      "/images/kapiva-shilajit-2.png",
    ],
    price: 999,
    discount: { amount: 200, percentage: 20 },
    rating: 4.8,
  },
];
export const relatedProductData: Product[] = [
  {
    id: 9,
    title: "Kapiva Organic Wheatgrass Juice",
    srcUrl: "/images/kapiva-wheatgrass-juice.png",
    gallery: [
      "/images/kapiva-wheatgrass-juice.png",
      "/images/kapiva-wheatgrass-juice-2.png",
    ],
    price: 329,
    discount: { amount: 50, percentage: 13 },
    rating: 4.6,
  },
  {
    id: 10,
    title: "Kapiva Triphala Juice",
    srcUrl: "/images/kapiva-triphala-juice.png",
    gallery: ["/images/kapiva-triphala-juice.png"],
    price: 299,
    discount: { amount: 40, percentage: 12 },
    rating: 4.7,
  },
  {
    id: 11,
    title: "Kapiva Neem Juice",
    srcUrl: "/images/kapiva-neem-juice.png",
    gallery: ["/images/kapiva-neem-juice.png"],
    price: 289,
    discount: { amount: 35, percentage: 10 },
    rating: 4.5,
  },
  {
    id: 12,
    title: "Kapiva Ashwagandha Gummies",
    srcUrl: "/images/kapiva-ashwagandha-gummies.png",
    gallery: [
      "/images/kapiva-ashwagandha-gummies.png",
      "/images/kapiva-ashwagandha-gummies-2.png",
    ],
    price: 499,
    discount: { amount: 90, percentage: 18 },
    rating: 4.8,
  },
];


export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Rohit S.",
    content:
      '"Kapiva Amla Juice is a game-changer! My hair and skin feel healthier, and my digestion has improved significantly. Highly recommend!"',
    rating: 5,
    date: "March 15, 2024",
  },
  {
    id: 2,
    user: "Sneha M.",
    content:
      '"The Aloe Vera Juice is super refreshing and has done wonders for my gut health. I feel lighter and more energetic every morning!"',
    rating: 5,
    date: "March 18, 2024",
  },
  {
    id: 3,
    user: "Arjun K.",
    content:
      '"Giloy Juice is perfect for immunity. I used to fall sick often, but ever since I started drinking this daily, I feel much stronger!"',
    rating: 5,
    date: "March 20, 2024",
  },
  {
    id: 4,
    user: "Meera D.",
    content:
      '"Kapiva Tulsi Ark is a natural immunity booster! It has helped me stay healthy, and I love how pure it tastes!"',
    rating: 5,
    date: "March 22, 2024",
  },
  {
    id: 5,
    user: "Varun P.",
    content:
      '"Biotin Gummies are the best for hair and nails. Within weeks, I noticed a difference in my hair strength and shine!"',
    rating: 5,
    date: "March 25, 2024",
  },
  {
    id: 6,
    user: "Ananya R.",
    content:
      '"Shilajit Resin is truly effective! My energy levels have drastically improved, and I feel more active throughout the day."',
    rating: 5,
    date: "March 27, 2024",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="New Products"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="Top Selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
