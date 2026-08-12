import { Heart, Sparkles, Star, Flower } from 'lucide-react';

const features = [
  {
    id: 'personalised-care',
    icon: Heart,
    title: 'Personalised Care',
    description:
      'Every treatment begins with understanding your individual needs, preferences and desired results.',
  },
  {
    id: 'expert-artistry',
    icon: Star,
    title: 'Expert Artistry',
    description:
      'Thoughtful techniques delivered by experienced beauty professionals dedicated to their craft.',
  },
  {
    id: 'premium-products',
    icon: Sparkles,
    title: 'Premium Products',
    description:
      'Carefully selected products chosen for exceptional quality, performance and skin compatibility.',
  },
  {
    id: 'calming-space',
    icon: Flower,
    title: 'Calming Space',
    description:
      'A refined environment designed to help you slow down, feel restored and leave feeling beautiful.',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-[#2C1810] overflow-x-clip"
      style={{ paddingTop: '2.75rem', paddingBottom: '3rem' }}
      aria-labelledby="experience-heading"
    >
      <div className="site-container w-full flex flex-col gap-10 md:gap-11 lg:gap-12">
        {/* Header — full-width centered */}
        <header className="w-full text-center flex flex-col items-center gap-4 md:gap-5">
          <div className="flex w-full items-center justify-center gap-3">
            <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
            <span className="eyebrow text-[#C9A96E]">What Sets Us Apart</span>
            <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
          </div>
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#FEFCF9] leading-[1.12] text-pretty text-center max-w-3xl"
          >
            The Lumière Experience
          </h2>
        </header>

        {/* Feature blocks — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-10 lg:gap-x-10 xl:gap-x-12 gap-y-10 md:gap-y-12 lg:gap-y-0 items-start min-w-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center gap-4 min-w-0 w-full"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 min-w-12 min-h-12 border border-[#C9A96E]/80 shrink-0"
                  aria-hidden="true"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.25}
                    className="text-[#C9A96E]"
                  />
                </div>

                <h3 className="font-serif text-[1.0625rem] md:text-lg font-medium text-[#FEFCF9] leading-snug w-full">
                  {feature.title}
                </h3>

                <div
                  className="w-8 h-px bg-[#C9A96E]/70 shrink-0"
                  aria-hidden="true"
                />

                <p className="font-sans text-[0.875rem] leading-[1.75] text-[#DFC08C] w-full text-pretty">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
