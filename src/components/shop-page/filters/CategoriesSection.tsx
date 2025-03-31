import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
    {
      title: "Juices",
      slug: "/shop?category=juices",
    },
    {
      title: "Herbal Powders",
      slug: "/shop?category=herbal-powders",
    },
    {
      title: "Gummies",
      slug: "/shop?category=gummies",
    },
    {
      title: "Diabetes Care",
      slug: "/shop?category=diabetes-care",
    },
    {
      title: "Weight Management",
      slug: "/shop?category=weight-management",
    },
    {
      title: "Immunity Boosters",
      slug: "/shop?category=immunity-boosters",
    },
    {
      title: "Hair & Skin Care",
      slug: "/shop?category=hair-skin-care",
    },
    {
      title: "Digestive Health",
      slug: "/shop?category=digestive-health",
    },
    {
      title: "Women’s Wellness",
      slug: "/shop?category=womens-wellness",
    },
  ];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
