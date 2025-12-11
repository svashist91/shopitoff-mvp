"use client";

import React from "react";

const boutiques = [
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "M&S", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/MarksAndSpencer.svg" },
  { name: "Mango", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Mango_logo.svg" },
  { name: "GAP", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Gap_logo.svg" },
  { name: "UNIQLO", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/UNIQLO_logo.svg" },
  { name: "Old Navy", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Old_Navy_Logo.svg" },
  { name: "Macy's", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Macy%27s_logo.svg" },
  { name: "American Eagle Outfitters", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/American_Eagle_Outfitters_logo.svg" },
  { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Tommy_Hilfiger_logo.svg" },
  { name: "ONLY", logo: "https://cdn.freebiesupply.com/logos/large/2x/only-1-logo-png-transparent.png" },
  { name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
];

const shopHumans = [
  { label: "Men" },
  { label: "Women" },
  { label: "Kids" },
];

const categories = [
  {
    label: "Apparel",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Shoes",
    image:
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
  },
];

const recentlyViewed = [
  {
    title: "Vintage Levis",
    store: "Turnabout",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: "$89",
  },
  {
    title: "Silk Dress",
    store: "8th & Main",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    price: "$120",
  },
  {
    title: "Logo Sneakers",
    store: "Gravity Pope",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef11?auto=format&fit=crop&w=400&q=80",
    price: "$105",
  },
  {
    title: "Minimal Pendant",
    store: "Little & Much",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: "$49",
  },
];

function NavBar() {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          {/* User Profile Icon */}
          <span className="inline-flex items-center justify-center rounded-full w-9 h-9 bg-gray-100">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="7" r="4" stroke="currentColor" />
              <path
                d="M4 20c0-3 3-6 8-6s8 3 8 6"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {/* Cart Icon */}
          <span className="inline-flex items-center justify-center rounded-full w-9 h-9 bg-gray-100">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="17" cy="21" r="1" />
              <path
                d="M5.5 5H21l-1.68 8.39a2 2 0 01-1.97 1.61H8.16a2 2 0 01-1.97-1.61L5 3H3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <div className="text-right flex flex-col">
          <span className="font-bold text-xl sm:text-2xl text-gray-900">ShopItOff</span>
          <span className="text-xs sm:text-sm text-gray-500 font-medium sm:mt-0.5">
            Vancouver, Canada
          </span>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-10 sm:py-16 bg-white">
      <div className="w-full max-w-2xl flex flex-col items-center gap-2">
        <form className="relative w-full">
          <input
            type="text"
            placeholder="Search for local fashion..."
            className="w-full pl-5 pr-14 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 bg-gray-50 text-lg"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-3 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-900 transition"
            aria-label="Search"
          >
            {/* Search Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" />
              <line
                x1="16.65"
                y1="16.65"
                x2="21"
                y2="21"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="mt-6">
        <Boutiques />
      </div>
    </section>
  );
}

function Boutiques() {
  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {boutiques.map((boutique) => (
        <a
          href="#"
          key={boutique.name}
          className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
        >
          {boutique.name}
        </a>
      ))}
    </div>
  );
}

function ShopByCategory() {
  return (
    <section className="py-7 md:py-10 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-bold text-xl mb-4 text-gray-900">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {categories.map(({ label, image }) => (
            <a
              href="#"
              key={label}
              className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition border flex flex-col items-center"
            >
              <div className="aspect-square w-full bg-gray-100">
                <img
                  src={image}
                  alt={label}
                  className="object-cover w-full h-full group-hover:scale-105 transition"
                />
              </div>
              <span className="py-3 font-medium text-gray-800">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentlyViewed() {
  return (
    <section className="py-7 md:py-10 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-bold text-xl mb-4 text-gray-900">Recently Viewed</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {recentlyViewed.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-white shadow-sm hover:shadow transition flex flex-col"
            >
              <div className="aspect-square w-full rounded-t-xl overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="px-3 py-3 flex flex-col flex-1">
                <span className="font-medium text-gray-900">{item.title}</span>
                <span className="text-gray-500 text-sm">{item.store}</span>
                <span className="mt-2 font-semibold text-gray-900">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <NavBar />
      <HeroSection />
      <ShopByHumans />
      <ShopByCategory />
      <RecentlyViewed />
      <div className="h-10" />
    </main>
  );
}
function ShopByHumans() {
  // Add photo URLs to match the image design
  const shopHumansDetailed = [
    {
      label: "Women",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400&facepad=4",
    },
    {
      label: "Men",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=4",
    },
    {
      label: "Kids",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=4",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-bold text-xl mb-6 text-gray-900">
          Shop by humans
        </h2>
        <div className="flex flex-row justify-center gap-8">
          {shopHumansDetailed.map((human) => (
            <div key={human.label} className="flex flex-col items-center flex-1">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shadow object-cover">
                <img
                  src={human.image}
                  alt={human.label}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
              <span className="mt-4 font-medium text-gray-600 text-lg">
                {human.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
