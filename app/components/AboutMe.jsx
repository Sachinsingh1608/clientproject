"use client";


import dynamic from "next/dynamic";

const AnimatedTestimonials = dynamic(
  () =>
    import("@/components/ui/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        Loading testimonials...
      </div>
    ),
  }
);

export default function AboutMe() {
  const testimonials = [
    {
      quote:
        "My journey into technology began with curiosity and a desire to understand how the web works. Over time, coding turned into a passion for teaching—simplifying complex ideas and helping learners grow with confidence through real-world skills.",
      name: "About Me",
      designation: "Educator · Mentor",
      src: assets.logo, // ✅ FIXED
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="mt-32 px-4">
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
