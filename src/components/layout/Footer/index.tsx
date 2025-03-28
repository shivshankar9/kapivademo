import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { SocialNetworks } from "./footer.types";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/KapivaAyurveda/",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/kapiva/",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    url: "https://twitter.com/KapivaAyurveda",
  },
  {
    id: 4,
    icon: <FaYoutube />,
    url: "https://www.youtube.com/c/Kapiva",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F7F7F7]"></div>
        <div className="px-4">
          <NewsLetterSection />
        </div>
      </div>
      <div className="pt-8 md:pt-[50px] bg-[#F7F7F7] px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1
                className={cn([
                  integralCF.className,
                  "text-[28px] lg:text-[32px] mb-6",
                ])}
              >
                KAPIVA
              </h1>
              <p className="text-black/60 text-sm mb-9">
                Ayurveda for modern life. Experience the power of natural wellness with Kapiva’s science-backed products.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-white hover:bg-green-600 hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-9 lg:pl-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-medium mb-3">About Us</h3>
                  <ul className="text-sm text-black/60">
                    <li>
                      <Link href="/about">Our Story</Link>
                    </li>
                    <li>
                      <Link href="/science">Our Science</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Shop</h3>
                  <ul className="text-sm text-black/60">
                    <li>
                      <Link href="/products/juices">Ayurvedic Juices</Link>
                    </li>
                    <li>
                      <Link href="/products/ghee">Ghee & Superfoods</Link>
                    </li>
                    <li>
                      <Link href="/products/herbal-tea">Herbal Teas</Link>
                    </li>
                    <li>
                      <Link href="/products/supplements">Supplements</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Support</h3>
                  <ul className="text-sm text-black/60">
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li>
                    <li>
                      <Link href="/shipping-policy">Shipping Policy</Link>
                    </li>
                    <li>
                      <Link href="/returns">Returns & Refunds</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Legal</h3>
                  <ul className="text-sm text-black/60">
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              Kapiva © {new Date().getFullYear()}. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-3">
              <Image src="/icons/Visa.svg" width={33} height={20} alt="Visa" />
              <Image src="/icons/mastercard.svg" width={33} height={20} alt="Mastercard" />
              <Image src="/icons/paytm.svg" width={33} height={20} alt="Paytm" />
              <Image src="/icons/razorpay.svg" width={33} height={20} alt="Razorpay" />
              <Image src="/icons/cod.svg" width={33} height={20} alt="Cash on Delivery" />
            </div>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
