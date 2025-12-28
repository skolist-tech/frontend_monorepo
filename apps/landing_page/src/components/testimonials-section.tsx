import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  school: string;
  location: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Jaya Agarwal",
    role: "Principal",
    school: "Springfield International School",
    location: "California, USA",
    quote:
      "After discussing the concept with the founders, we found the idea compelling and well thought out. We're keen to pilot this and see how it works in a real classroom setting",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Academic Director",
    school: "Delhi Public School",
    location: "New Delhi, India",
    quote:
      "During the pilot, Skolist has helped us better visualize student progress beyond test scores. We see potential in using these insights to guide more focused classroom interventions",
  },
  {
    id: 3,
    name: "Manoj Gandhi",
    role: "Head of Academics",
    school: "International Academy",
    location: "Madrid, Spain",
    quote:
      "Even at an early stage, Skolist is helping teachers identify specific areas where students struggle. The pilot feedback has been encouraging, and we're interested in how it evolves",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Know What Other Schools Have To Say!
        </h2>

        <div className="relative">
          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] px-3"
                >
                  <div className="bg-white rounded-lg shadow-md border hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] h-64 flex items-center justify-center p-8">
                      <p className="text-white text-lg text-center leading-relaxed">
                        &quot;{t.quote}&quot;
                      </p>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {t.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t.role}
                      </p>
                      {/* <p className="text-sm text-gray-500">
                        {t.school}, {t.location}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow border hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow border hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === selectedIndex
                  ? "w-8 bg-[#0A1F44]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
