"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Leslie Alexander",
    username: "@lesliealexander",
    text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Lindsay Walton",
    username: "@lindsaywalton",
    text: "Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Whitney Francis",
    username: "@whitneyfrancis",
    text: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Michael Foster",
    username: "@michaelfoster",
    text: "Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Courtney Henry",
    username: "@courtneyhenry",
    text: "Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Leonard Krasner",
    username: "@leonardkrasner",
    text: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const loadMore = () => {
    setVisibleTestimonials((prev) => prev + 3);
  };

  return (
    <section
      className={`px-6 pt-8 pb-24 sm:pb-32 lg:px-8 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark`}
    >
      <div className="mx-auto max-w-4xl text-center">
      <h2
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-7 text-white dark:text-linkDark underline decoration-[#D64D0C] font-compacta"
  style={{ textUnderlineOffset: '12px' }} 
>
  Testimonios
</h2>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-center text-lg font-medium sm:text-xl">
          Elegí un plan accesible con las mejores características para atraer a tu audiencia y aumentar tus ventas.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
          <div
            key={index}
            className="relative rounded-lg bg-cardBgLight p-6 shadow-lg dark:bg-cardBgDark"
          >
            <p className="text-lg italic">"{testimonial.text}"</p>
            <div className="mt-6 flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm opacity-75">{testimonial.username}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleTestimonials < testimonials.length && (
        <div className="mt-8 text-center">
      <button
  onClick={loadMore}
  className="rounded-md bg-[#D64D0C] px-4 py-2 text-white transition-transform duration-300 hover:-translate-y-1 shadow-md"
>
  Ver más ➕
</button>
        </div>
      )}
    </section>
  );
}
